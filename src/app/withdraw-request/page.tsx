/** @format */

export default function WithdrawRequestPage() {
  return (
    <div className="flex flex-col space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Withdraw Requests</h1>
        <button className="px-4 py-2 bg-custom-red text-white rounded-lg hover:bg-custom-red/90 transition-colors">
          New Withdraw Request
        </button>
      </div>

      {/* Balance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Available Balance
          </h3>
          <p className="text-3xl font-bold text-green-600">$8,750.00</p>
          <p className="text-sm text-gray-500 mt-1">Ready for withdrawal</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Pending Withdrawals
          </h3>
          <p className="text-3xl font-bold text-yellow-600">$2,300.00</p>
          <p className="text-sm text-gray-500 mt-1">3 requests</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Total Withdrawn
          </h3>
          <p className="text-3xl font-bold text-gray-900">$45,200.00</p>
          <p className="text-sm text-gray-500 mt-1">This year</p>
        </div>
      </div>

      {/* Bank Accounts */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Bank Accounts</h2>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            Add Bank Account
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-custom-red transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Primary Account</h3>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                Verified
              </span>
            </div>
            <p className="text-sm text-gray-600">Bank of America</p>
            <p className="text-sm text-gray-500">****1234</p>
            <div className="mt-3 flex space-x-2">
              <button className="text-custom-red hover:text-custom-red/80 text-sm">
                Edit
              </button>
              <button className="text-gray-500 hover:text-gray-700 text-sm">
                Remove
              </button>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:border-custom-red transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Secondary Account</h3>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                Pending
              </span>
            </div>
            <p className="text-sm text-gray-600">Chase Bank</p>
            <p className="text-sm text-gray-500">****5678</p>
            <div className="mt-3 flex space-x-2">
              <button className="text-custom-red hover:text-custom-red/80 text-sm">
                Verify
              </button>
              <button className="text-gray-500 hover:text-gray-700 text-sm">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Withdraw Requests History */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Withdrawal History</h2>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search requests..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red focus:border-transparent"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red focus:border-transparent">
              <option value="">All Status</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="completed">Completed</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Request ID
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Amount
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Bank Account
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Status
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Request Date
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Processed Date
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="py-4 text-sm text-gray-900">#WR001234</td>
                <td className="py-4 text-sm text-gray-900">$1,500.00</td>
                <td className="py-4 text-sm text-gray-500">
                  Bank of America ****1234
                </td>
                <td className="py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    Pending
                  </span>
                </td>
                <td className="py-4 text-sm text-gray-500">Dec 15, 2025</td>
                <td className="py-4 text-sm text-gray-500">-</td>
                <td className="py-4">
                  <button className="text-custom-red hover:text-custom-red/80">
                    View
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-4 text-sm text-gray-900">#WR001233</td>
                <td className="py-4 text-sm text-gray-900">$2,000.00</td>
                <td className="py-4 text-sm text-gray-500">
                  Bank of America ****1234
                </td>
                <td className="py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Completed
                  </span>
                </td>
                <td className="py-4 text-sm text-gray-500">Dec 10, 2025</td>
                <td className="py-4 text-sm text-gray-500">Dec 12, 2025</td>
                <td className="py-4">
                  <button className="text-custom-red hover:text-custom-red/80">
                    View
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-4 text-sm text-gray-900">#WR001232</td>
                <td className="py-4 text-sm text-gray-900">$800.00</td>
                <td className="py-4 text-sm text-gray-500">
                  Chase Bank ****5678
                </td>
                <td className="py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Rejected
                  </span>
                </td>
                <td className="py-4 text-sm text-gray-500">Dec 8, 2025</td>
                <td className="py-4 text-sm text-gray-500">Dec 9, 2025</td>
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
