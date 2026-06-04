import DashboardCards from "../components/Dashboardcards"

function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-white mb-8">
        Smart Traffic Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <DashboardCards
          title="Active Signals"
          value="42"
          icon="🚦"
        />

        <DashboardCards
          title="Vehicles Detected"
          value="12,458"
          icon="🚗"
        />

        <DashboardCards
          title="Incidents Today"
          value="7"
          icon="⚠️"
        />

        <DashboardCards
          title="Traffic Flow"
          value="87%"
          icon="📈"
        />
        <div className="mt-10">
  <h2 className="text-2xl font-semibold text-white mb-4">
    Live Traffic Status
  </h2>

  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
    <div className="flex justify-between py-3 border-b border-white/10">
      <span className="text-white">Central Market</span>
      <span className="text-red-400">🔴 Heavy</span>
    </div>

    <div className="flex justify-between py-3 border-b border-white/10">
      <span className="text-white">Airport Road</span>
      <span className="text-yellow-400">🟡 Moderate</span>
    </div>

    <div className="flex justify-between py-3 border-b border-white/10">
      <span className="text-white">City Center</span>
      <span className="text-green-400">🟢 Smooth</span>
    </div>

    <div className="flex justify-between py-3">
      <span className="text-white">Ring Road</span>
      <span className="text-red-400">🔴 Heavy</span>
    </div>
  </div>
</div>
<div className="mt-10">
  <h2 className="text-2xl font-semibold text-white mb-4">
    Recent Incidents
  </h2>

  <div className="grid md:grid-cols-2 gap-4">
    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-white">
      🚗 Accident at Junction A
    </div>

    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 text-white">
      🚧 Road Work on Airport Road
    </div>
  </div>
</div>
  
</div>
    </div>
    
  )
  
  
}

export default Dashboard