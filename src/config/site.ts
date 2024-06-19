import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "GMHQ Case",
  author: "ccan",
  description:
    "A simple Next.js starter with Tailwind CSS, Radix UI, and shadcn/ui.",
  keywords: ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
  },
}
