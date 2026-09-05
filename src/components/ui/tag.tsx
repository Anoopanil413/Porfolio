import { cn } from '@/lib/utils'

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[11.5px] leading-none text-muted transition-colors duration-200',
        'hover:border-accent/40 hover:text-fg',
        className,
      )}
    >
      {children}
    </span>
  )
}
