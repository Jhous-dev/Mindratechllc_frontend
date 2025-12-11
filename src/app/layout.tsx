import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MindraTech LLC — Celestia (Cici) Operational Intelligence",
  description:
    "MindraTech’s Celestia (Cici) is an enterprise-grade executive operations layer for founders: deterministic, auditable, and doctrine-driven.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50">
        <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950">
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
