import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <Navbar />

      <main className="flex items-center justify-center px-6 py-32">
        <div className="max-w-3xl text-center">

          <h1 className="text-5xl font-semibold tracking-tight text-black dark:text-white">
            Management for Janniken
          </h1>

          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            Janniken hjelper deg 
            med det du trenger hjelp med!
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="rounded-full bg-black px-6 py-3 text-white hover:bg-zinc-800">
              Kontakt Janniken
            </button>

            <button className="rounded-full border border-zinc-300 px-6 py-3 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900">
              Jannikens talenter
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}