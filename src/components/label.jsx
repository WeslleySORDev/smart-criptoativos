import * as LabelPrimitive from '@radix-ui/react-label'
import { forwardRef } from 'react'

import { tailwindMerge } from '../helpers/tailwind-merge'

export const Label = forwardRef(({ className, ...props }, forwardedRef) => (
  <LabelPrimitive.Root
    className={tailwindMerge(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      className,
    )}
    {...props}
    ref={forwardedRef}
  />
))

Label.displayName = LabelPrimitive.Root.displayName
