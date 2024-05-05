import * as RadixCheckbox from '@radix-ui/react-checkbox'
import type { ComponentPropsWithoutRef } from 'react'
import { cn } from './cn'

interface CheckboxProps
  extends ComponentPropsWithoutRef<typeof RadixCheckbox.Root> {
  hasError?: boolean
}

export function Checkbox({ className, hasError, ...delegated }: CheckboxProps) {
  return (
    <RadixCheckbox.Root
      className={cn(
        'flex h-4 w-4 items-center justify-center rounded border border-zinc-800 bg-zinc-900 transition-colors data-[state=checked]:border-lime-500 data-[state=checked]:bg-lime-300 hover:bg-zinc-800',
        {
          'border-red-400': hasError,
        },
        className,
      )}
      {...delegated}
    >
      <RadixCheckbox.Indicator>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 3L4.5 8.5L2 6"
            stroke="#1A2E05"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  )
}
