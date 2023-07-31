import ThemeToggler from "./ThemeToggler";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <div className="w-full text-[#222222] dark:text-[#E9E9E9] transition-all">
      <div className="p-6 mx-auto max-w-6xl flex flex-row justify-between items-center">
        <Link href="/">
          <div className="flex flex-row items-baseline">
            <p className="text-2xl font-medium">@ricosnjy</p>
            <p className="text-sm opacity-75">/obsidium</p>
          </div>
        </Link>
        <ThemeToggler />
      </div>
    </div>
  )
}