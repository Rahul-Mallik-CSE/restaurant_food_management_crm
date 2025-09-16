/** @format */

export default function RiderManagementPage() {
  return (
    <div className="flex flex-col space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Rider Management</h1>
        <button className="px-4 py-2 bg-custom-red text-white rounded-lg hover:bg-custom-red/90 transition-colors">
          Add New Rider
        </button>
      </div>

      {/* Rider Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Total Riders
          </h3>
          <p className="text-3xl font-bold text-gray-900">24</p>
          <p className="text-sm text-gray-500 mt-1">Active riders</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Available Now
          </h3>
          <p className="text-3xl font-bold text-green-600">18</p>
          <p className="text-sm text-gray-500 mt-1">Ready for delivery</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            On Delivery
          </h3>
          <p className="text-3xl font-bold text-yellow-600">6</p>
          <p className="text-sm text-gray-500 mt-1">Currently delivering</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Offline</h3>
          <p className="text-3xl font-bold text-red-600">2</p>
          <p className="text-sm text-gray-500 mt-1">Not available</p>
        </div>
      </div>

      {/* Rider List */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">All Riders</h2>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search riders..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red focus:border-transparent"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red focus:border-transparent">
              <option value="">All Status</option>
              <option value="available">Available</option>
              <option value="busy">Busy</option>
              <option value="offline">Offline</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Rider
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Contact
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Vehicle
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Status
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Rating
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Deliveries Today
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="py-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-600">
                        JD
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        John Doe
                      </p>
                      <p className="text-xs text-gray-500">Rider #001</p>
                    </div>
                  </div>
                </td>
                <td className="py-4">
                  <p className="text-sm text-gray-900">+1 234-567-8900</p>
                  <p className="text-xs text-gray-500">john.doe@email.com</p>
                </td>
                <td className="py-4 text-sm text-gray-900">Motorcycle</td>
                <td className="py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Available
                  </span>
                </td>
                <td className="py-4">
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm text-gray-900">4.8</span>
                  </div>
                </td>
                <td className="py-4 text-sm text-gray-900">12</td>
                <td className="py-4">
                  <div className="flex items-center space-x-2">
                    <button className="text-custom-red hover:text-custom-red/80">
                      View
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      Edit
                    </button>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="py-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-600">
                        JS
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Jane Smith
                      </p>
                      <p className="text-xs text-gray-500">Rider #002</p>
                    </div>
                  </div>
                </td>
                <td className="py-4">
                  <p className="text-sm text-gray-900">+1 234-567-8901</p>
                  <p className="text-xs text-gray-500">jane.smith@email.com</p>
                </td>
                <td className="py-4 text-sm text-gray-900">Bicycle</td>
                <td className="py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    On Delivery
                  </span>
                </td>
                <td className="py-4">
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm text-gray-900">4.9</span>
                  </div>
                </td>
                <td className="py-4 text-sm text-gray-900">8</td>
                <td className="py-4">
                  <div className="flex items-center space-x-2">
                    <button className="text-custom-red hover:text-custom-red/80">
                      Track
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      Edit
                    </button>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="py-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-600">
                        MB
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Mike Brown
                      </p>
                      <p className="text-xs text-gray-500">Rider #003</p>
                    </div>
                  </div>
                </td>
                <td className="py-4">
                  <p className="text-sm text-gray-900">+1 234-567-8902</p>
                  <p className="text-xs text-gray-500">mike.brown@email.com</p>
                </td>
                <td className="py-4 text-sm text-gray-900">Car</td>
                <td className="py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Offline
                  </span>
                </td>
                <td className="py-4">
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm text-gray-900">4.6</span>
                  </div>
                </td>
                <td className="py-4 text-sm text-gray-900">0</td>
                <td className="py-4">
                  <div className="flex items-center space-x-2">
                    <button className="text-custom-red hover:text-custom-red/80">
                      View
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Performance Analytics */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold mb-4">Performance Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">4.7</p>
            <p className="text-sm text-gray-500">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">23 min</p>
            <p className="text-sm text-gray-500">Avg Delivery Time</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">98.5%</p>
            <p className="text-sm text-gray-500">On-Time Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
}
