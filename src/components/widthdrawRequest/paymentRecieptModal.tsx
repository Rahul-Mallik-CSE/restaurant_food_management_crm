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
import { WithdrawRequest } from "@/types/widthdrawRequestTypes";
import Image from "next/image";

interface PaymentReceiptModalProps {
  children: React.ReactNode;
  withdrawData: WithdrawRequest;
}

export const PaymentReceiptModal: React.FC<PaymentReceiptModalProps> = ({
  children,
  withdrawData,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md mx-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl text-center font-semibold text-gray-800">
            Payment Receipt
          </DialogTitle>
        </DialogHeader>

        <div className="px-2 pb-4">
          {/* Receipt Design */}
          <div className="relative w-full">
            <div className="w-full bg-white border-2 border-dashed border-gray-300 rounded-lg p-6">
              <Image
                src="/JVAI.jpg"
                alt="Company Logo"
                width={400}
                height={900}
                className="mx-auto mb-0"
              />
            </div>
          </div>

          {/* Download Button */}
          <div className="mt-6 flex justify-center">
            <Button
              className="bg-red-500 hover:bg-red-600  text-white px-20 py-3 rounded-md flex items-center gap-2"
              onClick={() => {
                // Handle download logic here
                console.log("Download receipt for:", withdrawData.withdrawId);
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
