import type { HTMLAttributes } from 'react'
import { cn } from './cn'

type InputErrorMessageProps = HTMLAttributes<HTMLSpanElement>

export function InputErrorMessage({
  children,
  className,
  ...delegated
}: InputErrorMessageProps) {
  return (
    <span className={cn('px-1 text-red-400 text-sm', className)} {...delegated}>
      {children}
    </span>
  )
}
