import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "MindraTech LLC · Celestia",
  description: "Founder-aligned operational AI backbone for modern companies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50 antialiased">
        <NavBar />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
