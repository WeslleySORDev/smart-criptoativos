import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const tailwindMerge = (...className) => {
  return twMerge(clsx(className))
}
