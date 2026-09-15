import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://nana-akua-wedding-invitation.young-fig-4040.chatgpt.site",
  ),
  title: "Richmond & Elizabeth Save The Date",
  description: "Save the date for Richmond and Elizabeth on 17 / 10 / 26 at Mim Catholic Church.",
  openGraph: {
    title: "Richmond & Elizabeth Save The Date",
    description: "Save the date for Richmond and Elizabeth on 17 / 10 / 26 at Mim Catholic Church.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Richmond & Elizabeth Save The Date",
    description: "Save the date for Richmond and Elizabeth on 17 / 10 / 26 at Mim Catholic Church.",
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
