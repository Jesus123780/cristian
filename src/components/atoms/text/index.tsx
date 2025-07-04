'use client'

import React from 'react'
import styles from './Text.module.css'

type TextProps = {
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'label' | 'strong'
  children: React.ReactNode
  variant?: 'title' | 'subtitle' | 'body' | 'caption'
  className?: string
}

export const Text: React.FC<TextProps> = ({
  as: Component = 'p',
  children,
  variant = 'body',
  className = '',
}) => {
  return (
    <Component className={`${styles[variant]} ${className}`}>
      {children}
    </Component>
  )
}
