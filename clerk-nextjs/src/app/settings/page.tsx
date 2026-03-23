export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-gray-500">Manage your account and preferences.</p>
      </div>

      <div className="max-w-3xl space-y-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="font-semibold mb-4">Profile</h2>

          <div className="space-y-4">
            <input
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg"
            />

            <input
              placeholder="Email"
              className="w-full p-3 border rounded-lg"
            />

            <button className="bg-green-600 text-white px-6 py-2 rounded-full">
              Save Changes
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="font-semibold mb-4">Address</h2>

          <input
            placeholder="Street Address"
            className="w-full p-3 border rounded-lg mb-3"
          />

          <input
            placeholder="City"
            className="w-full p-3 border rounded-lg mb-3"
          />

          <input
            placeholder="Postcode"
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="font-semibold mb-4">Notifications</h2>

          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span>Email updates</span>
              <input type="checkbox" />
            </label>

            <label className="flex items-center justify-between">
              <span>New requests nearby</span>
              <input type="checkbox" />
            </label>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow border border-red-200">
          <h2 className="font-semibold mb-4 text-red-600">Danger Zone</h2>

          <button className="bg-red-500 text-white px-6 py-2 rounded-full">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
