import { openModal } from "@/hooks/use-modal";
import { Minus } from "lucide-react";
import { Subtract } from "@dashboard/actions/subtract/Subtract";

const iconClasses = "mr-2 h-4 w-4";

export interface DashboardAction {
  key: string;
  title: string;
  description: string;
  buttonIcon: React.ReactNode;
  buttonText: string;
  modalMethod: () => void;
}

export const actions: DashboardAction[] = [
  {
    key: "subtract",
    title: "Subtract Playlists",
    description: "Create a new playlist by subtracting tracks from other playlists.",
    buttonText: "Create Playlist",
    buttonIcon: <Minus className={iconClasses} />,
    modalMethod: () =>
      openModal(
        "Subtract Playlists",
        "Create a new playlist by subtracting tracks from other playlists.",
        <Subtract />
      ),
  },
];
