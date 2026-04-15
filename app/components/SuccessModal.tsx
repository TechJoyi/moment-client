"use client";

import { IoCheckmarkCircle } from "react-icons/io5";

type Props = {
  show: boolean;
  message: string;
};

export default function SuccessModal({ show, message }: Props) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">

      {/* MODAL */}
      <div className="bg-white rounded-3xl px-8 py-10 flex flex-col items-center gap-4 shadow-2xl animate-[fadeIn_0.3s_ease-out]">

        {/* ICON */}
        <div className="w-20 h-20 flex items-center justify-center bg-green-100 rounded-full">
          <IoCheckmarkCircle size={50} className="text-green-500" />
        </div>

        {/* MESSAGE */}
        <h3 className="text-lg font-semibold text-gray-800 text-center">
          {message}
        </h3>

        <p className="text-sm text-gray-500 text-center">
          Redirecting you shortly...
        </p>

        {/* LOADING BAR */}
        <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-2">
          <div className="h-full bg-green-500 animate-pulse w-full"></div>
        </div>

      </div>
    </div>
  );
}