/** @format */

export default function PromotionPage() {
  return (
    <div className="flex flex-col space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Promotions</h1>
        <button className="px-4 py-2 bg-custom-red text-white rounded-lg hover:bg-custom-red/90 transition-colors">
          Create Promotion
        </button>
      </div>

      {/* Active Promotions */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold mb-4">Active Promotions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-green-200 rounded-lg p-4 bg-green-50">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-green-900">20% Off Weekend</h3>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                Active
              </span>
            </div>
            <p className="text-sm text-green-700 mb-2">
              Get 20% off on all orders during weekends
            </p>
            <div className="flex justify-between text-xs text-green-600">
              <span>Valid until: Dec 31, 2025</span>
              <span>Used: 45 times</span>
            </div>
          </div>

          <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-blue-900">Free Delivery</h3>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                Active
              </span>
            </div>
            <p className="text-sm text-blue-700 mb-2">
              Free delivery on orders above $30
            </p>
            <div className="flex justify-between text-xs text-blue-600">
              <span>Valid until: Jan 15, 2026</span>
              <span>Used: 128 times</span>
            </div>
          </div>
        </div>
      </div>

      {/* All Promotions List */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">All Promotions</h2>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search promotions..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red focus:border-transparent"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red focus:border-transparent">
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="scheduled">Scheduled</option>
              <option value="expired">Expired</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Promotion Name
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">Type</th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Discount
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Valid Period
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Status
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Usage
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="py-4 text-sm text-gray-900">20% Off Weekend</td>
                <td className="py-4 text-sm text-gray-500">Percentage</td>
                <td className="py-4 text-sm text-gray-900">20%</td>
                <td className="py-4 text-sm text-gray-500">
                  Nov 1 - Dec 31, 2025
                </td>
                <td className="py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="py-4 text-sm text-gray-500">45/100</td>
                <td className="py-4">
                  <div className="flex items-center space-x-2">
                    <button className="text-custom-red hover:text-custom-red/80">
                      Edit
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      Deactivate
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-4 text-sm text-gray-900">Free Delivery</td>
                <td className="py-4 text-sm text-gray-500">Free Shipping</td>
                <td className="py-4 text-sm text-gray-900">$0 delivery</td>
                <td className="py-4 text-sm text-gray-500">
                  Dec 1, 2025 - Jan 15, 2026
                </td>
                <td className="py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="py-4 text-sm text-gray-500">128/∞</td>
                <td className="py-4">
                  <div className="flex items-center space-x-2">
                    <button className="text-custom-red hover:text-custom-red/80">
                      Edit
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      Deactivate
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
