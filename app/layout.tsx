import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://richmond-elizabeth-wedding-invitation.young-fig-4040.chatgpt.site",
  ),
  title: "Richmond & Elizabeth Wedding Invitation",
  description:
    "Traditional marriage ceremony invitation for Richmond and Elizabeth on 17th October, 2026 at Mim Catholic Church.",
  openGraph: {
    title: "Richmond & Elizabeth Wedding Invitation",
    description:
      "Traditional marriage ceremony invitation for Richmond and Elizabeth on 17th October, 2026 at Mim Catholic Church.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/invitation/page-1-17-october-2026.png",
        width: 1060,
        height: 1484,
        alt: "Richmond and Elizabeth save the date, 17th October 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Richmond & Elizabeth Wedding Invitation",
    description:
      "Traditional marriage ceremony invitation for Richmond and Elizabeth on 17th October, 2026 at Mim Catholic Church.",
    images: ["/invitation/page-1-17-october-2026.png"],
  },
  icons: {
    icon: "/invitation/direction.png",
    shortcut: "/invitation/direction.png",
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
