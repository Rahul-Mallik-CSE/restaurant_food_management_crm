/** @format */

"use client";

import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UploadIcon, XIcon } from "lucide-react";
import { PromotionCard } from "@/types/promotionTypes";
import Image from "next/image";

interface AddPromotionModalProps {
  children: React.ReactNode;
  onAddPromotion: (promotion: PromotionCard) => void;
}

export default function AddPromotionModal({
  children,
  onAddPromotion,
}: AddPromotionModalProps) {
  const [uploadedImage, setUploadedImage] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback((files: FileList) => {
    const file = files[0];
    if (
      file &&
      file.type.startsWith("image/") &&
      file.size <= 5 * 1024 * 1024
    ) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setUploadedImage(result);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleImageUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      handleFileSelect(files);
    }
    if (e.target) {
      e.target.value = "";
    }
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);

      const files = e.dataTransfer.files;
      if (files) {
        handleFileSelect(files);
      }
    },
    [handleFileSelect]
  );

  const handleSubmit = () => {
    if (uploadedImage) {
      const newPromotion: PromotionCard = {
        id: Date.now(), // Simple ID generation
        image: uploadedImage,
        alt: "New Promotion",
      };
      onAddPromotion(newPromotion);
      setUploadedImage("");
      setIsOpen(false);
    }
  };

  const handleCancel = () => {
    setUploadedImage("");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-semibold text-gray-900 text-center">
            Add Promotion
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <label className="text-base md:text-xl font-medium text-gray-700 mb-2 block">
              Upload Promotion image
            </label>

            {/* Hidden File Input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileInputChange}
              className="hidden"
            />

            {/* Upload Area */}
            <div
              onClick={handleImageUpload}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors min-h-[200px] flex flex-col items-center justify-center ${
                isDragging
                  ? "border-blue-400 bg-blue-50"
                  : "border-gray-300 hover:border-gray-400 bg-gray-50"
              }`}
            >
              {uploadedImage ? (
                <div className="relative w-full h-32">
                  <Image
                    src={uploadedImage}
                    alt="Preview"
                    fill
                    className="object-contain rounded"
                  />
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      setUploadedImage("");
                    }}
                    className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1"
                  >
                    <XIcon className="w-3 h-3" />
                  </Button>
                </div>
              ) : (
                <>
                  <UploadIcon className="w-12 h-12 text-gray-400 mb-4" />
                  <p className="text-gray-600 mb-2">
                    {isDragging
                      ? "Drop image here"
                      : "Drop here to attach or upload"}
                  </p>
                  <p className="text-xs text-gray-400">Max size: 5GB</p>
                </>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-center pt-4">
            <Button variant="outline" onClick={handleCancel} className="px-6">
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={!uploadedImage}
              className="bg-red-500 hover:bg-red-600 text-white px-6"
            >
              Submit
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
