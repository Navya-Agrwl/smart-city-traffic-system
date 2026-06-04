import { useState, useEffect } from "react"
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
  const [trafficData, setTrafficData] = useState([])

  useEffect(() => {
    const fetchTrafficData = async () => {
      try {
        const response = await fetch("http://localhost:8000/traffic")
        const data = await response.json()
        setTrafficData(data)
      } catch (error) {
        console.error("Error fetching traffic data:", error)
      }
    }

    fetchTrafficData()
  }, [])

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