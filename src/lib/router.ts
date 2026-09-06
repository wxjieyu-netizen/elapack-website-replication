import { useSyncExternalStore } from 'react';

export type Route =
  | { kind: 'home' }
  | { kind: 'line'; lineId: string }
  | { kind: 'series'; path: string }
  | { kind: 'product'; slug: string }
  | { kind: 'page'; page: string }
  | { kind: 'blog' }
  | { kind: 'blog-post'; slug: string }
  | { kind: 'not-found' };

const LINES = ['pouches', 'boxes', 'sets'];
const PAGES = ['custom', 'sustainability', 'about', 'contact'];

export function parsePath(pathname: string): Route {
  const seg = pathname.split('/').filter(Boolean);
  if (seg.length === 0) return { kind: 'home' };
  const [a, b] = seg;

  if (LINES.includes(a)) {
    return b ? { kind: 'series', path: `/${a}/${b}` } : { kind: 'line', lineId: a };
  }
  if (a === 'product' && b) return { kind: 'product', slug: b };
  if (a === 'blog') return b ? { kind: 'blog-post', slug: b } : { kind: 'blog' };
  if (PAGES.includes(a)) return { kind: 'page', page: a };
  return { kind: 'not-found' };
}

export function currentRoute(): Route {
  return parsePath(window.location.pathname);
}

export function navigate(path: string) {
  if (window.location.pathname === path) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0 });
}

// Subscribe to popstate events so components re-render on back/forward.
// IMPORTANT: getSnapshot must return a cached stable reference, otherwise
// useSyncExternalStore treats every render as a store change and loops forever
// (React error #185). `cachedRoute` is only replaced inside the popstate handler.
let cachedRoute: Route = currentRoute();

function subscribe(cb: () => void) {
  const handler = () => {
    cachedRoute = currentRoute();
    cb();
  };
  window.addEventListener('popstate', handler);
  return () => window.removeEventListener('popstate', handler);
}

export function useRoute(): Route {
  return useSyncExternalStore(subscribe, () => cachedRoute);
}

// Breadcrumb-friendly helpers
export function linkToHome() {
  navigate('/');
}
