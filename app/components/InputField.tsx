"use client";

type Props = {
  label: string;
  name: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputField({
  label,
  name,
  type = "text",
  value,
  placeholder,
  onChange,
}: Props) {
  return (
    <div className="w-full">
      <label className="text-xs sm:text-sm text-gray-600">{label}</label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full mt-1 px-3 py-2.5 sm:py-3 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E2C37F] transition"
      />
    </div>
  );
}