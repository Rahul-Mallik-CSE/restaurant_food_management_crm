/** @format */

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MenuItem } from "@/types/foodMenuTypes";
import { Clock, Edit, Truck } from "lucide-react";
import Link from "next/link";

interface MenuCardProps {
  item: MenuItem;
  onToggleAvailability: (id: number) => void;
}

export default function MenuCard({
  item,
  onToggleAvailability,
}: MenuCardProps) {
  const handleToggleAvailability = () => {
    onToggleAvailability(item.id);
  };

  const displayPrice = item.discountPrice || item.price;
  const hasDiscount = item.discountPrice && item.discountPrice < item.price;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden relative">
      {/* Availability Badge */}
      <div className="absolute top-3 right-3 z-10">
        <span
          className={`px-3 py-1 text-sm md:text-base flex justify-center font-medium rounded ${
            item.isAvailable
              ? "bg-orange-500 text-white"
              : "bg-gray-500 text-white"
          }`}
        >
          {item.isAvailable ? "Available" : "Unavailable"}
        </span>
      </div>

      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Header */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg md:text-xl text-gray-900">
            {item.name}
          </h3>
          <div className="text-right">
            <div className="flex items-center gap-1">
              {hasDiscount && (
                <span className="text-lg md:text-xl text-gray-500 line-through">
                  ${item.price.toFixed(2)}
                </span>
              )}
              <span className="text-lg md:text-xl font-bold text-orange-500">
                ${displayPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Details */}
        <p className="text-sm md:text-base font-medium text-gray-600  line-clamp-2">
          Details
        </p>
        <p className="text-xs md:text-sm text-gray-400 mb-4 line-clamp-3">
          {item.description}
        </p>

        {/* Info Row */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center  gap-2 text-sm md:text-base font-medium text-gray-600 ">
            <Clock className="w-4 h-4" />
            <p>
              Cooking Time:{" "}
              <span className="text-xs md:text-sm font-normal text-gray-400">
                {item.cookingTime} mins
              </span>
            </p>
          </div>
          <div className="flex items-center  gap-2 text-sm md:text-base font-medium text-gray-600">
            <Truck className="w-4 h-4" />
            <p>
              Delivery Fee:{" "}
              <span className="text-xs md:text-sm font-normal text-gray-400">
                {item.deliveryFee === 0
                  ? "Free"
                  : `$${item.deliveryFee.toFixed(2)}`}
              </span>
            </p>
          </div>
        </div>

        {/* Available Extra */}
        {item.extraItems && item.extraItems.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm md:text-base font-medium text-gray-600  line-clamp-2">
              Available Extra
            </h4>
            <div className="space-y-1">
              {item.extraItems.slice(0, 3).map((extra) => (
                <div
                  key={extra.id}
                  className="flex justify-between text-xs text-gray-400 mb-2"
                >
                  <span>{extra.name}</span>
                  <span>+${extra.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link
            href={`/menu-manag/add-items?edit=${item.id}`}
            className="flex-1"
          >
            <Button
              variant="outline"
              size="sm"
              className="w-full flex items-center gap-1 bg-white text-black border border-gray-300 hover:bg-gray-50"
            >
              <Edit className="w-4 h-4" />
              Edit
            </Button>
          </Link>
          <Button
            variant="default"
            size="sm"
            onClick={handleToggleAvailability}
            className="flex-1 bg-white text-black border border-gray-300 hover:bg-gray-50"
          >
            {item.isAvailable ? "Mark Unavailable" : "Mark Available"}
          </Button>
        </div>
      </div>
    </div>
  );
}
