"use client";
import { Inter } from "next/font/google";
import "./globals.css";

import ThemeProvider from "./ThemeProvider";

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
        <body className={"custom-scrollbar mx-auto p-4 min-w-[320px] max-w-7xl w-full min-h-screen bg-[#E9E9E9] text-[#222222] dark:bg-[#222222] dark:text-[#E9E9E9] transition-all duration-500 " + inter.className}>
          {children}
        </body>
      </ThemeProvider>
    </html>
  )
}
