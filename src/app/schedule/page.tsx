/** @format */

export default function SchedulePage() {
  return (
    <div className="flex flex-col space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          Restaurant Schedule
        </h1>
        <button className="px-4 py-2 bg-custom-red text-white rounded-lg hover:bg-custom-red/90 transition-colors">
          Update Hours
        </button>
      </div>

      {/* Current Status */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              Restaurant Status
            </h2>
            <p className="text-sm text-gray-500">Current operational status</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              • Open Now
            </span>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              Close Temporarily
            </button>
          </div>
        </div>
      </div>

      {/* Operating Hours */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold mb-4">Operating Hours</h2>
        <div className="space-y-4">
          {[
            { day: "Monday", hours: "9:00 AM - 10:00 PM", isOpen: true },
            { day: "Tuesday", hours: "9:00 AM - 10:00 PM", isOpen: true },
            { day: "Wednesday", hours: "9:00 AM - 10:00 PM", isOpen: true },
            { day: "Thursday", hours: "9:00 AM - 10:00 PM", isOpen: true },
            { day: "Friday", hours: "9:00 AM - 11:00 PM", isOpen: true },
            { day: "Saturday", hours: "10:00 AM - 11:00 PM", isOpen: true },
            { day: "Sunday", hours: "Closed", isOpen: false },
          ].map((schedule) => (
            <div
              key={schedule.day}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <span className="font-medium text-gray-900 w-20">
                  {schedule.day}
                </span>
                <span
                  className={`text-sm ${
                    schedule.isOpen ? "text-gray-600" : "text-red-600"
                  }`}
                >
                  {schedule.hours}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={schedule.isOpen}
                    className="form-checkbox h-4 w-4 text-custom-red focus:ring-custom-red border-gray-300 rounded"
                    readOnly
                  />
                  <span className="ml-2 text-sm text-gray-600">Open</span>
                </label>
                <button className="text-custom-red hover:text-custom-red/80 text-sm">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Special Hours & Holidays */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Special Hours</h2>
            <button className="px-3 py-1 bg-custom-red text-white text-sm rounded-lg hover:bg-custom-red/90 transition-colors">
              Add Special Hours
            </button>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div>
                <p className="font-medium text-yellow-900">New Day</p>
                <p className="text-sm text-yellow-700">January 1, 2026</p>
                <p className="text-sm text-yellow-600">12:00 PM - 8:00 PM</p>
              </div>
              <button className="text-yellow-700 hover:text-yellow-900 text-sm">
                Edit
              </button>
            </div>

            <div className="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded-lg">
              <div>
                <p className="font-medium text-red-900">Christmas Day</p>
                <p className="text-sm text-red-700">December 25, 2025</p>
                <p className="text-sm text-red-600">Closed</p>
              </div>
              <button className="text-red-700 hover:text-red-900 text-sm">
                Edit
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Break Times</h2>
            <button className="px-3 py-1 bg-custom-red text-white text-sm rounded-lg hover:bg-custom-red/90 transition-colors">
              Add Break
            </button>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Afternoon Break</p>
                <p className="text-sm text-gray-600">3:00 PM - 4:00 PM</p>
                <p className="text-sm text-gray-500">Monday - Friday</p>
              </div>
              <div className="flex items-center space-x-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={true}
                    className="form-checkbox h-4 w-4 text-custom-red focus:ring-custom-red border-gray-300 rounded"
                    readOnly
                  />
                </label>
                <button className="text-custom-red hover:text-custom-red/80 text-sm">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Settings */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold mb-4">Schedule Settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Auto-close when no staff available
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={true}
                className="form-checkbox h-4 w-4 text-custom-red focus:ring-custom-red border-gray-300 rounded"
                readOnly
              />
              <span className="ml-2 text-sm text-gray-600">
                Enable auto-close
              </span>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Advance notice for schedule changes
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red focus:border-transparent">
              <option value="24">24 hours</option>
              <option value="48">48 hours</option>
              <option value="72">72 hours</option>
              <option value="168">1 week</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time zone
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red focus:border-transparent">
              <option value="EST">Eastern Time (EST)</option>
              <option value="CST">Central Time (CST)</option>
              <option value="MST">Mountain Time (MST)</option>
              <option value="PST">Pacific Time (PST)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Online ordering cutoff
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red focus:border-transparent">
              <option value="30">30 minutes before closing</option>
              <option value="60">1 hour before closing</option>
              <option value="90">90 minutes before closing</option>
              <option value="120">2 hours before closing</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
