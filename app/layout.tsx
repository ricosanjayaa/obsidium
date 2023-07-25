import Sidebar from "@/components/Sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-[#313030] custom-scrollbar min-w-[320px] w-full min-h-screen transition-all duration-500">
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
