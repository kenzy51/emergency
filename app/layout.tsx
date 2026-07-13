// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { brandonGrotesque, dDin } from "./fonts"; 
import Script from "next/script"; // <-- Import the Next.js Script component
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
  description:
    "In pain? Tribeca Dental Studio offers masterfully delivered emergency dental care. Same-day appointments for toothaches, broken teeth, and urgent relief.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${brandonGrotesque.variable} ${dDin.variable} antialiased min-h-screen bg-[#FAF9F6]`}
      >
        {/* OpenAI Pixel Sitewide Setup */}
        <Script id="openai-pixel" strategy="afterInteractive">
          {`
            !function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");
            oaiq("init",{pixelId:"HL7gj3zuWxa8wLMp37yZk8",debug:true});
          `}
        </Script>

        {children}
        
        {/* Existing Leadpipe script updated to Next.js Script component for optimization */}
        <Script 
          src="https://leadpipe.aws53.cloud/p/5f31228a-e65b-439a-b768-8eaac93d6341.js" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}