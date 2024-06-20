import Image from "next/image"
import { CornerDownLeft, MailPlus } from "lucide-react"

import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"

const AgentComments = () => {
  const commentStart = `Dear Ville,
  `
  const commentEnd = `
Best regards,
Mert Deveci
GodmodeHQ
  `
  return (
    <div className="flex w-full flex-col gap-2.5 ">
      <div className="flex items-center gap-1.5">
        <MailPlus size={12} color="#006ADC" strokeWidth={2} />
        <p className="text-sm text-gray-light-11">
          Example output for test lead
        </p>
      </div>
      <div className="flex flex-col rounded-lg bg-white p-3 text-sm text-gray-light-12 shadow-sm">
        <div className="whitespace-pre">{commentStart}</div>
        <div>
          As the Executive Distributor at EC21, I believe our new Sanlo Webshop
          solution could be a great fit to help drive more revenue and improve
          margins for your gaming business. Sanlo&apos;s plug-and-play webshop
          allows you to connect directly with players, boosting their lifetime
          value. And our suite of monetization tools, from payments to
          financing, can unlock new revenue streams.
        </div>
        <br />
        <div>
          I&apos;d welcome the chance to discuss how Sanlo could benefit EC21.
          Are you available for a quick call this week to explore the
          possibilities?
        </div>
        <div className="whitespace-pre">{commentEnd}</div>
      </div>

      <div className="relative flex w-full gap-1.5">
        <div>
          <Image
            src="/avatar.jpg"
            width={20}
            height={20}
            className="rounded-full"
            alt="Avatar of Mert Deveci"
          />
        </div>

        <div className=" h-[7.5rem] w-full rounded-lg bg-white p-3 text-gray-light-12 shadow-sm">
          <Textarea
            className="h-full w-full resize-none border-none bg-white focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 active:ring-0"
            placeholder="Instruct your comments to the agent e.g. “Make it more casual”"
          />
        </div>
        <Button
          size="icon"
          className="absolute bottom-3 right-3 h-7 w-7 rounded-lg p-1.5"
        >
          <CornerDownLeft size={14} color="#fff" />
        </Button>
      </div>
    </div>
  )
}

export default AgentComments
