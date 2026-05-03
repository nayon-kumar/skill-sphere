import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import "animate.css";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import ScrollProgressBar from "@/components/Motion/ScrollProgressBar";
import Provider from "@/lib/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SkillSphere",
  description: "Online Learning Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      data-scroll-behavior="smooth"
      data-theme="light"
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning>
        <Provider>
          <ScrollProgressBar />
          <Navbar />
          {children}
          <Footer />
          <ToastContainer />
        </Provider>
      </body>
    </html>
  );
}
