"use client";

type Props = {
  label: string;
  selected: boolean;
  onClick: () => void;
};
export default function RoleOption({ label, selected, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`text-black flex items-center justify-between px-4 py-2 rounded-full border w-full text-sm 
      ${selected ? "border-[#a18d60] text-black" : "border-gray-300"}
      `}
    >
      {label} 

      <div
        className={`w-4 h-4 rounded-full border flex items-center justify-center
        ${selected ? "text-black border-blue-600" : "border-gray-400"}
        `}
      >
        {selected && (
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
        )}
      </div>
    </button>
  );
}