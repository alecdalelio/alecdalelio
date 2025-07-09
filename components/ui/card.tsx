import * as React from "react"
import { motion } from "framer-motion"
import { ReactNode } from "react"

import { cn } from "@/lib/utils"

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  onClick?: () => void;
}

export function Card({ 
  children, 
  className = "", 
  hover = true, 
  delay = 0,
  onClick 
}: CardProps) {
  const baseClasses = "p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all duration-300"
  const hoverClasses = hover ? "hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:shadow-lg" : ""
  
  const MotionComponent = motion.div
  
  return (
    <MotionComponent
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      whileHover={hover ? { scale: 1.02, y: -4 } : undefined}
      className={`${baseClasses} ${hoverClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </MotionComponent>
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export function CardTitle({ children, className = "" }: CardTitleProps) {
  return (
    <h3 className={`text-lg font-medium text-foreground ${className}`}>
      {children}
    </h3>
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return (
    <div className={`text-sm text-muted-foreground leading-relaxed ${className}`}>
      {children}
    </div>
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  CardHeader,
  CardFooter,
  CardAction,
  CardDescription,
}
