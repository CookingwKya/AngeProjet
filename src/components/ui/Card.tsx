import { HTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: 'default' | 'hover' | 'gradient'
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <div
        className={clsx(
          'rounded-2xl transition-all duration-300',
          {
            'bg-white shadow-soft': variant === 'default',
            'bg-white shadow-soft hover:shadow-medium hover:-translate-y-2 cursor-pointer': variant === 'hover',
            'bg-gradient-to-br from-primary to-primary-dark text-white shadow-strong': variant === 'gradient',
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card
