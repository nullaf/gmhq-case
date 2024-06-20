import { ExternalLink, MapPin } from "lucide-react"

import { Button } from "./ui/button"

const AgentHeaders = () => {
  return (
    <div className="flex flex-col gap-1.5 border-b-[1px] border-gray-light-6">
      <div className="flex h-7 flex-row items-center gap-3">
        <p className="w-36 text-sm text-gray-light-11">Name</p>
        <div className="flex items-center gap-1.5">
          <div className="bg-red-dark-1 h-[1.125rem] w-[1.125rem] rounded-full" />
          <Button
            variant="link"
            className="gap-1 p-0 font-normal transition-opacity hover:opacity-90 active:opacity-100"
          >
            Ville Rauma
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <g clipPath="url(#clip0_4011_3956)">
                <path
                  d="M10.2235 10.226H8.4465V7.4415C8.4465 6.7775 8.433 5.923 7.5205 5.923C6.594 5.923 6.4525 6.6455 6.4525 7.3925V10.226H4.6755V4.5H6.3825V5.2805H6.4055C6.644 4.8305 7.224 4.3555 8.0905 4.3555C9.891 4.3555 10.224 5.5405 10.224 7.083L10.2235 10.226ZM2.6685 3.7165C2.0965 3.7165 1.637 3.2535 1.637 2.684C1.637 2.115 2.097 1.6525 2.6685 1.6525C3.2385 1.6525 3.7005 2.115 3.7005 2.684C3.7005 3.2535 3.238 3.7165 2.6685 3.7165ZM3.5595 10.226H1.7775V4.5H3.5595V10.226ZM11.1125 0H0.8855C0.396 0 0 0.387 0 0.8645V11.1355C0 11.6135 0.396 12 0.8855 12H11.111C11.6 12 12 11.6135 12 11.1355V0.8645C12 0.387 11.6 0 11.111 0H11.1125Z"
                  fill="#0A66C2"
                />
              </g>
              <defs>
                <clipPath id="clip0_4011_3956">
                  <rect width="12" height="12" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <ExternalLink size={12} strokeWidth={2} />
          </Button>
        </div>
      </div>

      <div className="flex h-7 flex-row items-center gap-3">
        <p className="w-36 text-sm text-gray-light-11">Job title</p>
        <div className="flex items-center gap-1.5">
          <h4 className="text-sm text-gray-light-12">Account Executive</h4>
        </div>
      </div>

      <div className="flex h-7 flex-row items-center gap-3">
        <p className="w-36 text-sm text-gray-light-11">Company</p>
        <div className="flex items-center gap-1.5">
          <div className="bg-red-dark-1 h-3.5 w-3.5 rounded" />
          <Button
            variant="link"
            className="gap-1 p-0 font-normal transition-opacity hover:opacity-90 active:opacity-100"
          >
            GodmodeHQ
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <g clipPath="url(#clip0_4011_3956)">
                <path
                  d="M10.2235 10.226H8.4465V7.4415C8.4465 6.7775 8.433 5.923 7.5205 5.923C6.594 5.923 6.4525 6.6455 6.4525 7.3925V10.226H4.6755V4.5H6.3825V5.2805H6.4055C6.644 4.8305 7.224 4.3555 8.0905 4.3555C9.891 4.3555 10.224 5.5405 10.224 7.083L10.2235 10.226ZM2.6685 3.7165C2.0965 3.7165 1.637 3.2535 1.637 2.684C1.637 2.115 2.097 1.6525 2.6685 1.6525C3.2385 1.6525 3.7005 2.115 3.7005 2.684C3.7005 3.2535 3.238 3.7165 2.6685 3.7165ZM3.5595 10.226H1.7775V4.5H3.5595V10.226ZM11.1125 0H0.8855C0.396 0 0 0.387 0 0.8645V11.1355C0 11.6135 0.396 12 0.8855 12H11.111C11.6 12 12 11.6135 12 11.1355V0.8645C12 0.387 11.6 0 11.111 0H11.1125Z"
                  fill="#0A66C2"
                />
              </g>
              <defs>
                <clipPath id="clip0_4011_3956">
                  <rect width="12" height="12" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <ExternalLink size={12} strokeWidth={2} />
          </Button>
        </div>
      </div>

      <div className="flex h-7 flex-row items-center gap-3">
        <p className="w-36 text-sm text-gray-light-11">Location</p>
        <div className="flex items-center gap-1.5">
          <MapPin size={12} color="#006ADC" strokeWidth={1.5} />
          <h4 className="text-sm text-gray-light-12">
            San Francisco, United States
          </h4>
        </div>
      </div>

      <div className="flex h-7 flex-row items-center gap-3">
        <p className="w-36 min-w-36 whitespace-nowrap text-sm text-gray-light-11">
          Linkedin headline
        </p>
        <div className="flex items-center gap-1.5">
          <h4 className="line-clamp-1 min-w-0 text-sm text-gray-light-12">
            Financial Adviser & Pension Transfer Specialistk at Origen
          </h4>
        </div>
      </div>
    </div>
  )
}

export default AgentHeaders
