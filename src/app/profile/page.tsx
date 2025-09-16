/** @format */

export default function ProfilePage() {
  return (
    <div className="flex flex-col space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Profile Settings</h1>
        <button className="px-4 py-2 bg-custom-red text-white rounded-lg hover:bg-custom-red/90 transition-colors">
          Save Changes
        </button>
      </div>

      {/* Profile Information */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-start space-x-6 mb-6">
          <div className="flex-shrink-0">
            <div className="h-24 w-24 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-600">JD</span>
            </div>
            <button className="mt-2 px-3 py-1 bg-custom-red text-white text-sm rounded-lg hover:bg-custom-red/90 transition-colors">
              Change Photo
            </button>
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  defaultValue="John"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  defaultValue="Doe"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="john.doe@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  defaultValue="+1 234-567-8900"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Title
                </label>
                <input
                  type="text"
                  defaultValue="Restaurant Manager"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Department
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red focus:border-transparent">
                  <option value="management">Management</option>
                  <option value="kitchen">Kitchen</option>
                  <option value="service">Service</option>
                  <option value="delivery">Delivery</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Account Preferences */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold mb-4">Account Preferences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Language
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red focus:border-transparent">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="pt">Portuguese</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time Zone
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
              Date Format
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red focus:border-transparent">
              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              <option value="YYYY-MM-DD">YYYY-MM-DD</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Theme Preference
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-red focus:border-transparent">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="auto">Auto (System)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold mb-4">Notification Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                Email Notifications
              </h3>
              <p className="text-sm text-gray-500">
                Receive notifications via email
              </p>
            </div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                defaultChecked
                className="form-checkbox h-4 w-4 text-custom-red focus:ring-custom-red border-gray-300 rounded"
              />
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                SMS Notifications
              </h3>
              <p className="text-sm text-gray-500">
                Receive notifications via SMS
              </p>
            </div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-custom-red focus:ring-custom-red border-gray-300 rounded"
              />
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                Push Notifications
              </h3>
              <p className="text-sm text-gray-500">
                Receive push notifications in browser
              </p>
            </div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                defaultChecked
                className="form-checkbox h-4 w-4 text-custom-red focus:ring-custom-red border-gray-300 rounded"
              />
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                Order Updates
              </h3>
              <p className="text-sm text-gray-500">
                Get notified about order status changes
              </p>
            </div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                defaultChecked
                className="form-checkbox h-4 w-4 text-custom-red focus:ring-custom-red border-gray-300 rounded"
              />
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                Weekly Reports
              </h3>
              <p className="text-sm text-gray-500">
                Receive weekly performance reports
              </p>
            </div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                defaultChecked
                className="form-checkbox h-4 w-4 text-custom-red focus:ring-custom-red border-gray-300 rounded"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold mb-4">Security</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Password</h3>
              <p className="text-sm text-gray-500">Last updated 2 months ago</p>
            </div>
            <button className="px-3 py-1 bg-custom-red text-white text-sm rounded-lg hover:bg-custom-red/90 transition-colors">
              Change Password
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                Two-Factor Authentication
              </h3>
              <p className="text-sm text-gray-500">
                Add an extra layer of security
              </p>
            </div>
            <button className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors">
              Setup
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                Active Sessions
              </h3>
              <p className="text-sm text-gray-500">
                Manage your active login sessions
              </p>
            </div>
            <button className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors">
              View Sessions
            </button>
          </div>
        </div>
      </div>

      {/* Activity Log */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <div>
              <p className="text-sm text-gray-900">
                Logged in from Chrome on Windows
              </p>
              <p className="text-xs text-gray-500">
                2 hours ago • IP: 192.168.1.100
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <div>
              <p className="text-sm text-gray-900">
                Updated profile information
              </p>
              <p className="text-xs text-gray-500">1 day ago</p>
            </div>
          </div>

          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <div>
              <p className="text-sm text-gray-900">Changed password</p>
              <p className="text-xs text-gray-500">2 months ago</p>
            </div>
          </div>

          <div className="flex items-center justify-between py-2">
            <div>
              <p className="text-sm text-gray-900">Account created</p>
              <p className="text-xs text-gray-500">6 months ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
