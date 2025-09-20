/** @format */

import { MenuItemData } from "@/types/analyticsTypes";
import { ScrollArea } from "../ui/scroll-area";

interface MenuItemsCardProps {
  menuItems: MenuItemData[];
}

export default function MenuItemsCard({ menuItems }: MenuItemsCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="mb-6">
        <h3 className="text-lg md:text-xl font-semibold text-black">
          Popular Menu Items
        </h3>
        <p className="text-sm md:text-base text-gray-500">
          Top performing items this month
        </p>
      </div>
      <ScrollArea className="max-h-[900px] overflow-x-hidden">
        <div className="space-y-4">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-100 rounded-lg"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-medium text-gray-900 text-base md:text-lg">
                    {item.name}
                  </h4>
                  <span className="px-2 py-1 w-16 text-center text-xs font-medium bg-transparent border border-gray-500 text-gray-600 rounded-sm">
                    {item.category}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm md:text-base text-gray-600">
                  <span>{item.orders} orders</span>
                  <span className="text-green-600 font-medium">
                    +{item.growthPercentage}%
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-base md:text-lg font-semibold text-gray-900">
                  ${item.revenue}
                </div>
                <div className="text-base md:text-lg text-gray-500">
                  revenue
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
