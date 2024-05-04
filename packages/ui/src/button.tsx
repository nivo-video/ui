import { Slot } from '@radix-ui/react-slot'
import type { ButtonHTMLAttributes } from 'react'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'
import { cn } from './cn'

type ButtonVariants = VariantProps<typeof button>

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  asChild?: boolean
  children: React.ReactNode
}

const button = tv({
  base: 'flex w-fit cursor-default items-center gap-2 rounded font-medium outline-none ring-offset-zinc-950 transition-colors disabled:cursor-not-allowed disabled:opacity-60 focus:ring-2 focus:ring-offset-2',
  variants: {
    variant: {
      default:
        'border border-zinc-800 bg-zinc-900 text-zinc-50 hover:bg-zinc-800 focus:ring-zinc-600/60',
      primary:
        'bg-lime-300 text-lime-950 hover:bg-lime-400 focus:ring-lime-300/60',
      secondary:
        'bg-violet-400 text-violet-950 hover:bg-violet-500 focus:ring-violet-400/60',
      danger: 'bg-red-600 text-white hover:bg-red-800 focus:ring-red-400/60',
      ghost:
        'border border-transparent bg-transparent text-zinc-400 underline underline-offset-2 hover:border-zinc-800 focus:ring-zinc-600/60',
    },
    size: {
      small: 'h-7 px-2.5 text-xs',
      medium: 'h-8 px-4 text-sm',
      default: 'h-9 px-4 text-sm',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export function Button({
  asChild,
  children,
  variant,
  size,
  className,
  ...delegated
}: ButtonProps): JSX.Element {
  const Component = asChild ? Slot : 'button'

  return (
    <Component
      className={cn(button({ variant, size }), className)}
      type="button"
      {...delegated}
    >
      {children}
    </Component>
  )
}
