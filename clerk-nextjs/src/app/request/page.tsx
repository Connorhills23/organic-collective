export default function CreateRequest() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Create Grocery Request</h1>

      <div className="p-6 bg-white rounded-xl shadow">
        <h2 className="font-semibold mb-4">Store Details</h2>

        <input
          placeholder="Store Name"
          className="w-full border p-2 rounded mb-4"
        />

        <select className="w-full border p-2 rounded">
          <option>Produce & Veggies</option>
          <option>Other</option>
        </select>
      </div>

      <div className="p-6 bg-white rounded-xl shadow">
        <h2 className="font-semibold mb-4">Your List</h2>

        <input
          placeholder="Add item..."
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="p-6 bg-white rounded-xl shadow">
        <h2 className="font-semibold mb-4">Timing</h2>

        <input type="datetime-local" className="border p-2 rounded" />
      </div>

      <button className="w-full bg-green-600 text-white py-3 rounded-full">
        Post to Street Feed
      </button>
    </div>
  );
}
