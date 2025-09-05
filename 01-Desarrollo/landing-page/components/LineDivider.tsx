interface LineDividerProps {
  className?: string
}

export default function LineDivider({ className = "" }: LineDividerProps) {
  return (
    <div className={`w-full py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
      </div>
    </div>
  )
}