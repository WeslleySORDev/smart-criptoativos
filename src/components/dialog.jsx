import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { forwardRef } from 'react'

import { tailwindMerge } from '../helpers/tailwind-merge'

export const Dialog = DialogPrimitive.Root

export const DialogTrigger = DialogPrimitive.Trigger

export const DialogPortal = DialogPrimitive.Portal

export const DialogClose = DialogPrimitive.Close

export const DialogOverlay = forwardRef(
  ({ className, ...props }, forwardedRef) => (
    <DialogPrimitive.Overlay
      className={tailwindMerge(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80',
        className,
      )}
      {...props}
      ref={forwardedRef}
    />
  ),
)

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

export const DialogContent = forwardRef(
  ({ className, children, ...props }, forwardedRef) => (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        className={tailwindMerge(
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-[#252525] bg-[#161616] p-6 shadow-lg duration-200 sm:rounded-lg',
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <DialogPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  ),
)

DialogContent.displayName = DialogPrimitive.Content.displayName

export const DialogHeader = ({ className, ...props }) => (
  <div
    className={tailwindMerge(
      'flex flex-col space-y-1.5 text-center sm:text-left',
      className,
    )}
    {...props}
  />
)

DialogHeader.displayName = 'DialogHeader'

export const DialogFooter = ({ className, ...props }) => (
  <div className={tailwindMerge('', className)} {...props} />
)

DialogFooter.displayName = 'DialogFooter'

export const DialogTitle = forwardRef(
  ({ className, ...props }, forwardedRef) => (
    <DialogPrimitive.Title
      className={tailwindMerge(
        'text-lg font-semibold leading-none tracking-tight',
        className,
      )}
      {...props}
      ref={forwardedRef}
    />
  ),
)

DialogTitle.displayName = DialogPrimitive.Title.displayName

export const DialogDescription = forwardRef(
  ({ className, ...props }, forwardedRef) => (
    <DialogPrimitive.Description
      className={tailwindMerge('text-muted-foreground text-sm', className)}
      {...props}
      ref={forwardedRef}
    />
  ),
)

DialogDescription.displayName = DialogPrimitive.Description.displayName
