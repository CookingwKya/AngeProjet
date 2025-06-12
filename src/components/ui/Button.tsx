import { ButtonHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        className={clsx(
          'inline-flex items-center justify-center rounded-3xl font-sans font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2',
          {
            'bg-accent-gold text-primary hover:bg-accent-light shadow-gold': variant === 'primary',
            'bg-secondary text-primary hover:bg-secondary-dark': variant === 'secondary',
            'border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-primary': variant === 'outline',
          },
          {
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
