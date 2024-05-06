import * as RadixSeparator from '@radix-ui/react-separator'
import type { ComponentPropsWithoutRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from './cn'

type DividerVariants = VariantProps<typeof divider>

type DividerProps = ComponentPropsWithoutRef<typeof RadixSeparator.Root> &
  DividerVariants

const divider = tv({
  base: 'bg-zinc-900 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px',
})

export function Divider({
  className,
  orientation,
  ...delegated
}: DividerProps) {
  return (
    <RadixSeparator.Root
      orientation={orientation}
      className={cn(divider(), className)}
      {...delegated}
    />
  )
}
