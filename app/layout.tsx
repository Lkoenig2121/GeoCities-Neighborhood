import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GeoCities Neighborhood Builder",
  description:
    "Build chaotic 90s-style personal websites on pixel neighborhood maps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
