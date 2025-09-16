/** @format */

export default function PaymentPage() {
  return (
    <div className="flex flex-col space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Payment Management</h1>
        <button className="px-4 py-2 bg-custom-red text-white rounded-lg hover:bg-custom-red/90 transition-colors">
          Add Payment Method
        </button>
      </div>

      {/* Payment Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Total Revenue
          </h3>
          <p className="text-3xl font-bold text-custom-red">$12,450.00</p>
          <p className="text-sm text-gray-500 mt-1">This month</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Pending Payments
          </h3>
          <p className="text-3xl font-bold text-yellow-600">$850.00</p>
          <p className="text-sm text-gray-500 mt-1">5 transactions</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Failed Payments
          </h3>
          <p className="text-3xl font-bold text-red-600">$125.00</p>
          <p className="text-sm text-gray-500 mt-1">2 transactions</p>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold mb-4">Payment Methods</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-custom-red transition-colors">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold">💳</span>
              </div>
              <div>
                <h3 className="font-medium">Credit/Debit Cards</h3>
                <p className="text-sm text-gray-500">Visa, Mastercard, Amex</p>
              </div>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <span className="text-sm text-green-600">Active</span>
              <button className="text-custom-red hover:text-custom-red/80 text-sm">
                Configure
              </button>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:border-custom-red transition-colors">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 font-bold">💰</span>
              </div>
              <div>
                <h3 className="font-medium">Cash on Delivery</h3>
                <p className="text-sm text-gray-500">Pay when delivered</p>
              </div>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <span className="text-sm text-green-600">Active</span>
              <button className="text-custom-red hover:text-custom-red/80 text-sm">
                Configure
              </button>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:border-custom-red transition-colors">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 font-bold">📱</span>
              </div>
              <div>
                <h3 className="font-medium">Digital Wallets</h3>
                <p className="text-sm text-gray-500">
                  PayPal, Apple Pay, Google Pay
                </p>
              </div>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <span className="text-sm text-gray-500">Inactive</span>
              <button className="text-custom-red hover:text-custom-red/80 text-sm">
                Enable
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search transactions..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red focus:border-transparent"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red focus:border-transparent">
              <option value="">All Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
              <option value="refunded">Refunded</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Transaction ID
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Order
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Customer
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Amount
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Method
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
              <tr>
                <td className="py-4 text-sm text-gray-900">#TXN001234</td>
                <td className="py-4 text-sm text-gray-900">#ORD001</td>
                <td className="py-4 text-sm text-gray-900">John Doe</td>
                <td className="py-4 text-sm text-gray-900">$25.99</td>
                <td className="py-4 text-sm text-gray-500">Credit Card</td>
                <td className="py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Completed
                  </span>
                </td>
                <td className="py-4 text-sm text-gray-500">2 hours ago</td>
                <td className="py-4">
                  <button className="text-custom-red hover:text-custom-red/80">
                    View
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-4 text-sm text-gray-900">#TXN001233</td>
                <td className="py-4 text-sm text-gray-900">#ORD002</td>
                <td className="py-4 text-sm text-gray-900">Jane Smith</td>
                <td className="py-4 text-sm text-gray-900">$18.50</td>
                <td className="py-4 text-sm text-gray-500">Cash</td>
                <td className="py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    Pending
                  </span>
                </td>
                <td className="py-4 text-sm text-gray-500">4 hours ago</td>
                <td className="py-4">
                  <button className="text-custom-red hover:text-custom-red/80">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
