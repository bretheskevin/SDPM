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

export const createActions = (t: unknown): DashboardAction[] => [
  {
    key: "subtract",
    title: t("subtract.title"),
    description: t("subtract.description"),
    buttonText: t("subtract.buttonText"),
    buttonIcon: <Minus className={iconClasses} />,
    modalMethod: () => openModal(t("subtract.modal.title"), t("subtract.modal.description"), <Subtract />),
  },
];
