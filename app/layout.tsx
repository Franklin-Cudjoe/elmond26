import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://nana-akua-wedding-invitation.young-fig-4040.chatgpt.site",
  ),
  title: "Nana & Akua Wedding Invitation",
  description:
    "Wedding invitation, timeline, details, directions, and RSVP for Nana and Akua.",
  openGraph: {
    title: "Nana & Akua Wedding Invitation",
    description:
      "Wedding invitation, timeline, details, directions, and RSVP for Nana and Akua.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Nana & Akua Wedding Invitation",
    description:
      "Wedding invitation, timeline, details, directions, and RSVP for Nana and Akua.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
