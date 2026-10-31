export const ACCESS_TOKEN = 'X4aPY1dkWJ3X';
export const ACCESS_PASSWORD = 'Kismet123!';

const STORE_KEY = 'kismet.access';
const PARAM = 'k';
const LOCK_PARAM = 'lock';

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
    }
  },
  clear() {
    try {
      window.localStorage.removeItem(STORE_KEY);
    } catch {
    }
  },
};

export const hasStoredAccess = (): boolean => safeStore.get() === ACCESS_TOKEN;

export const grantAccess = () => {
  safeStore.set(ACCESS_TOKEN);
  document.body.classList.remove('password-protected');
  document.body.classList.remove('pw-compact');
};

export const revokeAccess = () => {
  safeStore.clear();
  document.body.classList.add('password-protected');
};

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

export const resolveAccess = (): boolean => {
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
