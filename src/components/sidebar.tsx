import Image from "next/image"

export default function Sidebar() {
  return (
    <div className="bg-gray-light-5 h-full w-[16rem] blur-sm">
      <Image
        src="/navbar.png"
        width={248}
        height={1024}
        alt="Avatar of Mert Deveci"
      />
    </div>
  )
}
