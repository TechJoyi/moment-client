"use client";

import { IoCheckmarkCircleOutline } from "react-icons/io5";

type Props = {
  show: boolean;
  message: string;
};

export default function LoginSuccessModal({ show, message }: Props) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40 backdrop-blur-sm">

      <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center gap-4 shadow-2xl border border-green-100">

        <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-green-50 rounded-full">
          <IoCheckmarkCircleOutline size={40} className="text-green-500" />
        </div>

        <p className="text-green-700 font-semibold text-lg sm:text-xl text-center">
          {message}
        </p>

        <p className="text-gray-500 text-sm text-center">
          Redirecting...
        </p>

      </div>
    </div>
  );
}