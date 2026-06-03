function Navbar({ setIsOpen }) {
  return (
    <div className="h-16 bg-white/5 backdrop-blur-lg border-b border-white/10 flex items-center px-4 md:px-6 gap-4">
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="text-white text-3xl hover:text-cyan-400 transition-all duration-300 flex-shrink-0"
      >
        ☰
      </button>

      {/* Full title on desktop, short on mobile */}
      <h1 className="font-bold text-cyan-400 truncate">
        <span className="hidden sm:inline text-2xl">Smart City Traffic System</span>
        <span className="sm:hidden text-lg">Traffic AI</span>
      </h1>
    </div>
  )
}

export default Navbar