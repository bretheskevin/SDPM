export interface ContactLink {
  type: string;
  label: string;
  link: string;
  value?: string;
}

export const contactLinks: ContactLink[] = [
  {
    type: "instagram",
    link: "https://instagram.com/kevin_brts",
    label: "Instagram",
  },
  {
    type: "discord",
    link: "",
    label: "Discord",
    value: "hikudo",
  },
  {
    type: "github",
    link: "https://github.com/bretheskevin",
    label: "GitHub",
  },
  {
    type: "linkedin",
    link: "https://linkedin.com/in/bretheskevin",
    label: "LinkedIn",
  },
] as const;

export type ContactLinkType = (typeof contactLinks)[number]["type"];
