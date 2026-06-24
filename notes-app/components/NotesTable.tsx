"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NotesTable() {
  const router = useRouter();
  const [notes, setNotes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchNotes = async () => {
    try {
      const res = await fetch("/api/notes");
      const data = await res.json();
      setNotes(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmed = confirm("Delete this note?");
    if (!confirmed) return;
    console.log("id",id)
    try {
      await fetch(`/api/notes/${id}`, {
        method: "DELETE",
      });

      fetchNotes(); // refresh data instantly
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <p className="text-center py-10">Loading notes...</p>;
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200">
      <table className="w-full">
        <thead>
          <tr className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
            <th className="px-8 py-5 text-left">Title</th>
            <th className="px-8 py-5 text-left">Description</th>
            <th className="px-8 py-5 text-left">Created</th>
            <th className="px-8 py-5 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {notes.map((note, index) => (
            <tr
              key={note._id}
              className={`border-b ${
                index % 2 === 0 ? "bg-white" : "bg-slate-50"
              }`}
            >
              <td className="px-8 py-6 font-semibold">{note.title}</td>
              <td className="px-8 py-6">{note.description}</td>
              <td className="px-8 py-6">
                {new Date(note.createdAt).toLocaleDateString()}
              </td>

              <td className="px-8 py-6">
                <button
                  onClick={() => handleDelete(note._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {notes.length === 0 && (
        <p className="text-center py-10 text-gray-500">
          No Notes Found
        </p>
      )}
    </div>
  );
}