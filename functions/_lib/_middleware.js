// functions/_middleware.js

export async function onRequest(context) {
  const res = await context.next();

  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set("X-Frame-Options", "SAMEORIGIN");

  const url = new URL(context.request.url);
  if (url.pathname.startsWith("/admin")) {
    res.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  }

  return res;
}