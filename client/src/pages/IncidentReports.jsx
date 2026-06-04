function IncidentReports() {
  const incidents = [
    {
      type: "Accident",
      location: "Junction A",
      severity: "High",
      time: "10 mins ago",
    },
    {
      type: "Road Construction",
      location: "Airport Road",
      severity: "Medium",
      time: "30 mins ago",
    },
    {
      type: "Emergency Vehicle",
      location: "Ring Road",
      severity: "High",
      time: "5 mins ago",
    },
  ]

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-white mb-8">
        Incident Reports
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {incidents.map((incident, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl p-5"
          >
            <h3 className="text-xl font-semibold text-white">
              {incident.type}
            </h3>

            <p className="text-gray-300 mt-2">
              📍 {incident.location}
            </p>

            <p className="text-gray-300">
  ⚠️ Severity:{" "}
  <span
    className={
      incident.severity === "High"
        ? "text-red-400"
        : "text-yellow-400"
    }
  >
    {incident.severity}
  </span>
</p>

            <p className="text-gray-400 text-sm mt-2">
              {incident.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default IncidentReports