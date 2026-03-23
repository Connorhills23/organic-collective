export default function MyRequestsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">My Requests</h1>
        <p className="text-gray-500">Manage the grocery lists you’ve posted.</p>
      </div>

      <div className="bg-white p-10 rounded-2xl shadow text-center">
        <p className="text-lg font-semibold">No more requests</p>
        <p className="text-gray-500 mt-2">You’re all caught up 🌱</p>
      </div>
    </div>
  );
}
