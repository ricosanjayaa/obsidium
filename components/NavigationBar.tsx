import ThemeToggler from "./ThemeToggler";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <div className="w-full text-[#222222] dark:text-[#E9E9E9] transition-all">
      <div className="p-6 mx-auto max-w-6xl flex flex-row justify-between items-center">
        <Link href="/">
          <img src="favicon.ico" className="w-8 brightness-75 hover:brightness-100 dark:brightness-50 dark:hover:brightness-100 invert dark:invert-0 transition-all duration-500" />
        </Link>
        <ThemeToggler />
      </div>
    </div>
  )
}