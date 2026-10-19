/** Empty on local dev. `/portfolio` when GitHub Pages builds the site. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Public file path. next/image does not add the Pages prefix on a static export. */
export function asset(path: string) {
  return `${basePath}${path}`;
}
