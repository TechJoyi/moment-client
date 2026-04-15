export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      
      {/* LEFT SIDE */}
      <div className="w-1/2 hidden md:block">
        <img
          src="/images/auth-bg.jpg"
          alt="auth"
          className="h-full w-full object-cover"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50">
        {children}
      </div>

    </div>
  );
}