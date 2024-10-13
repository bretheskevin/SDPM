import { Metadata } from "next"
import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SCDJ Playlist Manager | Privacy Policy",
  description: "Privacy policy for DJ Playlist Manager - We do not collect any personal data.",
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-primary/10">
          <Shield className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <div className="prose dark:prose-invert mx-auto">
          <p className="text-xl mb-6 text-gray-600 dark:text-gray-300">
            At SCDJ Playlist Manager, we take your privacy seriously. Our policy is simple:
          </p>
          <h2 className="text-3xl font-semibold mb-6">We Do Not Collect Any Data</h2>
          <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 mb-8">
            <p className="mb-4">
              Our application does not collect, store, or process any personal information.
              We believe in providing a service that respects your privacy completely.
            </p>
            <p className="mb-4">
              When you use DJ Playlist Manager:
            </p>
            <ul className="list-disc list-inside mb-4 text-left">
              <li>No personal information is collected</li>
              <li>No usage data is tracked</li>
              <li>No cookies are used</li>
              <li>No data is shared with third parties</li>
            </ul>
            <p>
              Your SoundCloud token, which is required to manage your playlists, is only used
              to interact with the SoundCloud API and is never stored on our servers.
            </p>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
