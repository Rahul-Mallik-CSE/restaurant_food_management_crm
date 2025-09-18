/** @format */

"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { RiderOrder } from "@/types/riderManagTypes";

interface DeliveryDetailsModalProps {
  children: React.ReactNode;
  orderData: RiderOrder;
}

export const DeliveryDetailsModal: React.FC<DeliveryDetailsModalProps> = ({
  children,
  orderData,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md mx-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800 text-center mb-6">
            Delivery Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 pb-4">
          {/* Order Details Section */}
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Order ID:</span>
              <span className="font-semibold">{orderData.orderId}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Name:</span>
              <span className="font-semibold">{orderData.customerName}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Contact Number:</span>
              <span className="font-semibold">{orderData.contactNumber}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Location:</span>
              <span className="font-semibold text-right max-w-xs">
                {orderData.location}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Date:</span>
              <span className="font-semibold">{orderData.date}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Estimate Delivery Time:</span>
              <span className="font-semibold">
                {orderData.estimateDeliveryTime}
              </span>
            </div>
          </div>

          {/* Food List Section */}
          <div className="mt-6">
            <h4 className="font-bold text-gray-800 mb-3">Food List:</h4>
            <div className="space-y-2">
              {orderData.foodList?.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>
                    {item.item} - {item.quantity}x
                  </span>
                  <span>${item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-2 mt-4">
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${orderData.total?.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Rider Information Section */}
          <div className="mt-6">
            <h4 className="font-bold text-gray-800 mb-3">Rider Information</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">user Id:</span>
                <span className="font-semibold">{orderData.riderId}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Name:</span>
                <span className="font-semibold">{orderData.riderName}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Contact Number:</span>
                <span className="font-semibold">
                  {orderData.riderContactNumber}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">status:</span>
                <span
                  className={`font-semibold ${
                    orderData.status === "Delivered"
                      ? "text-green-600"
                      : orderData.status === "Pickup"
                      ? "text-yellow-600"
                      : "text-blue-600"
                  }`}
                >
                  {orderData.status}
                </span>
              </div>
            </div>
          </div>

          {/* Receipt Image */}
          <div className="mt-6">
            <div className="w-full bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-4">
              <div className="text-center text-xs">
                <div className="bg-white border rounded p-4 mx-auto max-w-48">
                  <div className="text-center mb-2">
                    <h5 className="font-bold text-xs">SHOP NAME</h5>
                    <p className="text-xs text-gray-600">
                      Address: Lorem Ipsum, 23-10
                    </p>
                    <p className="text-xs text-gray-600">Telp. 11223344</p>
                  </div>

                  <div className="text-xs text-gray-400 text-center mb-2">
                    * * * * * * * * * * * * * * * * * * * * * * * *
                  </div>

                  <div className="text-center text-xs font-bold mb-2">
                    CASH RECEIPT
                  </div>

                  <div className="text-xs text-gray-400 text-center mb-2">
                    * * * * * * * * * * * * * * * * * * * * * * * *
                  </div>

                  <div className="space-y-1 text-xs mb-2">
                    <div className="flex justify-between font-bold">
                      <span>Description</span>
                      <span>Price</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Lorem</span>
                      <span>1.1</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ipsum</span>
                      <span>2.2</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dolor sit amet</span>
                      <span>3.3</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Consectetur</span>
                      <span>4.4</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Adipiscing elit</span>
                      <span>5.5</span>
                    </div>
                  </div>

                  <div className="text-xs text-gray-400 text-center mb-2">
                    * * * * * * * * * * * * * * * * * * * * * * * *
                  </div>

                  <div className="space-y-1 text-xs mb-2">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>16.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cash</span>
                      <span>20.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Change</span>
                      <span>3.5</span>
                    </div>
                  </div>

                  <div className="text-xs text-gray-400 text-center mb-2">
                    * * * * * * * * * * * * * * * * * * * * * * * *
                  </div>

                  <div className="space-y-1 text-xs mb-2">
                    <div className="flex justify-between">
                      <span>Bank card</span>
                      <span>*** 234</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Approval Code</span>
                      <span>#123456</span>
                    </div>
                  </div>

                  <div className="text-xs text-gray-400 text-center mb-2">
                    * * * * * * * * * * * * * * * * * * * * * * * *
                  </div>

                  <div className="text-center text-xs font-bold mb-2">
                    THANK YOU!
                  </div>

                  <div className="flex justify-center mb-2">
                    <div className="flex space-x-px">
                      {Array.from({ length: 15 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-px bg-black"
                          style={{
                            height: Math.random() > 0.5 ? "12px" : "8px",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="mt-6">
            <Button
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg flex items-center justify-center gap-2"
              onClick={() => {
                console.log("Download receipt for:", orderData.orderId);
              }}
            >
              Download
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
