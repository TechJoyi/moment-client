"use client";

type Props = {
  show: boolean;
  message: string;
  onClose: () => void;
};

export default function ErrorModal({ show, message, onClose }: Props) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl p-6 text-center border border-red-100">

        <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-red-50 flex items-center justify-center mb-3">
          <span className="text-red-500 text-xl sm:text-2xl font-bold">!</span>
        </div>

        <h3 className="text-base sm:text-lg font-semibold text-gray-900">
          Something went wrong
        </h3>

        <p className="text-sm text-gray-500 mt-2">{message}</p>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-xl"
        >
          Close
        </button>

      </div>
    </div>
  );
}