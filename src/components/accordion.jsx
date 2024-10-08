import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronRightIcon } from 'lucide-react'
import { forwardRef } from 'react'

import { tailwindMerge } from '../helpers/tailwind-merge'

export const Accordion = forwardRef(({ className, ...props }, forwardedRef) => (
  <AccordionPrimitive.Root
    className={tailwindMerge('p-[10px]', className)}
    {...props}
    ref={forwardedRef}
  />
))

Accordion.displayName = 'Accordion'

export const AccordionItem = forwardRef(
  ({ className, ...props }, forwardedRef) => (
    <AccordionPrimitive.Item
      className={tailwindMerge('border-b border-[#272727]', className)}
      {...props}
      ref={forwardedRef}
    />
  ),
)

AccordionItem.displayName = 'AccordionItem'

export const AccordionTrigger = forwardRef(
  ({ className, children, ...props }, forwardedRef) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={tailwindMerge(
          'flex flex-1 items-center gap-[20px] pb-[10px] pt-[20px] text-start text-[18px] text-[#cccccc] transition-all md:text-[20px] [&[data-state=open]>svg]:-rotate-90 [&[data-state=open]]:text-[#fafafa]',
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        <ChevronRightIcon className="size-[14.59px] shrink-0 text-[#7ed956] transition-transform duration-200" />
        {children}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  ),
)

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

export const AccordionContent = forwardRef(
  ({ className, children, ...props }, forwardedRef) => (
    <AccordionPrimitive.Content
      className="overflow-hidden px-[10px] py-[12px] text-[#7a7a7a] transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
      ref={forwardedRef}
    >
      <div
        className={tailwindMerge(
          'mb-[1.75em] pb-4 pt-0 font-sora text-[14.592px] lg:text-[16px]',
          className,
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  ),
)

AccordionContent.displayName = AccordionPrimitive.Content.displayName
