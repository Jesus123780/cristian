import React from 'react'
import Image, { ImageProps } from 'next/image'

type CustomImageProps = {
  className?: string
  containerClassName?: string
} & ImageProps

export const CustomImage: React.FC<CustomImageProps> = ({
  className,
  containerClassName,
  height = 300,
  width = 300,
  ...props
}) => {
  return (
    <div className={containerClassName} style={{ position: 'relative', width: '100%', height: 'auto' }}>
      <Image
        className={className}
        width={width}
        height={height}
        style={{ objectFit: 'cover' }}
        {...props}
      />
    </div>
  )
}
