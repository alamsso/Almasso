import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALMASSO MARKETPLACE - Get Hooked on Quality | Kenya's #1 Online Shopping",
  description: "Almasso Marketplace - Get Hooked on Quality. Shop quality products on Almasso Marketplace across Kenya.",
  openGraph: {
    title: "ALMASSO MARKETPLACE - Get Hooked on Quality",
    description: "Welcome to Almasso Marketplace - Kenya's #1 Online Shopping Destination",
    siteName: "ALMASSO MARKETPLACE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}