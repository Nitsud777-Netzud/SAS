import type { Metadata } from "next";
import { Micro_5, Rubik_Spray_Paint } from "next/font/google";
import "./globals.css";

const micro5 = Micro_5({
  variable: "--font-micro-5",
  subsets: ["latin"],
  weight: "400",
});

const rubikSprayPaint = Rubik_Spray_Paint({
  variable: "--font-rubik-spray-paint",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Students Against Surveillance | S.A.S.",
  description: "A youth-led organization challenging ALPRS and related surveillance technologies.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${micro5.variable} ${rubikSprayPaint.variable}`}>
      <body>{children}</body>
    </html>
  );
}
