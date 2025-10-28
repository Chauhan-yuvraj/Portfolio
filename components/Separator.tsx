import { cn } from '@/lib/utils'
import React from 'react'

interface SeparatorProps {
    rotation?: string
    className?: string
}

const Separator = ({ rotation = 'rotate-0', className }: SeparatorProps) => { // Added rotation prop for flexibility
    return (
        <div
            className={cn(
                "relative flex h-8 w-full  origin-center", 
                rotation,
                "before:absolute before:-left-[100vw] before:z-1 before:h-8 before:w-[200vw]",
                "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
                className
            )}
        />
    )
}

export default Separator