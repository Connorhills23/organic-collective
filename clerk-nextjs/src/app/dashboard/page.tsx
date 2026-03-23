import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <main className="flex-1 p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4"></div>
      </div>

      <h2 className="text-xl font-bold mb-6">Communication House </h2>

      <div className="bg-gray-100 p-4 rounded-xl mb-6">
        <p className="font-semibold">Welcome, Neighbor</p>
        <p className="text-sm text-gray-500">Greenhouse Level: Sprout</p>
        <Link href="/request">
          <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-full">
            Create New List
          </button>
        </Link>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold">Street Feed</h1>
        <p className="text-gray-500">
          Helping 12 neighbors reduce carbon footprints today.
        </p>
      </div>

      <div className="mt-6 border-2 border-dashed rounded-2xl p-10 text-center">
        <p className="text-lg font-semibold">Need a hand?</p>
        <p className="text-gray-500 mt-2">
          Post your list and let a neighbor grab it.
        </p>

        <Link href="/request">
          <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-full">
            Post List
          </button>
        </Link>
      </div>
    </main>
  );
}
