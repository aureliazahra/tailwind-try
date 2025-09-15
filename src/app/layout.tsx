import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Creative Vision, Digital Precision — Studio",
  description:
    "Landing + Showcase Tailwind practice (layout, grid, effects, transitions, responsive, variants, advanced utilities).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="dark">
      <body className={`${jakarta.variable} bg-slate-950 text-slate-100 antialiased`}>
        {/* Background global dengan gradasi halus */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-hero" />
        {/* Layer pattern grid halus */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-grid opacity-30" />
        <main className="relative min-h-screen">{children}</main>
      </body>
    </html>
  );
}