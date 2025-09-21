/** @format */

"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Upload, X, Plus, Trash2 } from "lucide-react";
import Header from "@/components/common/header";
import Image from "next/image";
import Link from "next/link";
import { ExtraItem } from "@/types/foodMenuTypes";
import { menuManagData } from "@/data/menuManagData";

export default function AddItemsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get("edit");
  const isEditing = Boolean(editId);

  // Form state
  const [formData, setFormData] = useState({
    foodName: "",
    category: "",
    foodPrice: "",
    discountPercentage: "",
    discountFoodPrice: "",
    description: "",
    cookingTime: "",
    deliveryFee: "",
  });

  const [extraItems, setExtraItems] = useState<ExtraItem[]>([]);
  const [uploadedImage, setUploadedImage] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load existing data for editing
  useEffect(() => {
    if (isEditing && editId) {
      const existingItem = menuManagData.find(
        (item) => item.id === parseInt(editId)
      );
      if (existingItem) {
        setFormData({
          foodName: existingItem.name,
          category: existingItem.category,
          foodPrice: existingItem.price.toString(),
          discountPercentage: existingItem.discountPercentage?.toString() || "",
          discountFoodPrice: existingItem.discountPrice?.toString() || "",
          description: existingItem.description,
          cookingTime: existingItem.cookingTime.toString(),
          deliveryFee: existingItem.deliveryFee.toString(),
        });
        setExtraItems(existingItem.extraItems || []);
        setUploadedImage(existingItem.image);
      }
    }
  }, [isEditing, editId]);

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

  const addExtraItem = () => {
    const newItem: ExtraItem = {
      id: Date.now(),
      name: "",
      price: 0,
    };
    setExtraItems((prev) => [...prev, newItem]);
  };

  const updateExtraItem = (
    id: number,
    field: keyof ExtraItem,
    value: string | number
  ) => {
    setExtraItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const removeExtraItem = (id: number) => {
    setExtraItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Form data:", formData);
    console.log("Extra items:", extraItems);
    console.log("Image:", uploadedImage);
    router.push("/menu-manag");
  };

  const handleCancel = () => {
    router.push("/menu-manag");
  };

  return (
    <div className="min-h-screen bg-transparent pt-2 md:pt-6">
      <div className="max-w-full mx-auto space-y-2">
        {/* Header */}
        <Header
          title="Menu Management"
          description="Add or edit menu items for your restaurant"
        />

        {/* Back Button and Title */}
        <div className="pt-2 md:pt-4">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/menu-manag">
              <Button variant="ghost" size="sm" className="p-2">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-semibold text-gray-900">
              {isEditing ? "Edit Food Item" : "Add Food Item"}
            </h1>
          </div>

          {/* Form */}
          <div className=" space-y-2 md:space-y-5">
            {/* Food Name */}
            <div>
              <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                Food Name
              </label>
              <Input
                placeholder="Enter food name"
                value={formData.foodName}
                onChange={(e) =>
                  setFormData({ ...formData, foodName: e.target.value })
                }
                className="bg-white "
              />
            </div>

            {/* Category and Food Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                  Category
                </label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData({ ...formData, category: value })
                  }
                >
                  <SelectTrigger className="bg-white w-full">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Pizza">Pizza</SelectItem>
                    <SelectItem value="Burgers">Burgers</SelectItem>
                    <SelectItem value="Salads">Salads</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                  Food Price
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <Input
                    className="pl-8 bg-white"
                    placeholder="203.20"
                    value={formData.foodPrice}
                    onChange={(e) =>
                      setFormData({ ...formData, foodPrice: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Discount Percentage and Discount Food Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                  Discount percentage
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    %
                  </span>
                  <Input
                    className="pl-8 bg-white"
                    placeholder="Enter discount percentage"
                    value={formData.discountPercentage}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        discountPercentage: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                  Discount Food Price
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <Input
                    className="pl-8 bg-white"
                    placeholder="Enter Discount price"
                    value={formData.discountFoodPrice}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        discountFoodPrice: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                Description
              </label>
              <Textarea
                placeholder="Describe your food item..."
                className="min-h-[100px] bg-white"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>

            {/* Cooking Time and Delivery Fee */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                  Cooking Time
                </label>
                <Input
                  placeholder="Enter cooking time"
                  value={formData.cookingTime}
                  onChange={(e) =>
                    setFormData({ ...formData, cookingTime: e.target.value })
                  }
                  className="bg-white "
                />
              </div>
              <div>
                <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                  Delivery Fee
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <Input
                    className="pl-8 bg-white"
                    placeholder="Enter food price"
                    value={formData.deliveryFee}
                    onChange={(e) =>
                      setFormData({ ...formData, deliveryFee: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Extra Items */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="block text-sm md:text-base font-medium text-gray-700">
                  Extra Item
                </label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addExtraItem}
                  className="text-orange-500 border-orange-500 hover:bg-orange-50"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Add Item
                </Button>
              </div>

              {extraItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3"
                >
                  <Input
                    placeholder="Enter extra time"
                    value={item.name}
                    onChange={(e) =>
                      updateExtraItem(item.id, "name", e.target.value)
                    }
                    className="flex-1 bg-white"
                  />
                  <div className="flex w-full items-center gap-2 ">
                    <span className="text-sm md:text-base text-gray-500">
                      Price:
                    </span>
                    <div className="relative w-full">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        $
                      </span>
                      <Input
                        className="pl-8  bg-white"
                        placeholder="Enter extra price"
                        value={item.price}
                        onChange={(e) =>
                          updateExtraItem(
                            item.id,
                            "price",
                            parseFloat(e.target.value) || 0
                          )
                        }
                      />
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeExtraItem(item.id)}
                      className="text-red-500 border-red-500 hover:bg-red-50 p-2"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Upload Food Image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 ">
              <div>
                <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                  Upload Food Image
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileInputChange}
                  className="hidden"
                />
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
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setUploadedImage("");
                        }}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <Upload className="w-12 h-12 text-gray-400 mb-4" />
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
              <div className="flex gap-3 justify-center items-center ">
                <Button
                  variant="outline"
                  onClick={handleCancel}
                  className="px-8"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSubmit}
                  className="bg-red-500 hover:bg-red-600 text-white px-8"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
