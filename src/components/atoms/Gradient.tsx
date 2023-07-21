import React from 'react'
import { cn } from '../../utils/classMerge'

interface GradientProps {
  rotate: string
  className: string
}

const Gradient: React.FC<GradientProps> = ({
  rotate = 'rotate-0',
  className
}) => {
  return (
    <div
      className={cn(
        'h-56 aspect-square rounded-full bg-gradient-to-r from-primary/70 to-white/30',
        rotate,
        className
      )}
    ></div>
  )
}

export default Gradient
