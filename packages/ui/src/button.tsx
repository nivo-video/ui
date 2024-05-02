import { Slot } from '@radix-ui/react-slot'
import type { ButtonHTMLAttributes } from 'react';
import type { VariantProps} from 'tailwind-variants';
import { tv } from 'tailwind-variants'

type ButtonVariants = VariantProps<typeof button>

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {
  asChild?: boolean;
  children: React.ReactNode;
}

const button = tv({
  base: 'cursor-default w-fit flex items-center gap-2 font-medium transition-colors rounded disabled:cursor-not-allowed disabled:opacity-60 outline-none focus:ring-2 focus:ring-offset-2 ring-offset-zinc-950',
  variants: {
    variant: {
      default: 'text-zinc-50 border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 focus:ring-zinc-600/60',
      primary: 'text-lime-950 bg-lime-300 hover:bg-lime-400 focus:ring-lime-300/60',
      secondary: 'text-violet-950 bg-violet-400 hover:bg-violet-500 focus:ring-violet-400/60',
      danger: 'text-white bg-red-600 hover:bg-red-800 focus:ring-red-400/60',
      ghost: 'text-zinc-400 underline underline-offset-2 bg-transparent border border-transparent hover:border-zinc-800 focus:ring-zinc-600/60',
    },
    size: {
      small: 'px-2.5 h-7 text-xs',
      medium: 'px-4 h-8 text-sm',
      default: 'px-4 h-9 text-sm',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  }
})

export function Button({ asChild, children, variant, size, ...delegated }: ButtonProps): JSX.Element {
  const Component = asChild ? Slot : 'button'; 

  return (
    <Component className={button({ variant, size })} type="button" {...delegated}>
      {children}
    </Component>
  );
}
