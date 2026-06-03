import { Link } from "react-router-dom"

const navItems = [
  { to: "/", icon: "📊", label: "Dashboard" },
  { to: "/traffic", icon: "🚦", label: "Traffic" },
  { to: "/emergency", icon: "🚑", label: "Emergency" },
  { to: "/analytics", icon: "📈", label: "Analytics" },
]

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar panel */}
      <div
        className={`
          fixed top-0 left-0 h-full z-30
          md:static md:z-auto md:h-screen
          bg-[#111827]/95 backdrop-blur-xl text-white
          border-r border-white/10 p-6 w-72
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Close button — mobile only */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl font-bold text-cyan-400">Traffic AI</h1>
          <button
            onClick={onClose}
            className="md:hidden text-white/60 hover:text-white text-2xl"
          >
            ✕
          </button>
        </div>

        <div className="space-y-5">
          {navItems.map(({ to, icon, label }) => (
            <Link to={to} key={to} onClick={onClose}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-cyan-500/10 hover:-translate-y-1 transition-all duration-300">
                {icon} {label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Sidebar