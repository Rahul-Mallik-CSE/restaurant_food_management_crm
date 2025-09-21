/** @format */

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PromotionCard as PromotionCardType } from "@/types/promotionTypes";
import { Trash2Icon } from "lucide-react";

interface PromotionCardProps {
  promotion: PromotionCardType;
  onDelete: (id: number) => void;
}

export default function PromotionCard({
  promotion,
  onDelete,
}: PromotionCardProps) {
  const handleDelete = () => {
    onDelete(promotion.id);
  };

  return (
    <div className="group p-2 relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
      {/* Promotion Image */}
      <div className="relative aspect-[20/10] overflow-hidden rounded-xl">
        <Image
          src={promotion.image}
          alt={promotion.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain w-full h-full "
        />

        {/* Gradient Overlay for better button visibility */}
      </div>

      {/* Delete Button */}
      <div className="p-3 items-center text-center flex justify-center">
        <Button
          onClick={handleDelete}
          variant="destructive"
          size="sm"
          className="w-36 bg-red-500 hover:bg-red-600 text-white font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
