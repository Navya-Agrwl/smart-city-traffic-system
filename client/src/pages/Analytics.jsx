import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"

function Analytics() {
  const trafficData = [
    { hour: "6 AM", vehicles: 120 },
    { hour: "8 AM", vehicles: 450 },
    { hour: "10 AM", vehicles: 300 },
    { hour: "12 PM", vehicles: 380 },
    { hour: "2 PM", vehicles: 250 },
    { hour: "6 PM", vehicles: 600 },
  ]

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-white mb-8">
        Traffic Analytics
      </h1>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={trafficData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="vehicles"
              stroke="#06b6d4"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Analytics