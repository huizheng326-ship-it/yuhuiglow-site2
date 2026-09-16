// functions/api/login.js
import { json, sha256, setSessionCookie, getAdminHash } from "../_lib/auth.js";

export async function onRequestPost({ request, env }) {
  let body;
  try { body = await request.json(); }
  catch { return json({ ok: false, error: "Invalid request body" }, 400); }

  const password = (body.password || "").trim();
  if (!password) return json({ ok: false, error: "Password required" }, 400);

  const expected = await getAdminHash(env);
  if (!expected) return json({ ok: false, error: "Server not configured" }, 500);

  const hash = await sha256(password);
  if (hash !== expected) {
    await new Promise(r => setTimeout(r, 500));
    return json({ ok: false, error: "Incorrect password" }, 401);
  }

  const token = crypto.randomUUID() + crypto.randomUUID().replace(/-/g, "");
  await env.CONTENT.put(`session:${token}`, "1", { expirationTtl: 7 * 24 * 3600 });

  return json({ ok: true }, 200, { "Set-Cookie": setSessionCookie(token) });
}