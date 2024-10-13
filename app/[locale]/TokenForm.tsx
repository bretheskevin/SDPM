"use client"

import {useState} from "react"
import {Alert, AlertDescription} from "@/components/ui/alert"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {AlertCircle, Loader2, Music2} from "lucide-react"
import {useScopedI18n} from "@/locales/client";
import Link from "next/link"; // Import Link for navigation

export function TokenForm() {
  const scopedT = useScopedI18n('tokenForm')

  const [token, setToken] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    setTimeout(() => {
      if (token.length < 10) {
        setError(scopedT("tokenInvalid"))
      } else {
        console.log('Token submitted:', token)
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
          <Music2 className="h-10 w-10 text-primary" />
        </div>
        <h2 className="text-2xl font-bold mb-2">{scopedT("title")}</h2>
        <p className="text-gray-500 dark:text-gray-400">
          {scopedT("description")}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="token-wrapper">
          <Label htmlFor="token" className="text-sm font-medium block mb-1">
            {scopedT("label")}
          </Label>
          <Input
            id="token"
            placeholder={scopedT("placeholder")}
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
            className="w-full bg-white focus:ring focus:ring-primary/50 rounded-md shadow-sm"
          />
        </div>
        {error && (
          <Alert variant="destructive" className="alert-error">
            <div className="flex items-center">
              <AlertCircle className="h-4 w-4 mr-2" />
              <AlertDescription>{error}</AlertDescription>
            </div>
          </Alert>
        )}
        <div className="form-wrapper">
          <Button
            type="submit"
            className="w-full bg-primary text-white hover:bg-primary-dark disabled:bg-gray-300 focus:ring focus:ring-primary/50"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {scopedT("buttonLabelLoading")}
              </>
            ) : (
              scopedT("buttonLabel")
            )}
          </Button>
        </div>
      </form>
      <div className="mt-4 text-center">
        <Link href="/soundcloud-token-tutorial" className="text-primary underline text-sm">
          {scopedT("howToGetTokenLink")}
        </Link>
      </div>
    </div>
  )
}
