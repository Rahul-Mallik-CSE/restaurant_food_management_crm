/** @format */

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          Analytics Dashboard
        </h1>
        <div className="flex items-center space-x-2">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red focus:border-transparent">
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 3 months</option>
            <option value="365">Last year</option>
          </select>
          <button className="px-4 py-2 bg-custom-red text-white rounded-lg hover:bg-custom-red/90 transition-colors">
            Export Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Total Revenue
          </h3>
          <p className="text-3xl font-bold text-custom-red">$48,250</p>
          <div className="flex items-center mt-2">
            <span className="text-green-600 text-sm font-medium">↗ +12.5%</span>
            <span className="text-gray-500 text-sm ml-2">vs last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Total Orders
          </h3>
          <p className="text-3xl font-bold text-blue-600">1,847</p>
          <div className="flex items-center mt-2">
            <span className="text-green-600 text-sm font-medium">↗ +8.3%</span>
            <span className="text-gray-500 text-sm ml-2">vs last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Avg Order Value
          </h3>
          <p className="text-3xl font-bold text-purple-600">$26.15</p>
          <div className="flex items-center mt-2">
            <span className="text-red-600 text-sm font-medium">↘ -2.1%</span>
            <span className="text-gray-500 text-sm ml-2">vs last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Customer Satisfaction
          </h3>
          <p className="text-3xl font-bold text-yellow-600">4.6/5.0</p>
          <div className="flex items-center mt-2">
            <span className="text-green-600 text-sm font-medium">↗ +0.2</span>
            <span className="text-gray-500 text-sm ml-2">vs last month</span>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-lg font-semibold mb-4">Sales Trend</h2>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-4xl mb-2">📈</div>
              <p>Sales chart visualization would go here</p>
              <p className="text-sm">
                Integration with charting library needed
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-lg font-semibold mb-4">Order Distribution</h2>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-4xl mb-2">🥧</div>
              <p>Order distribution pie chart would go here</p>
              <p className="text-sm">
                Integration with charting library needed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Performing Items */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold mb-4">
          Top Performing Menu Items
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Item Name
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Category
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Orders
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Revenue
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Avg Rating
                </th>
                <th className="pb-3 text-sm font-medium text-gray-500">
                  Trend
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="py-4 text-sm font-medium text-gray-900">
                  Margherita Pizza
                </td>
                <td className="py-4 text-sm text-gray-500">Main Course</td>
                <td className="py-4 text-sm text-gray-900">234</td>
                <td className="py-4 text-sm text-gray-900">$4,446</td>
                <td className="py-4 text-sm text-gray-900">4.8</td>
                <td className="py-4">
                  <span className="text-green-600 text-sm">↗ +15%</span>
                </td>
              </tr>
              <tr>
                <td className="py-4 text-sm font-medium text-gray-900">
                  Chicken Caesar Salad
                </td>
                <td className="py-4 text-sm text-gray-500">Salads</td>
                <td className="py-4 text-sm text-gray-900">187</td>
                <td className="py-4 text-sm text-gray-900">$2,618</td>
                <td className="py-4 text-sm text-gray-900">4.6</td>
                <td className="py-4">
                  <span className="text-green-600 text-sm">↗ +8%</span>
                </td>
              </tr>
              <tr>
                <td className="py-4 text-sm font-medium text-gray-900">
                  Beef Burger
                </td>
                <td className="py-4 text-sm text-gray-500">Main Course</td>
                <td className="py-4 text-sm text-gray-900">156</td>
                <td className="py-4 text-sm text-gray-900">$2,340</td>
                <td className="py-4 text-sm text-gray-900">4.4</td>
                <td className="py-4">
                  <span className="text-red-600 text-sm">↘ -3%</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Customer Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-lg font-semibold mb-4">Customer Demographics</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Age 18-24</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-custom-red h-2 rounded-full"
                    style={{ width: "25%" }}
                  ></div>
                </div>
                <span className="text-sm text-gray-900">25%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Age 25-34</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-custom-red h-2 rounded-full"
                    style={{ width: "40%" }}
                  ></div>
                </div>
                <span className="text-sm text-gray-900">40%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Age 35-44</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-custom-red h-2 rounded-full"
                    style={{ width: "20%" }}
                  ></div>
                </div>
                <span className="text-sm text-gray-900">20%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Age 45+</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-custom-red h-2 rounded-full"
                    style={{ width: "15%" }}
                  ></div>
                </div>
                <span className="text-sm text-gray-900">15%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-lg font-semibold mb-4">Peak Hours</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">11:00 AM - 1:00 PM</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <span className="text-sm text-gray-900">85%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">6:00 PM - 8:00 PM</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "92%" }}
                  ></div>
                </div>
                <span className="text-sm text-gray-900">92%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">8:00 PM - 10:00 PM</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <span className="text-sm text-gray-900">60%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Other Hours</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: "25%" }}
                  ></div>
                </div>
                <span className="text-sm text-gray-900">25%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
