"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function AppLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* MOBILE SIDEBAR */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div className="w-64 bg-white p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-6">The Organic Collective</h2>

            <nav className="flex flex-col gap-2 text-gray-600">
              <Link
                href="/dashboard"
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                🏠 Feed
              </Link>
              <Link
                href="/my-requests"
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                🛒 My Requests
              </Link>
              <Link
                href="/my-deliveries"
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                🚚 My Deliveries
              </Link>
              <Link
                href="/profile"
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                👤 Profile
              </Link>
              <Link
                href="/settings"
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                ⚙️ Settings
              </Link>
            </nav>
          </div>

          {/* overlay */}
          <div className="flex-1 bg-black/40" onClick={() => setOpen(false)} />
        </div>
      )}

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden md:block w-64 bg-white border-r p-6">
        <h2 className="text-xl font-bold mb-6">The Organic Collective</h2>

        <nav className="flex flex-col gap-2 text-gray-600">
          <Link href="/dashboard" className="p-2 rounded-lg hover:bg-gray-100">
            🏠 Feed
          </Link>
          <Link
            href="/my-requests"
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            🛒 My Requests
          </Link>
          <Link
            href="/my-deliveries"
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            🚚 My Deliveries
          </Link>
          <Link href="/profile" className="p-2 rounded-lg hover:bg-gray-100">
            👤 Profile
          </Link>
          <Link href="/settings" className="p-2 rounded-lg hover:bg-gray-100">
            ⚙️ Settings
          </Link>
        </nav>
      </aside>

      {/* MAIN */}
      <div className="flex-1">
        {/* TOP NAV */}
        <div className="flex justify-between items-center p-4 bg-white border-b">
          {/* LEFT */}
          <div className="flex items-center gap-3">
            <button
              className="md:hidden text-2xl"
              onClick={() => setOpen(true)}
            >
              ☰
            </button>

            <input
              placeholder="Search..."
              className="hidden md:block p-2 border rounded-full w-80"
            />
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <span>🔔</span>
            <UserButton />
          </div>
        </div>

        {/* CONTENT */}
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
