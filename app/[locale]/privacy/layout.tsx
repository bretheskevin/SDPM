import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SDPM | Privacy Policy",
  description:
    "Privacy policy for DJ Playlist Manager - We do not collect any personal data.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
