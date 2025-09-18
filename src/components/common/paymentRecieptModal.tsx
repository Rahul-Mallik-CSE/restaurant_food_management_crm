/** @format */

"use client";

import React from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Download } from "lucide-react";
import { WithdrawRequest } from "@/types/widthdrawRequestTypes";

interface PaymentReceiptModalProps {
  open: boolean;
  onClose: () => void;
  withdrawData: WithdrawRequest | null;
}

export const PaymentReceiptModal: React.FC<PaymentReceiptModalProps> = ({
  open,
  onClose,
  withdrawData,
}) => {
  if (!withdrawData) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg mx-auto bg-white">
        <DialogHeader className="relative pb-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">
              Payment Receipt
            </h2>
            <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </Button>
          </div>
        </DialogHeader>

        <div className="px-2">
          {/* Receipt Image */}
          <div className="relative w-full">
            <div className="w-full h-96 bg-gray-100 rounded-lg border border-gray-200 shadow-sm flex items-center justify-center">
              <div className="text-center text-gray-500">
                <svg
                  className="mx-auto h-12 w-12 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <p>Payment Receipt</p>
                <p className="text-sm">ID: {withdrawData.withdrawId}</p>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="mt-6 flex justify-center">
            <Button
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg flex items-center gap-2"
              onClick={() => {
                // Handle download logic here
                console.log("Download receipt for:", withdrawData.withdrawId);
              }}
            >
              <Download size={16} />
              Download
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
