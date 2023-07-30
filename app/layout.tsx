"use client";
import { Inter } from "next/font/google";
import "./globals.css";

import ThemeProvider from "./ThemeProvider";
import NavigationBar from "@/components/NavigationBar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"]
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={"custom-scrollbar min-w-[320px] w-full min-h-screen bg-[#E9E9E9] dark:bg-[#222222] text-[#222222] dark:text-[#E9E9E9] transition-all duration-500 " + inter.className}>
          <NavigationBar />
          <div className="mx-auto px-4 max-w-5xl">
            {children}
          </div>
        </body>
      </ThemeProvider>
    </html>
  )
}
