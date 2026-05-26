function Navbar({ setIsOpen }) {
  return (
    <div className="h-16 bg-white/5 backdrop-blur-lg border-b border-white/10 flex items-center px-6">

      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="text-white text-3xl hover:text-cyan-400 transition-all duration-300"
      >
        ☰
      </button>

      <h1 className="text-2xl font-bold text-cyan-400 ml-6">
        Smart City Traffic System
      </h1>

    </div>
  )
}

export default Navbar