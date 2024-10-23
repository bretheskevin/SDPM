"use client";

import { useEffect, useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, EyeIcon, EyeOffIcon, Loader2, Music2 } from "lucide-react";
import { useScopedI18n } from "@/locales/client";
import Link from "next/link";
import { SoundcloudApiService } from "@/services/soundcloud-api.service";
import { useUserStore } from "@/stores/user.store";
import { Cookies } from "@/services/cookie.service";

export function TokenForm() {
  const scopedT = useScopedI18n("tokenForm");
  const setAuthenticated = useUserStore((state) => state.setAuthenticated);

  const [token, setToken] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const isValid: boolean = await SoundcloudApiService.checkToken(token);
    if (!isValid) {
      setError(scopedT("tokenInvalid"));
    }

    setAuthenticated(isValid);
    setIsLoading(false);
  };

  const setInitialToken = async () => {
    const token = (await Cookies.get("token")) || "";
    setToken(token);
    setIsLoading(false);
  };

  useEffect(() => {
    setInitialToken();
  }, []);

  return (
    <div className="mx-auto max-w-md">
      <div className="mb-8 text-center">
        <div className="mb-4 inline-block rounded-full bg-primary/10 p-3">
          <Music2 className="h-10 w-10 text-primary" />
        </div>
        <h2 className="mb-2 text-2xl font-bold">{scopedT("title")}</h2>
        <p className="text-gray-500 dark:text-gray-400">{scopedT("description")}</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="token-wrapper">
          <Label htmlFor="token" className="mb-1 block text-sm font-medium">
            {scopedT("label")}
          </Label>
          <div className="relative">
            <Input
              id="token"
              type={showPassword ? "text" : "password"}
              placeholder={scopedT("placeholder")}
              value={token}
              onChange={(e) => setToken(e.target.value)}
              required
              className="w-full rounded-md bg-white pr-10 shadow-sm focus:ring focus:ring-primary/50"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-primary"
            >
              {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {error && (
          <Alert variant="destructive" className="alert-error">
            <div className="flex items-center">
              <AlertCircle className="mr-2 h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </div>
          </Alert>
        )}
        <div className="form-wrapper">
          <Button
            type="submit"
            className="hover:bg-primary-dark w-full bg-primary text-white focus:ring focus:ring-primary/50 disabled:bg-gray-300"
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
        <Link href="/soundcloud-token-tutorial" className="text-sm text-primary underline">
          {scopedT("howToGetTokenLink")}
        </Link>
      </div>
    </div>
  );
}
