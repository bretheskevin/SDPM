import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface SubtractSubmitButtonProps {
  isLoading: boolean;
}

export const SubtractSubmitButton: React.FC<SubtractSubmitButtonProps> = ({ isLoading }) => (
  <Button type="submit" className="w-full" disabled={isLoading}>
    {isLoading ? (
      <>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Creating...
      </>
    ) : (
      "Create Playlist"
    )}
  </Button>
);
