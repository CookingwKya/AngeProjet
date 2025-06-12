import { HTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'lg', children, ...props }, ref) => {
    return (
      <div
        className={clsx(
          'mx-auto px-4 sm:px-6 lg:px-8',
          {
            'max-w-3xl': size === 'sm',
            'max-w-5xl': size === 'md',
            'max-w-7xl': size === 'lg',
            'max-w-none': size === 'xl',
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

Container.displayName = 'Container'
export default Container
