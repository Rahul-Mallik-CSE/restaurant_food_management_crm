/** @format */

export default function MenuManagementPage() {
  return (
    <div className="flex flex-col space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Menu Management</h1>
        <button className="px-4 py-2 bg-custom-red text-white rounded-lg hover:bg-custom-red/90 transition-colors">
          Add New Item
        </button>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold mb-4">Menu Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 border border-gray-200 rounded-lg hover:border-custom-red transition-colors cursor-pointer">
            <h3 className="font-medium">Appetizers</h3>
            <p className="text-sm text-gray-500">12 items</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg hover:border-custom-red transition-colors cursor-pointer">
            <h3 className="font-medium">Main Course</h3>
            <p className="text-sm text-gray-500">24 items</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg hover:border-custom-red transition-colors cursor-pointer">
            <h3 className="font-medium">Desserts</h3>
            <p className="text-sm text-gray-500">8 items</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg hover:border-custom-red transition-colors cursor-pointer">
            <h3 className="font-medium">Beverages</h3>
            <p className="text-sm text-gray-500">15 items</p>
          </div>
        </div>
      </div>

      {/* Menu Items List */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Menu Items</h2>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search items..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red focus:border-transparent"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red focus:border-transparent">
              <option value="">All Categories</option>
              <option value="appetizers">Appetizers</option>
              <option value="main">Main Course</option>
              <option value="desserts">Desserts</option>
              <option value="beverages">Beverages</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="pb-3 text-sm font-medium text-gray-500">Item</th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Category
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Price
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Status
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {/* Sample menu items */}
              <tr>
                <td className="py-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-xs text-gray-500">IMG</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Margherita Pizza
                      </p>
                      <p className="text-xs text-gray-500">
                        Fresh tomatoes, mozzarella, basil
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 text-sm text-gray-900">Main Course</td>
                <td className="py-4 text-sm text-gray-900">$18.99</td>
                <td className="py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Available
                  </span>
                </td>
                <td className="py-4">
                  <div className="flex items-center space-x-2">
                    <button className="text-custom-red hover:text-custom-red/80">
                      Edit
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              {/* More sample items can be added here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
