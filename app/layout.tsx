import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Almasso Marketplace | Get Hooked on Quality",
  description:
    "Almasso Marketplace is a modern multi-vendor marketplace connecting customers with trusted sellers and quality products across Kenya.",
  keywords: [
    "Almasso",
    "Almasso Marketplace",
    "Kenya marketplace",
    "online shopping Kenya",
    "multi-vendor marketplace",
    "M-Pesa shopping",
  ],
  authors: [{ name: "Almasso Marketplace" }],
  openGraph: {
    title: "Almasso Marketplace",
    description: "GET HOOKED ON QUALITY",
    type: "website",
    siteName: "Almasso Marketplace",
    url: "https://www.almasso.com",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white antialiased">
        {children}
      </body>
    </html>
  );
}