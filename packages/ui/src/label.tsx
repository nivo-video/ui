import { forwardRef } from 'react'
import * as RadixLabel from '@radix-ui/react-label'
import type { ComponentPropsWithoutRef } from 'react'
import { tv } from 'tailwind-variants'
import type { VariantProps } from 'tailwind-variants'
import { cn } from './cn'

type LabelVariants = VariantProps<typeof label>

interface LabelProps
  extends ComponentPropsWithoutRef<typeof RadixLabel.Root>,
    LabelVariants {
  required?: boolean
}

const label = tv({
  base: 'font-semibold text-zinc-50',
  variants: {
    size: {
      small: 'text-sm',
      default: 'text-base',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

export const Label = forwardRef<
  React.ElementRef<typeof RadixLabel.Root>,
  LabelProps
>(({ className, children, required = false, size, ...delegated }, ref) => {
  return (
    <RadixLabel.Root
      ref={ref}
      className={cn(label({ size }), className)}
      {...delegated}
    >
      {children}

      {required && (
        <span className="text-xs text-zinc-500" aria-hidden="true">
          {' '}
          *
        </span>
      )}
    </RadixLabel.Root>
  )
})

Label.displayName = 'Label'
