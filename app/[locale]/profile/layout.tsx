import { Metadata } from "next";
import ProtectedRoute from "@/helpers/ProtectedRoute";

export const metadata: Metadata = {
  title: "SDPM | Profile",
  description: "Your soundcloud profile.",
};

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
