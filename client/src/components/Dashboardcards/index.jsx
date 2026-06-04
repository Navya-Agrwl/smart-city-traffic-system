function DashboardCards({ title, value, icon }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg hover:scale-105 transition-all duration-300">
      <div className="text-4xl mb-3">{icon}</div>

      <h3 className="text-white/70 text-sm">{title}</h3>

      <p className="text-3xl font-bold text-white mt-2">
        {value}
      </p>
    </div>
  )
}

export default DashboardCards