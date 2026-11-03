import { useCallback, useEffect, useState } from 'react';

export const MOBILE_BREAKPOINT = 680;

type WidthListener = (width: number) => void;

let currentWidth = typeof window === 'undefined' ? undefined : window.innerWidth;
const listeners = new Set<WidthListener>();
let resizeHandler: (() => void) | null = null;
let resizeRaf = 0;

const notify = (width: number) => {
  if (width === currentWidth) {
    return;
  }
  currentWidth = width;
  listeners.forEach(listener => listener(width));
};

const ensureResizeListener = () => {
  if (typeof window === 'undefined' || resizeHandler) {
    return;
  }
  resizeHandler = () => {
    if (resizeRaf) {
      cancelAnimationFrame(resizeRaf);
    }
    resizeRaf = requestAnimationFrame(() => {
      resizeRaf = 0;
      notify(window.innerWidth);
    });
  };
  window.addEventListener('resize', resizeHandler, { passive: true });
  notify(window.innerWidth);
};

const teardownResizeListener = () => {
  if (!resizeHandler) {
    return;
  }
  window.removeEventListener('resize', resizeHandler);
  resizeHandler = null;
  if (resizeRaf) {
    cancelAnimationFrame(resizeRaf);
    resizeRaf = 0;
  }
};

const subscribeWidth = (listener: WidthListener) => {
  listeners.add(listener);
  if (currentWidth !== undefined) {
    listener(currentWidth);
  }
  if (listeners.size === 1) {
    ensureResizeListener();
  }
};

const unsubscribeWidth = (listener: WidthListener) => {
  listeners.delete(listener);
  if (listeners.size === 0) {
    teardownResizeListener();
  }
};

export const useBreakpoint = () => {
  const [width, setWidth] = useState<number | undefined>(currentWidth);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }
    subscribeWidth(setWidth);
    return () => unsubscribeWidth(setWidth);
  }, []);

  const isBelow = useCallback(
    (value: number = MOBILE_BREAKPOINT) => (width ?? Number.MAX_SAFE_INTEGER) <= value,
    [width],
  );

  return { width, isBelow };
};

export const useIsMobile = (breakpoint: number = MOBILE_BREAKPOINT) => {
  const { isBelow } = useBreakpoint();
  return isBelow(breakpoint);
};
