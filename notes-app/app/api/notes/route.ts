const BACKEND_URL = "http://server:5000/api/notes";

// GET
export async function GET() {
  const res = await fetch(BACKEND_URL, { cache: "no-store" });
  const data = await res.json();
  return Response.json(data);
}

// POST
export async function POST(req: Request) {
  const body = await req.json();

  const res = await fetch(BACKEND_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return Response.json(data);
}