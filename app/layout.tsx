import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Students Against Surveillance | S.A.S.",
  description: "A youth-led organization challenging ALPRS and related surveillance technologies.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
