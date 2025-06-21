import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import SessionWrapper from "@/component/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "E commerce Website  ",
  description:
    "This is the e-commerce website where you learn many things that is how to payment system, next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionWrapper>
          <Navbar />
          <div className="min-h-[78.4vh] bg-[#232335]">
          {children}
          </div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
