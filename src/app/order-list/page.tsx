/** @format */

export default function OrderListPage() {
  return (
    <div className="flex flex-col space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Order List</h1>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 bg-custom-red text-white rounded-lg hover:bg-custom-red/90 transition-colors">
            Filter Orders
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            Export
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search orders..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red focus:border-transparent"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red focus:border-transparent">
              <option value="">All Status</option>
              <option value="pending">Pending</option>
              <option value="preparing">Preparing</option>
              <option value="ready">Ready</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Order ID
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Customer
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Items
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Amount
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Status
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">Date</th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {/* Sample order rows */}
              <tr>
                <td className="py-4 text-sm text-gray-900">#ORD001</td>
                <td className="py-4 text-sm text-gray-900">John Doe</td>
                <td className="py-4 text-sm text-gray-500">
                  2x Burger, 1x Fries
                </td>
                <td className="py-4 text-sm text-gray-900">$25.99</td>
                <td className="py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    Preparing
                  </span>
                </td>
                <td className="py-4 text-sm text-gray-500">2 hours ago</td>
                <td className="py-4">
                  <button className="text-custom-red hover:text-custom-red/80">
                    View
                  </button>
                </td>
              </tr>
              {/* More sample rows can be added here */}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-center mt-6 text-gray-500">
          <p>No more orders to display</p>
        </div>
      </div>
    </div>
  );
}
