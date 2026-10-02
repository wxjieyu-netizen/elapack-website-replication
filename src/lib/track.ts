/** Fire a GA4 event if gtag has loaded (snippet lives in index.html). */
export function track(name: string, params: Record<string, unknown> = {}): void {
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  w.gtag?.("event", name, params);
}
