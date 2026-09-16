// functions/_lib/auth.js

export function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...extraHeaders
    }
  });
}

export async function sha256(str) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
}

export function getSessionToken(request) {
  const cookie = request.headers.get("Cookie") || "";
  const m = cookie.match(/(?:^|;\s*)yuhui_session=([^;]+)/);
  return m ? m[1] : null;
}

export async function isAuthed(request, env) {
  const token = getSessionToken(request);
  if (!token) return false;
  const v = await env.CONTENT.get(`session:${token}`);
  return v === "1";
}

export function setSessionCookie(token, maxAge = 7 * 24 * 3600) {
  return `yuhui_session=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${maxAge}`;
}

export function clearSessionCookie() {
  return `yuhui_session=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`;
}

export async function getAdminHash(env) {
  const kvHash = await env.CONTENT.get("admin:password_hash");
  if (kvHash) return kvHash;
  return env.ADMIN_PASSWORD_HASH || null;
}