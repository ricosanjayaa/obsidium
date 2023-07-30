"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "@phosphor-icons/react";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (!theme) setTheme("dark");
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }

  return (
    theme === "light" ? (
      <div className="w-8 h-8 bg-[#222222] bg-opacity-10 flex items-center justify-center rounded-md cursor-pointer active:translate-y-0.5 transition-all duration-500" onClick={toggleTheme}>
        <Moon size={18} weight="fill" className="text-[#222222]" />
      </div>
    ) : (
      <div className="w-8 h-8 bg-[#E9E9E9] bg-opacity-10 flex items-center justify-center rounded-md cursor-pointer active:translate-y-0.5 transition-all duration-500" onClick={toggleTheme}>
        <Sun size={18} weight="fill" className="text-[#E9E9E9]" />
      </div>
    )
  )
}