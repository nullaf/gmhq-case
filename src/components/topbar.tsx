import { ArrowRight, Dot, GanttChart, Zap } from "lucide-react"

import { Button } from "./ui/button"

export default function Topbar() {
  return (
    <div className="flex items-center justify-between border-b-[1px] px-4 py-1.5">
      <div className="my-auto flex h-8 gap-3">
        <div className="m-auto cursor-pointer rounded border-[1px] border-solid border-blue-light-6 bg-blue-light-3 p-1 transition-opacity hover:opacity-80 active:opacity-100">
          <GanttChart size={12} color="#006ADC" strokeWidth={2} />
        </div>
        <div className="m-auto p-1">
          <Zap size={12} color="#006ADC" strokeWidth={2} fill="#006ADC" />
        </div>
        <h4 className="m-auto text-base text-gray-light-12">
          Account Executive Agent
        </h4>
        <h4 className="m-auto text-base text-blue-light-11">
          / Teach the Agent
        </h4>
      </div>
      <div className="flex gap-3">
        <Button
          size="icon"
          variant="ghost"
          className="m-auto rounded-full p-[2px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8.00001 8.66668C8.3682 8.66668 8.66668 8.3682 8.66668 8.00001C8.66668 7.63182 8.3682 7.33334 8.00001 7.33334C7.63182 7.33334 7.33334 7.63182 7.33334 8.00001C7.33334 8.3682 7.63182 8.66668 8.00001 8.66668Z"
              fill="#6F6F6F"
              stroke="#6F6F6F"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.6667 8.66668C13.0349 8.66668 13.3333 8.3682 13.3333 8.00001C13.3333 7.63182 13.0349 7.33334 12.6667 7.33334C12.2985 7.33334 12 7.63182 12 8.00001C12 8.3682 12.2985 8.66668 12.6667 8.66668Z"
              fill="#6F6F6F"
              stroke="#6F6F6F"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.33332 8.66668C3.70151 8.66668 3.99999 8.3682 3.99999 8.00001C3.99999 7.63182 3.70151 7.33334 3.33332 7.33334C2.96513 7.33334 2.66666 7.63182 2.66666 8.00001C2.66666 8.3682 2.96513 8.66668 3.33332 8.66668Z"
              fill="#6F6F6F"
              stroke="#6F6F6F"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Button>
        <Button size="sm" className="m-auto flex justify-center gap-1.5">
          Continue
          <ArrowRight size={14} color="#fff" strokeWidth={2} />
        </Button>
      </div>
    </div>
  )
}
