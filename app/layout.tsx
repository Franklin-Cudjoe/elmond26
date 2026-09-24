import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    (process.env.NETLIFY === "true" && process.env.URL) ||
      "https://richmond-elizabeth-wedding-invitation.young-fig-4040.chatgpt.site",
  ),
  title: "Richmond & Elizabeth Wedding Invitation",
  description:
    "Traditional marriage ceremony invitation for Richmond and Elizabeth on 16th October, 2026 at Mim Catholic Church.",
  openGraph: {
    title: "Richmond & Elizabeth Wedding Invitation",
    description:
      "Traditional marriage ceremony invitation for Richmond and Elizabeth on 16th October, 2026 at Mim Catholic Church.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/invitation/richmond-elizabeth-photo-16-october-2026.png",
        width: 1047,
        height: 1502,
        alt: "Richmond and Elizabeth save-the-date portrait, 16th October 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Richmond & Elizabeth Wedding Invitation",
    description:
      "Traditional marriage ceremony invitation for Richmond and Elizabeth on 16th October, 2026 at Mim Catholic Church.",
    images: ["/invitation/richmond-elizabeth-photo-16-october-2026.png"],
  },
  icons: {
    icon: "/invitation/direction-16-october-2026.png",
    shortcut: "/invitation/direction-16-october-2026.png",
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
