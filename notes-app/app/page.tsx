import Link from "next/link";
import NotesTable from "@/components/NotesTable";

export default async function Home() {

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-12">

        <div className="mb-10 flex items-center justify-between">

          <div>
            <h1 className="text-5xl font-bold text-slate-800">
              Notes Dashboard
            </h1>

            <p className="mt-3 text-lg text-slate-500">
              Manage and organize your notes effortlessly.
            </p>
          </div>

          <Link
            href="/add"
            className="rounded-xl bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-indigo-700"
          >
            + Add Note
          </Link>

        </div>

        <div className="rounded-3xl bg-red p-8 shadow-2xl">
          <NotesTable  />
        </div>
        

      </div>
    </main>
  );
}