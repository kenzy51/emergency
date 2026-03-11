import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emergency Dentist Tribeca | Same-Day Urgent Dental Care NYC", 
  description: "In pain? Tribeca Dental Studio offers masterfully delivered emergency dental care. Same-day appointments for toothaches, broken teeth, and urgent relief.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#FAF9F6]`}
      >
 
        {children}
      </body>
    </html>
  );
}