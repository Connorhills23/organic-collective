"use client";

import { UserProfile } from "@clerk/nextjs";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="text-gray-500">Manage your account details.</p>
      </div>

      <div className="bg-white rounded-2xl shadow p-4">
        <UserProfile />
      </div>
    </div>
  );
}
