// functions/api/session.js
import { json, isAuthed } from "../_lib/auth.js";

export async function onRequestGet({ request, env }) {
  const ok = await isAuthed(request, env);
  return json({ ok });
}