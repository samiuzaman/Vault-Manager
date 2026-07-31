import Cards from "./Cards";
import Search from "./Search";
import Sort from "./Sort";

export default function Main() {
  return (
    <main className="p-8">
      <div className="max-w-7xl mx-auto space-y-10 px-4">
        {/* Search, Sort, and Filter Buttons  */}
        <section className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 p-6 shadow-2xl shadow-black/40 backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            {/* Search Bar  */}
            <Search />

            <div className="flex flex-wrap gap-2">
              <Sort />
            </div>
          </div>
        </section>

        {/* Password Cards Grid  */}
        <Cards />
      </div>
    </main>
  );
}
