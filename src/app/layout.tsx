import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creative Vision — Tailwind Training Page",
  description: "Landing page demo for practicing Tailwind CSS utilities in Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-[#0b0f0d] text-gray-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}