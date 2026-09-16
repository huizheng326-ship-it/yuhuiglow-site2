// functions/api/inquiry.js
import { json, isAuthed } from "../_lib/auth.js";

function validate(d) {
  if (!d || typeof d !== "object") return "Invalid payload";
  if (!d.name || String(d.name).trim().length < 2) return "Name required";
  if (!d.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(d.email))) return "Valid email required";
  if (!d.country || String(d.country).trim().length < 2) return "Country required";
  if (!d.message || String(d.message).trim().length < 5) return "Message required";
  return null;
}

export async function onRequestPost({ request, env }) {
  let body;
  try { body = await request.json(); }
  catch { return json({ ok: false, error: "Invalid JSON" }, 400); }

  const err = validate(body);
  if (err) return json({ ok: false, error: err }, 400);

  const id = Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 8);

  const entry = {
    id,
    name: String(body.name).slice(0, 200),
    email: String(body.email).slice(0, 200),
    company: String(body.company || "").slice(0, 200),
    country: String(body.country).slice(0, 100),
    interest: String(body.interest || "").slice(0, 200),
    message: String(body.message).slice(0, 4000),
    lang: body.lang === "ar" ? "ar" : "en",
    ip: request.headers.get("CF-Connecting-IP") || "",
    ua: (request.headers.get("User-Agent") || "").slice(0, 300),
    ts: new Date().toISOString(),
    read: false
  };

  await env.CONTENT.put(`inquiry:${id}`, JSON.stringify(entry));
  return json({ ok: true, id });
}

export async function onRequestGet({ request, env }) {
  if (!(await isAuthed(request, env))) {
    return json({ ok: false, error: "Unauthorized" }, 401);
  }

  const list = await env.CONTENT.list({ prefix: "inquiry:", limit: 1000 });
  const items = [];
  for (const k of list.keys) {
    const v = await env.CONTENT.get(k.name, "json");
    if (v) items.push(v);
  }
  items.sort((a, b) => String(b.ts).localeCompare(String(a.ts)));
  return json({ ok: true, items, total: items.length });
}

export async function onRequestDelete({ request, env }) {
  if (!(await isAuthed(request, env))) {
    return json({ ok: false, error: "Unauthorized" }, 401);
  }
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  if (!id) return json({ ok: false, error: "id required" }, 400);

  await env.CONTENT.delete(`inquiry:${id}`);
  return json({ ok: true });
}