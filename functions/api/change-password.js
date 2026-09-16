// functions/api/change-password.js
import { json, sha256, isAuthed, getAdminHash, clearSessionCookie } from "../_lib/auth.js";

export async function onRequestPost({ request, env }) {
  if (!(await isAuthed(request, env))) {
    return json({ ok: false, error: "Unauthorized" }, 401);
  }

  let body;
  try { body = await request.json(); }
  catch { return json({ ok: false, error: "Invalid JSON" }, 400); }

  const currentPwd = (body.current || "").trim();
  const newPwd     = (body.new     || "").trim();
  const confirmPwd = (body.confirm || "").trim();

  if (!currentPwd || !newPwd || !confirmPwd) {
    return json({ ok: false, error: "All fields are required" }, 400);
  }
  if (newPwd !== confirmPwd) {
    return json({ ok: false, error: "New passwords do not match" }, 400);
  }
  if (newPwd.length < 8) {
    return json({ ok: false, error: "New password must be at least 8 characters" }, 400);
  }
  if (!/[A-Za-z]/.test(newPwd) || !/[0-9]/.test(newPwd)) {
    return json({ ok: false, error: "New password must contain both letters and numbers" }, 400);
  }

  const expected = await getAdminHash(env);
  if (!expected) return json({ ok: false, error: "Server not configured" }, 500);

  const currentHash = await sha256(currentPwd);
  if (currentHash !== expected) {
    await new Promise(r => setTimeout(r, 500));
    return json({ ok: false, error: "Current password is incorrect" }, 401);
  }

  const newHash = await sha256(newPwd);
  await env.CONTENT.put("admin:password_hash", newHash);

  const list = await env.CONTENT.list({ prefix: "session:" });
  for (const k of list.keys) {
    await env.CONTENT.delete(k.name);
  }

  return json({ ok: true }, 200, { "Set-Cookie": clearSessionCookie() });
}