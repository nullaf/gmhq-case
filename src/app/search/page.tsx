import Agent from "@/components/agent"
import Sidebar from "@/components/sidebar"

export default function Search() {
  return (
    <main className="h-lvh bg-gray-light-3">
      <div className="flex h-full justify-center bg-gray-light-3">
        <Sidebar />
        <Agent showSearch />
      </div>
    </main>
  )
}
