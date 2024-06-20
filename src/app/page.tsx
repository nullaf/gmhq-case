import Agent from "@/components/agent"
import Sidebar from "@/components/sidebar"

export default function Home() {
  return (
    <main className="h-full">
      <div className="flex h-full justify-center bg-gray-light-3">
        <Sidebar />
        <Agent />
      </div>
    </main>
  )
}
