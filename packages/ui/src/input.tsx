import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from './cn'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...delegated }, ref) => {
    return (
      <input
        className={cn(
          'rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2.5 text-sm text-zinc-300 leading-none placeholder-zinc-700 outline-none ring-1 ring-black/25 transition-colors duration-150 disabled:cursor-not-allowed focus:border-lime-500 hover:enabled:[&:not(:focus)]:border-zinc-600',
          className,
        )}
        ref={ref}
        {...delegated}
      />
    )
  },
)

Input.displayName = 'Input'
