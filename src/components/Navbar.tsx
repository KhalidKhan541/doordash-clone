"use client";
export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <span className="text-red-500 text-2xl font-bold">DoorDash</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-600 hover:text-black">Sign In</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-full font-bold hover:bg-red-600">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}
