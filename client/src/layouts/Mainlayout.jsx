import { useState } from "react"

import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

function MainLayout({ children }) {

  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="flex bg-[#0B0F19] min-h-screen overflow-hidden relative">

      {/* Background Glow */}

      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Sidebar */}

      <div
        className={`transition-all duration-500 ${
          isOpen ? "w-72" : "w-0"
        }`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}

      <div className="flex-1 relative z-10">

        <Navbar setIsOpen={setIsOpen} />

        <div className="p-6">
          {children}
        </div>

      </div>

    </div>
  )
}

export default MainLayout