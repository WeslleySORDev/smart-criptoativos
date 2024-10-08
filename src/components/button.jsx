import { Slot } from '@radix-ui/react-slot'
import { forwardRef } from 'react'

import { tailwindMerge } from '../helpers/tailwind-merge'

export const Button = forwardRef(
  ({ asChild, className, ...props }, forwardedRef) => {
    const Component = asChild ? Slot : 'button'

    return (
      <div className="mt-[10px] flex animate-button-pulse items-center justify-center rounded">
        <Component
          className={tailwindMerge(
            'inline-flex w-full items-center justify-center rounded bg-gradient-to-r from-[#7ed956] to-[#497f31] px-[30px] py-[15px] text-[18px]/[1] font-extrabold uppercase text-[#f8f8f8]',
            className,
          )}
          {...props}
          ref={forwardedRef}
        />
      </div>
    )
  },
)

Button.displayName = 'Button'
