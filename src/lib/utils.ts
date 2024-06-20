import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getOS(): string | undefined {
  const os = ["Windows", "Mac"]
  return os.find((v) => navigator.appVersion.indexOf(v) >= 0)
}
