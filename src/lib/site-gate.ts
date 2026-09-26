export const SITE_GATE_COOKIE = "eeh_draft";

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i += 1) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

export async function createGateToken(password: string): Promise<string> {
  const data = new TextEncoder().encode(`eeh-gate:v1:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export async function isValidGateToken(
  token: string | undefined,
  password: string,
): Promise<boolean> {
  if (!token) return false;
  const expected = await createGateToken(password);
  return timingSafeEqual(token, expected);
}

/** Only allow same-origin relative paths (open-redirect safe). */
export function safeNextPath(value: unknown, fallback = "/"): string {
  if (typeof value !== "string" || !value.startsWith("/") || value.startsWith("//")) {
    return fallback;
  }
  return value;
}
