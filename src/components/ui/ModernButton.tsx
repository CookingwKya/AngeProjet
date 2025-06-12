import React from 'react'

interface ModernButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
}

export default function ModernButton({ 
  children, 
  variant = 'primary', 
  className = '',
  onClick 
}: ModernButtonProps) {
  const isPrimary = variant === 'primary'
  
  return (
    <div className="relative group">
      <div
        className={`relative p-[2px] rounded-full transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 ${className}`}
        style={{
          background: 'linear-gradient(45deg, #153838, #1e4a4a, #c9a96e, #d4b67a)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
        }}
      >
        <button
          className="relative w-full font-semibold leading-6 cursor-pointer rounded-full transition-all duration-300"
          style={{
            backgroundColor: isPrimary ? '#c9a96e' : 'white',
            color: isPrimary ? '#153838' : '#153838',
            padding: '18px 36px'
          }}
          onClick={onClick}
        >
          <div className="relative z-10 flex items-center justify-center space-x-2">
            <span className="transition-all duration-300 group-hover:translate-x-1">
              {children}
            </span>
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  )
}
