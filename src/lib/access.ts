/**
 * Portfolio access.
 *
 * Client work is shown behind a soft gate. Access is granted by a link Andrew
 * sends with an application — `kismet-ux.com/?k=<token>` — which unlocks on
 * arrival and is remembered on that device. The typed password stays as a
 * fallback for when he's talking to someone live.
 *
 * This is a curtain, not a lock: everything gated still ships in the bundle.
 * It exists to keep client work off the open web, not to withstand attack.
 * Rotating ACCESS_TOKEN invalidates every link previously handed out.
 */
export const ACCESS_TOKEN = 'unlocked';
export const ACCESS_PASSWORD = 'Kismet123!';

const STORE_KEY = 'kismet.access';
const PARAM = 'k';
/** `?lock` forgets this device's access, so the gated view can be previewed. */
const LOCK_PARAM = 'lock';

/** localStorage throws in private mode / blocked-cookie contexts. */
const safeStore = {
  get(): string | null {
    try {
      return window.localStorage.getItem(STORE_KEY);
    } catch {
      return null;
    }
  },
  set(v: string) {
    try {
      window.localStorage.setItem(STORE_KEY, v);
    } catch {
      /* remembering is a convenience, not a requirement */
    }
  },
  clear() {
    try {
      window.localStorage.removeItem(STORE_KEY);
    } catch {
      /* nothing stored means nothing to clear */
    }
  },
};

export const hasStoredAccess = (): boolean => safeStore.get() === ACCESS_TOKEN;

export const grantAccess = () => {
  safeStore.set(ACCESS_TOKEN);
  document.body.classList.remove('password-protected');
  document.body.classList.remove('pw-compact');
};

/** Forgets access on this device and puts the gate back up. */
export const revokeAccess = () => {
  safeStore.clear();
  document.body.classList.add('password-protected');
};

/** Reads ?k= from the URL, then strips it so the token isn't left in history. */
export const tokenFromUrl = (): string | null => {
  const url = new URL(window.location.href);
  const hash = url.hash.includes('?') ? new URLSearchParams(url.hash.split('?')[1]) : null;
  const token = url.searchParams.get(PARAM) ?? hash?.get(PARAM) ?? null;
  if (token) {
    url.searchParams.delete(PARAM);
    window.history.replaceState({}, '', url.pathname + url.search + url.hash);
  }
  return token;
};

/** True if this visitor already has access (stored, or via a link). */
export const resolveAccess = (): boolean => {
  // ?lock re-gates the site so the locked experience can be previewed after
  // you've already been let in.
  const url = new URL(window.location.href);
  if (url.searchParams.has(LOCK_PARAM)) {
    url.searchParams.delete(LOCK_PARAM);
    window.history.replaceState({}, '', url.pathname + url.search + url.hash);
    revokeAccess();
    return false;
  }
  if (tokenFromUrl() === ACCESS_TOKEN) {
    grantAccess();
    return true;
  }
  if (hasStoredAccess()) {
    grantAccess();
    return true;
  }
  return false;
};
