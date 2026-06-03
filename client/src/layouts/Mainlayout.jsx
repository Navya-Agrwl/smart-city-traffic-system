import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

function MainLayout({ children }) {
  // Open by default on desktop, closed on mobile
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768)

  // Handle resize: auto-open on desktop, auto-close on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(true)
      else setIsOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="flex bg-[#0B0F19] min-h-screen overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-120px] right-[-120px] w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />

      {/* Sidebar — fixed drawer on mobile, static column on desktop */}
      <div className={`hidden md:block transition-all duration-300 flex-shrink-0 ${isOpen ? "w-72" : "w-0 overflow-hidden"}`}>
        <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>

      {/* Mobile sidebar rendered outside the flow so it overlays */}
      <div className="md:hidden">
        <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>

      {/* Main Content */}
      <div className="flex-1 relative z-10 min-w-0">
        <Navbar setIsOpen={setIsOpen} />
        <div className="p-4 md:p-6">
          {children}
        </div>
      </div>

    </div>
  )
}

export default MainLayout