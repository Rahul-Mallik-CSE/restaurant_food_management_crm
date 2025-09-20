/** @format */

"use client";

import { useState } from "react";
import { ArrowLeftIcon, UploadIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/common/header";

export default function RestaurantInformationPage() {
  const [restaurantName, setRestaurantName] = useState("Night Cafe");
  const [ownerName, setOwnerName] = useState("John Doe");
  const [restaurantDetails, setRestaurantDetails] = useState("");
  const [restaurantAddress, setRestaurantAddress] = useState("");
  const [uploadedImages, setUploadedImages] = useState([
    "/api/placeholder/120/80",
    "/api/placeholder/120/80",
    "/api/placeholder/120/80",
    "/api/placeholder/120/80",
  ]);

  const handleImageRemove = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleImageUpload = () => {
    // Simulate image upload
    const newImage = "/api/placeholder/120/80";
    setUploadedImages((prev) => [...prev, newImage]);
  };

  const handleSave = () => {
    console.log("Save restaurant information");
    // Handle save logic here
  };

  const handleCancel = () => {
    // Reset form or navigate back
    console.log("Cancel changes");
  };

  return (
    <div className="min-h-screen bg-transparent pt-2 md:pt-6">
      <div className="max-w-full mx-auto space-y-6">
        {/* Header without Search */}
        <Header
          title="Settings"
          description="Keep everything organized with smart settings"
        />

        {/* Restaurant Information Section */}
        <div className=" space-y-2 md:space-y-4 ">
          <Link href="/settings" className="flex items-center gap-0 mb-6">
            <ArrowLeftIcon className="w-8 h-4 text-gray-600" />
            <h2 className="text-lg md:text-xl font-medium text-gray-900">
              Restaurant Information
            </h2>
          </Link>

          {/* Profile Image */}
          <div className="flex justify-center ">
            <div className="relative">
              <Image
                src="/api/placeholder/100/100"
                alt="Restaurant Profile"
                width={100}
                height={100}
                className="rounded-full object-cover bg-gray-200 border-4 border-gray-100"
              />
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 ">
            <div className="space-y-2">
              <label className="text-base md:text-lg font-medium text-gray-700">
                Restaurant Name
              </label>
              <Input
                value={restaurantName}
                onChange={(e) => setRestaurantName(e.target.value)}
                className="bg-white border-gray-200 text-base md:text-lg p-5 text-gray-600"
              />
            </div>

            <div className="space-y-2">
              <label className="text-base md:text-lg font-medium text-gray-700">
                Owner Name
              </label>
              <Input
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                className="bg-white border-gray-200 text-base md:text-lg p-5 text-gray-600"
              />
            </div>
          </div>

          <div className="space-y-2 ">
            <label className="text-base md:text-lg font-medium text-gray-700">
              Restaurant Details
            </label>
            <Textarea
              value={restaurantDetails}
              onChange={(e) => setRestaurantDetails(e.target.value)}
              placeholder="Enter restaurant details..."
              className="bg-white border-gray-200 text-base md:text-lg  min-h-[120px] resize-none text-gray-600"
            />
          </div>

          <div className="space-y-2 ">
            <label className="text-base md:text-lg font-medium text-gray-700">
              Restaurant Address
            </label>
            <Textarea
              value={restaurantAddress}
              onChange={(e) => setRestaurantAddress(e.target.value)}
              placeholder="Enter restaurant address..."
              className="bg-white border-gray-200 text-base md:text-lg  min-h-[80px] resize-none text-gray-600"
            />
          </div>

          {/* Restaurant Image Upload */}
          <div className="space-y-1 ">
            <div className="flex items-center justify-between">
              <label className="text-base md:text-lg font-medium text-gray-700">
                Restaurant Image Upload
              </label>
              <span className="text-xs text-gray-500">Max photo upload: 4</span>
            </div>

            {/* Upload Area */}
            <div
              onClick={handleImageUpload}
              className="border-2 border-dashed bg-white border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-gray-400 transition-colors"
            >
              <UploadIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-500 mb-1">
                Drop here to attach or
              </p>
              <p className="text-sm text-blue-600 underline">upload</p>
              <p className="text-xs text-gray-400 mt-2">Max size: 5MB</p>
            </div>

            {/* Uploaded Images */}
            {uploadedImages.length > 0 && (
              <div className="flex gap-3 flex-wrap">
                {uploadedImages.map((image, index) => (
                  <div key={index} className="relative group">
                    <Image
                      src={image}
                      alt={`Uploaded ${index + 1}`}
                      width={120}
                      height={80}
                      className="rounded-lg object-cover border border-gray-200"
                    />
                    <button
                      onClick={() => handleImageRemove(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <XIcon className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-center pt-3 pb-8 ">
            <Button
              variant="outline"
              onClick={handleCancel}
              className="px-6 w-32"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              className="bg-red-500 hover:bg-red-600 text-white px-6 w-32"
            >
              Save changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
