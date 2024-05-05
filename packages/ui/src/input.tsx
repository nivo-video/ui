import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from './cn'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, hasError = false, ...delegated }, ref) => {
    return (
      <input
        className={cn(
          'rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2.5 text-sm text-zinc-300 leading-none placeholder-zinc-700 outline-none ring-1 ring-black/25 transition-colors duration-150 disabled:cursor-not-allowed focus:border-lime-300',
          {
            'hover:enabled:[&:not(:focus)]:border-zinc-600': !hasError,
            'border-red-400': hasError,
          },
          className,
        )}
        ref={ref}
        {...delegated}
      />
    )
  },
)

Input.displayName = 'Input'
