function Dashboard() {
  return (
    <div className="text-white">

      <h1 className="text-4xl font-bold mb-10 text-cyan-400">
        Smart Traffic Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-lg hover:-translate-y-2 hover:scale-105 hover:shadow-cyan-500/20 transition-all duration-300">
          <h2 className="text-gray-400 text-sm">
            Active Signals
          </h2>

          <p className="text-4xl font-bold text-cyan-400 mt-3">
            24
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
          <h2 className="text-gray-400 text-sm">
            Traffic Density
          </h2>

          <p className="text-4xl font-bold text-cyan-400 mt-3">
            68%
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
          <h2 className="text-gray-400 text-sm">
            Emergency Alerts
          </h2>

          <p className="text-4xl font-bold text-cyan-400 mt-3">
            3
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
          <h2 className="text-gray-400 text-sm">
            Avg Speed
          </h2>

          <p className="text-4xl font-bold text-cyan-400 mt-3">
            42 km/h
          </p>
        </div>

      </div>

    </div>
  )
}

export default Dashboard