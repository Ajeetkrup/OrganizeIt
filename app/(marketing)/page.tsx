import { Medal } from "lucide-react";
const MarketingPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-40 bg-slate-100">
      <div className="flex flex-col justify-center items-center mb-4 md:mb-0">
        <div className="flex items-center bg-amber-100 text-amber-700 rounded-md uppercase mb-4 shadow-sm p-4">
          <Medal className="h-6 w-6 mr-4" />
          <div>No 1 Task Management</div>
        </div>
        <div className="mb-6">
          <h1 className="text-3xl md:text-6xl text-neutral-800">
            Organizely helps team move
          </h1>
        </div>
        <div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-3xl md:text-6xl px-4 py-2 text-center rounded-md">
          work forward.
        </div>
      </div>
      <div className="text-sm md:text-xl text-neutral-400 max-w-xs md:max-w-2xl text-center py-2">
        Stay organized and on top of your tasks with Organizely. Perfect for
        teams of all sizes. Try it today!
      </div>
    </main>
  );
};

export default MarketingPage;
