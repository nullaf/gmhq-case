"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Sidebar() {
  const pathname = usePathname()
  const otherPage = pathname !== "/" ? "/" : "/search"
  return (
    <div className="bg-gray-light-5 h-full w-[16rem] blur-sm">
      <Link href={otherPage}>
        <Image
          src="/navbar.png"
          width={248}
          height={1024}
          alt="Navigation bar of the app"
        />
      </Link>
    </div>
  )
}
