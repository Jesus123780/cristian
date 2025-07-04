import React from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.css'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'danger'
  className?: string
  loading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  loading = false,
  ...props
}) => {
  const variantClass = styles[variant] || ''

  return (
    <button
      className={`${styles.button} ${variantClass} ${className}`}
      {...props}
    >
      {loading ?  'loading' : children}: 
    </button>
  )
}

    