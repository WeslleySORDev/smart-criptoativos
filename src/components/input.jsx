import { forwardRef } from 'react'

import { tailwindMerge } from '../helpers/tailwind-merge'

const Input = forwardRef(({ className, type, ...props }, forwardedRef) => {
  return (
    <input
      type={type}
      className={tailwindMerge(
        'border-input bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
      ref={forwardedRef}
    />
  )
})

Input.displayName = 'Input'

export { Input }
