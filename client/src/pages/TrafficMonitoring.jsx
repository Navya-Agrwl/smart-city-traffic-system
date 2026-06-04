function TrafficMonitoring() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-white mb-8">
        Traffic Monitoring
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 text-white">
          Central Market - Heavy Traffic
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6 text-white">
          Airport Road - Moderate Traffic
        </div>

        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 text-white">
          City Center - Smooth Traffic
        </div>
      </div>
    </div>
  )
}

export default TrafficMonitoring