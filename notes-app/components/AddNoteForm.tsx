"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addNote } from "@/lib/api";

export default function AddNoteForm() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!title || !description) return;

    setLoading(true);

    try {
      await addNote({ title, description });

      setTitle("");
      setDescription("");

      router.push("/");
      router.refresh();
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-700 px-10 py-8">
          <h1 className="text-4xl font-bold text-white">
            Create New Note
          </h1>

          <p className="text-slate-300 mt-2 text-lg">
            Organize your thoughts and keep everything in one place.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-10 space-y-8"
        >
          <div>
            <label className="block mb-3 text-sm font-semibold uppercase tracking-wider text-slate-600">
              Title
            </label>

            <input
              type="text"
              placeholder="Meeting Notes"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-5 py-4 text-lg transition-all outline-none focus:bg-white focus:border-slate-900 focus:ring-4 focus:ring-slate-200"
            />
          </div>

          <div>
            <label className="block mb-3 text-sm font-semibold uppercase tracking-wider text-slate-600">
              Description
            </label>

            <textarea
              rows={8}
              placeholder="Write your note here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full resize-none rounded-xl border border-slate-300 bg-slate-50 px-5 py-4 text-lg transition-all outline-none focus:bg-white focus:border-slate-900 focus:ring-4 focus:ring-slate-200"
            />
          </div>

          <div className="flex justify-end gap-4 pt-4">

            <button
              type="button"
              className="rounded-xl border border-slate-300 px-8 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-slate-900 px-10 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-black hover:-translate-y-1 hover:shadow-2xl disabled:opacity-50"
            >
              {loading ? "Saving..." : "Save Note"}
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}
