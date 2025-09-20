/** @format */

import { MenuItemData } from "@/types/analyticsTypes";

interface MenuItemsCardProps {
  menuItems: MenuItemData[];
}

export default function MenuItemsCard({ menuItems }: MenuItemsCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Popular Menu Items
        </h3>
        <p className="text-sm text-gray-500">Top performing items this month</p>
      </div>

      <div className="space-y-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h4 className="font-medium text-gray-900">{item.name}</h4>
                <span className="px-2 py-1 text-xs font-medium bg-gray-200 text-gray-600 rounded-md">
                  {item.category}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>{item.orders} orders</span>
                <span className="text-green-600 font-medium">
                  +{item.growthPercentage}%
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-semibold text-gray-900">
                ${item.revenue}
              </div>
              <div className="text-xs text-gray-500">revenue</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
