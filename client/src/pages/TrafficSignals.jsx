function TrafficSignals() {
  const signals = [
    {
      junction: "Junction A",
      signal: "🟢 Green",
      timer: "45s",
      status: "Active",
    },
    {
      junction: "Junction B",
      signal: "🔴 Red",
      timer: "30s",
      status: "Active",
    },
    {
      junction: "Junction C",
      signal: "🟡 Yellow",
      timer: "5s",
      status: "Transition",
    },
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold text-white mb-8">
        Traffic Signals
      </h1>
      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
  <table className="w-full text-white">
    <thead className="bg-white/10">
      <tr>
        <th className="p-4 text-left">Junction</th>
        <th className="p-4 text-left">Signal</th>
        <th className="p-4 text-left">Timer</th>
        <th className="p-4 text-left">Status</th>
      </tr>
    </thead>

    <tbody>
      {signals.map((item, index) => (
        <tr key={index} className="border-t border-white/10">
          <td className="p-4">{item.junction}</td>
          <td className="p-4">{item.signal}</td>
          <td className="p-4">{item.timer}</td>
          <td className="p-4">{item.status}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </div>
  )
}

export default TrafficSignals