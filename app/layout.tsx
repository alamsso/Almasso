import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "ALMASSO MARKETPLACE - Get Hooked on Quality | Kenya's #1 Online Shopping",
  description: "Almasso Marketplace - Get Hooked on Quality. Shop quality products from trusted sellers on Almasso Marketplace across Kenya, Somalia and Africa. Fast delivery on Almasso Marketplace.",
  keywords: "Almasso Marketplace, Almasso, marketplace Kenya, online shopping Kenya, Almasso Marketplace Kenya",
  openGraph: {
    title: "ALMASSO MARKETPLACE - Get Hooked on Quality",
    description: "Welcome to Almasso Marketplace - Kenya's #1 Online Shopping Destination",
    siteName: "ALMASSO MARKETPLACE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ALMASSO MARKETPLACE",
    description: "Almasso Marketplace - Get Hooked on Quality",
  }
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}