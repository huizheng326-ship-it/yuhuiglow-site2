// functions/api/logout.js
import { json, getSessionToken, clearSessionCookie } from "../_lib/auth.js";

export async function onRequestPost({ request, env }) {
  const token = getSessionToken(request);
  if (token) {
    try { await env.CONTENT.delete(`session:${token}`); } catch {}
  }
  return json({ ok: true }, 200, { "Set-Cookie": clearSessionCookie() });
}