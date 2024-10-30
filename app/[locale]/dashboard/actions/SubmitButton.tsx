import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useScopedI18n } from "@/locales/client";

interface SubmitButtonProps {
  isLoading: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ isLoading }) => {
  const scopedT = useScopedI18n("dashboard.actions.global.form.button");

  return (
    <Button type="submit" className="w-full" disabled={isLoading}>
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {scopedT("createPlaylistLoading")}
        </>
      ) : (
        scopedT("createPlaylist")
      )}
    </Button>
  );
};
