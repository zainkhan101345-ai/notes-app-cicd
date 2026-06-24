const BASE_URL1= "/api/notes";



export async function getNotes() {
    console.log("Sending get requuest1")

  const res = await fetch(BASE_URL1, { cache: "no-store" });
  return res.json();
}

export async function addNote(data: { title: string; description: string }) {
  console.log("Sending post requuest")
  const res = await fetch(BASE_URL1, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
}