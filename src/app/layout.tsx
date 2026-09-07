import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FixNet - Connecting Technicians and Clients Across Rwanda",
  description: "FixNet is Rwanda's trusted platform connecting verified skilled technicians with clients seeking on-demand maintenance, repairs, and installations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
