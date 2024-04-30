import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Desenvolvedor Fullstack - Michel Lopes.",
  description: "Portfolio desenvolvido por Michel Lopes.",
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
