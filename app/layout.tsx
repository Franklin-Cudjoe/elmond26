import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://nana-akua-wedding-invitation.young-fig-4040.chatgpt.site",
  ),
  title: "Nana & Akua Wedding Invitation",
  description:
    "Traditional marriage ceremony invitation for Nana and Akua on 29th August, 2026 in Buoho - Sasa.",
  openGraph: {
    title: "Nana & Akua Wedding Invitation",
    description:
      "Traditional marriage ceremony invitation for Nana and Akua on 29th August, 2026 in Buoho - Sasa.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Nana & Akua Wedding Invitation",
    description:
      "Traditional marriage ceremony invitation for Nana and Akua on 29th August, 2026 in Buoho - Sasa.",
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
