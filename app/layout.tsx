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
    images: [
      {
        url: "/invitation/page-1.jpg",
        width: 1500,
        height: 2100,
        alt: "Nana and Akua save the date, 29th August 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nana & Akua Wedding Invitation",
    description:
      "Traditional marriage ceremony invitation for Nana and Akua on 29th August, 2026 in Buoho - Sasa.",
    images: ["/invitation/page-1.jpg"],
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
