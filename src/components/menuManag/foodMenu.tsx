/** @format */

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MenuCard from "@/components/menuManag/menuCard";
import { menuManagData } from "@/data/menuManagData";
import { MenuItem, CategoryType } from "@/types/foodMenuTypes";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function FoodMenu() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(menuManagData);
  const [activeTab, setActiveTab] = useState<CategoryType>("All");

  const handleToggleAvailability = (id: number) => {
    setMenuItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isAvailable: !item.isAvailable } : item
      )
    );
  };

  const getFilteredItems = (category: CategoryType) => {
    if (category === "All") return menuItems;
    if (category === "Discount") {
      return menuItems.filter(
        (item) => item.discountPrice && item.discountPrice < item.price
      );
    }
    return menuItems.filter((item) => item.category === category);
  };

  const categories: CategoryType[] = [
    "All",
    "Discount",
    "Pizza",
    "Salads",
    "Burgers",
  ];

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as CategoryType)}
      >
        <div className="flex justify-between items-center mb-3 md:mb-5 ">
          <TabsList className="gap-2 md:gap-4 ">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="data-[state=active]:bg-orange-500 data-[state=active]:text-white border border-gray-300 hover:bg-orange-100 cursor-pointer"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          <Link href="/menu-manag/add-items">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add Food Item
            </Button>
          </Link>
        </div>

        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
              {getFilteredItems(category).map((item) => (
                <MenuCard
                  key={item.id}
                  item={item}
                  onToggleAvailability={handleToggleAvailability}
                />
              ))}
            </div>

            {/* Empty State */}
            {getFilteredItems(category).length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No items found in {category}
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Add new items to get started
                </p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
