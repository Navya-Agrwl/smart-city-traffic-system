import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className=" min-h-screen bg-[#111827]/90 backdrop-blur-xl border-r border-white/10 text-white p-6">

      <h1 className="text-3xl font-bold text-cyan-400 mb-10">
        Traffic AI
      </h1>

      <div className="space-y-5">

        <Link to="/">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-cyan-500/10 hover:-translate-y-1 transition-all duration-300">
            📊 Dashboard
          </div>
        </Link>

        <Link to="/traffic">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-cyan-500/10 hover:-translate-y-1 transition-all duration-300">
            🚦 Traffic
          </div>
        </Link>

        <Link to="/emergency">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-cyan-500/10 hover:-translate-y-1 transition-all duration-300">
            🚑 Emergency
          </div>
        </Link>

        <Link to="/analytics">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-cyan-500/10 hover:-translate-y-1 transition-all duration-300">
            📈 Analytics
          </div>
        </Link>

      </div>

    </div>
  )
}

export default Sidebar