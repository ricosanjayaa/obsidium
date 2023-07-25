import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={"custom-scrollbar mx-auto p-4 min-w-[320px] max-w-7xl w-full min-h-screen bg-[#E9E9E9] text-[#222222] transition-all duration-500 " + inter.className}>
        {children}
      </body>
    </html>
  )
}
