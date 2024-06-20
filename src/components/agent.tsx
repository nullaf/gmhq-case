import AgentComments from "./agent-comments"
import AgentDesc from "./agent-desc"
import Topbar from "./topbar"

const Agent = () => {
  return (
    <div className="h-full w-full p-2">
      <div className="h-full w-full rounded-xl border-[0.5px] border-solid border-gray-light-4 bg-gray-light-1">
        <Topbar />
        <div className="mt-3 px-4 py-3">
          <div className="flex gap-12">
            <AgentDesc />
            <div className="w-[0.5px] bg-gray-light-6" />
            <AgentComments />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agent
