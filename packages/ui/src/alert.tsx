import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from './cn'
import type { HTMLAttributes } from 'react'

type AlertVariants = VariantProps<typeof alert>

type AlertProps = AlertVariants & HTMLAttributes<HTMLDivElement>

const alert = tv({
  base: 'flex items-center gap-2 rounded-md border px-3 py-2.5 text-sm ring-1 ring-black/25',
  variants: {
    type: {
      error: 'border-red-600 text-red-400',
      info: 'border-sky-400 text-sky-300',
      success: 'border-green-400 text-green-300',
      warn: 'border-yellow-400 text-yellow-300',
    },
  },
})

export function Alert({ type, className, children }: AlertProps) {
  return <div className={cn(alert({ type }), className)}>{children}</div>
}
