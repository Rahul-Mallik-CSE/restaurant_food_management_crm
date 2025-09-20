/** @format */

"use client";

import { useState } from "react";
import Header from "@/components/common/header";
import PromotionCard from "@/components/promotion/promotionCard";
import { promotionData } from "@/data/promotionData";
import { PromotionCard as PromotionCardType } from "@/types/promotionTypes";
import { Button } from "@/components/ui/button";

export default function PromotionPage() {
  const [promotions, setPromotions] =
    useState<PromotionCardType[]>(promotionData);

  const handleDelete = (id: number) => {
    setPromotions((prev) => prev.filter((promotion) => promotion.id !== id));
  };

  return (
    <div className="min-h-screen bg-transparent pt-2 md:pt-6">
      <div className="max-w-full mx-auto space-y-2">
        {/* Header with Search */}
        <Header
          title="Promotion Management"
          description="Manage and track all your promotional campaigns"
        />

        {/* Promotion Cards Grid */}
        <div className="flex justify-end ">
          <Button className="text-sm text-white bg-red-400 hover:bg-red-600 rounded-lg">
            Add Promotion
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  gap-6">
          {promotions.map((promotion) => (
            <PromotionCard
              key={promotion.id}
              promotion={promotion}
              onDelete={handleDelete}
            />
          ))}
        </div>

        {/* Empty State */}
        {promotions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No promotions available</p>
            <p className="text-gray-400 text-sm mt-2">
              Add new promotions to get started
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
