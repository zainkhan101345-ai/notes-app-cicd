export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  console.log("Next received id:", id);

  const res = await fetch(
    `http://server:5000/api/notes/${id}`,
    {
      method: "DELETE",
    }
  );

  const data = await res.json();
  return Response.json(data);
}