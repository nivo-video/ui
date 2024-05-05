import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react'
import * as RadixLabel from '@radix-ui/react-label'
import { tv, type VariantProps } from 'tailwind-variants'
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

export const Label = forwardRef<ElementRef<typeof RadixLabel.Root>, LabelProps>(
  ({ className, children, required = false, size, ...delegated }, ref) => {
    return (
      <RadixLabel.Root
        ref={ref}
        className={cn(label({ size }), className)}
        {...delegated}
      >
        {children}

        {required && (
          <span className="ml-1 text-xs text-zinc-500" aria-hidden="true">
            *
          </span>
        )}
      </RadixLabel.Root>
    )
  },
)

Label.displayName = 'Label'
