export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex items-center justify-between">
      {/* Left Side: Logo and Website Name */}
      <div className="flex items-center gap-2">
        <img src="https://img.freepik.com/free-vector/hand-drawn-track-field-logo-template_23-2149196484.jpg?semt=ais_hybrid" alt="Logo" className=" w-15 rounded-b-full" />
        <span className="text-xl font-semibold ml-10">MɪSSɪᴏɴ FᴇᴇT</span>
      </div>

      {/* Right Side: Login Button */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
        Login
      </button>
    </nav>
  );
}
