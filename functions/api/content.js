// functions/api/content.js
import { json, isAuthed } from "../_lib/auth.js";
import { getDefaults } from "../_lib/defaults.js";

const KEYS = ["site","hero","applications","products","specs","faq"];

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const lang = url.searchParams.get("lang") === "ar" ? "ar" : "en";
  const prefix = lang === "ar" ? "ar:" : "";
  const fallback = getDefaults("en");

  const out = {};
  for (const k of KEYS) {
    const v = await env.CONTENT.get(prefix + k, "json");
    out[k] = v || fallback[k];
  }
  out._lang = lang;
  return json(out);
}

export async function onRequestPost({ request, env }) {
  if (!(await isAuthed(request, env))) {
    return json({ ok:false, error:"Unauthorized" }, 401);
  }

  let body;
  try { body = await request.json(); }
  catch { return json({ ok:false, error:"Invalid JSON" }, 400); }

  const lang = body._lang === "ar" ? "ar" : "en";
  const prefix = lang === "ar" ? "ar:" : "";
  const saved = [];

  for (const k of KEYS) {
    if (k in body) {
      await env.CONTENT.put(prefix + k, JSON.stringify(body[k]));
      saved.push(prefix + k);
    }
  }
  return json({ ok:true, lang, saved });
}