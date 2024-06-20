"use client"

import { useState } from "react"
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  FolderSearch,
  Globe,
  ListStart,
  Mail,
  Plus,
  Search,
  Star,
  Users,
} from "lucide-react"

import { Button } from "./ui/button"
import { Input } from "./ui/input"

const suggestions = {
  people: [
    {
      name: "Bertan Teberci",
      linkedin: "bertan-teb",
      email: "bertan@troylabs.io",
    },
    {
      name: "Gaston Che",
      linkedin: "gastonche",
      email: "gaston@troylabs.io",
    },
    {
      name: "Vineet Rai",
      linkedin: "vinneet-rai-12e12",
      email: "raina@brblabs.io",
    },
    {
      name: "Joseph Vinai",
      linkedin: "jovin-ai",
      email: "blob@tajhotels.com",
    },
  ],
  companies: [
    {
      name: "GodmodeHQ",
      linkedin: "gmhq",
      website: "godmodehq.com",
    },
    {
      name: "Sanlo",
      linkedin: "sanloio",
      website: "sanlo.com",
    },
    {
      name: "Kaskade Finance",
      linkedin: "kaskade-finance",
      website: "kaskade.finance",
    },
    {
      name: "Kombo.dev",
      linkedin: "kombo0dev",
      website: "kombo.dev",
    },
  ],
}
type SearchItemProps = {
  type: "people" | "company"
  name: string
  linkedin: string
  email?: string
  website?: string
}
const SearchItem = ({
  type,
  name,
  linkedin,
  email,
  website,
}: SearchItemProps) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      className="relative flex cursor-pointer select-none items-center gap-2.5 rounded-lg px-1.5 py-[0.3125rem] transition-colors hover:bg-gray-light-3 active:bg-gray-light-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="-mr-1 flex w-5 rounded-full border-[1px] border-gray-light-6 bg-gray-light-3 p-1">
        {type === "company" ? (
          <Building2 size={12} color="#6F6F6F" />
        ) : (
          <Users size={12} color="#6F6F6F" />
        )}
      </div>
      <p className="text-sm text-gray-light-11">{name}</p>
      {linkedin && (
        <a
          href={`https://linkedin.com/in/${linkedin}`}
          target="_blank"
          className="flex items-center gap-0.5 rounded border-[1px] border-blue-light-6 bg-blue-light-3 p-0.5 px-1 py-0 text-xs text-blue-light-11 transition-opacity hover:opacity-80 active:opacity-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
          >
            <g clip-path="url(#clip0_1_7048)">
              <path
                d="M8.51958 8.73H8.72788L8.72792 8.5217L8.72833 5.90253V5.9025C8.72833 5.2552 8.66078 4.63426 8.36993 4.17291C8.0652 3.68952 7.54363 3.42125 6.74208 3.42125C6.22853 3.42125 5.81758 3.60197 5.52708 3.84727V3.75V3.54167H5.31875H3.89625H3.68792V3.75V8.52167V8.73H3.89625H5.37708H5.58542V8.52167V6.16042C5.58542 5.85296 5.61651 5.59376 5.71496 5.41534C5.76147 5.33104 5.82207 5.26678 5.90314 5.22194C5.98542 5.17643 6.1011 5.14417 6.26708 5.14417C6.42388 5.14417 6.52313 5.18043 6.58919 5.22655C6.6557 5.273 6.70645 5.34196 6.74437 5.43773C6.82494 5.64124 6.83042 5.91553 6.83042 6.20125V8.52167V8.73H7.03875H8.51958ZM2.96625 8.73H3.17458V8.52167V3.75V3.54167H2.96625H1.48125H1.27292V3.75V8.52167V8.73H1.48125H2.96625ZM1.15583 2.23667C1.15583 2.82572 1.63143 3.30542 2.22375 3.30542C2.81352 3.30542 3.29208 2.82618 3.29208 2.23667C3.29208 1.64744 2.81381 1.16875 2.22375 1.16875C1.63211 1.16875 1.15583 1.64777 1.15583 2.23667ZM0.737917 0.208333H9.25917C9.55745 0.208333 9.79167 0.443315 9.79167 0.720417V9.27958C9.79167 9.55702 9.55753 9.79167 9.25917 9.79167H0.737917C0.4403 9.79167 0.208333 9.55816 0.208333 9.27958V0.720417C0.208333 0.442184 0.440379 0.208333 0.737917 0.208333Z"
                fill="#0A66C2"
                stroke="#0A66C2"
                strokeWidth="0.416667"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_7048">
                <rect width="10" height="10" fill="white" />
              </clipPath>
            </defs>
          </svg>
          {linkedin}
        </a>
      )}
      {email && (
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-0.5 rounded border-[1px] border-gray-light-6 bg-gray-light-3 p-0.5 px-1 py-0 text-xs text-gray-light-11 transition-opacity hover:opacity-80 active:opacity-100"
        >
          <Mail size={10} color="#6F6F6F" />
          {email}
        </a>
      )}
      {website && (
        <a
          href={`https://${website}`}
          className="text-indigo-light-11 border-indigo-light-6 bg-indigo-light-3 flex items-center gap-0.5 rounded border-[1px] p-0.5 px-1 py-0 text-xs transition-opacity hover:opacity-80 active:opacity-100"
        >
          <Globe size={10} color="#3451B2" />
          {website}
        </a>
      )}
      {isHovered && (
        <ArrowUpRight
          size={16}
          className="animate-fade-in absolute right-[1.25rem]"
          color="#6F6F6F"
        />
      )}
    </div>
  )
}

const SearchAny = () => {
  return (
    <div className="absolute bottom-10 left-0 right-0 z-10 m-auto flex w-1/2 gap-3 rounded-lg border-[1px] border-gray-light-6 bg-gray-light-2 p-3 shadow-lg">
      <div className="relative flex w-full flex-col gap-3">
        <div className="relative w-full">
          <Input
            placeholder="Search for anything..."
            type="text"
            startIcon={Search}
            className="rounded-lg border-none bg-white shadow-sm focus-visible:ring-blue-light-11 focus-visible:ring-offset-0 active:ring-0"
          />
          <div className="absolute bottom-0 right-3 top-0 flex items-center text-center text-xs text-gray-light-11">
            Press ⌘ K
          </div>
        </div>
        <div className="h-[0.5px] bg-gray-light-6" />
        <div className="gap-1.5 rounded-lg bg-white p-3 shadow-sm">
          <h4 className="mb-1.5 text-xs text-gray-light-11">Search people</h4>
          {suggestions.people.map((person) => (
            <SearchItem key={person.name} type="people" {...person} />
          ))}
        </div>
        <div className="gap-1.5 rounded-lg bg-white p-3 shadow-sm">
          <h4 className="mb-1.5 text-xs text-gray-light-11">
            Search companies
          </h4>
          {suggestions.companies.map((company) => (
            <SearchItem key={company.name} type="company" {...company} />
          ))}
        </div>
        <div className="ml-auto flex justify-start gap-3">
          <Button
            size="sm"
            variant="ghost"
            className="m-auto flex justify-center gap-1.5 rounded-lg text-gray-light-11"
          >
            <ListStart size={14} color="#6F6F6F" strokeWidth={2} />
            Go to agents
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="m-auto flex justify-center gap-1.5 rounded-lg text-gray-light-11"
          >
            <FolderSearch size={14} color="#6F6F6F" strokeWidth={2} />
            Search new leads
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="m-auto flex justify-center gap-1.5 rounded-lg text-gray-light-11"
          >
            <BarChart3 size={14} color="#6F6F6F" strokeWidth={2} />
            Analytics
          </Button>
          <Button
            size="sm"
            className="m-auto flex justify-center gap-1.5 rounded-lg"
          >
            <Plus size={14} color="#fff" strokeWidth={2} />
            New message
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SearchAny
