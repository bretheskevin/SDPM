import Link from 'next/link'
import { Headphones, ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4 text-center">
      <Headphones className="h-16 w-16 text-primary mb-6" />
      <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Oops! The playlist you're looking for seems to have skipped a beat.
      </p>
      <Button asChild>
        <Link href="/" className="inline-flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>
    </div>
  )
}
