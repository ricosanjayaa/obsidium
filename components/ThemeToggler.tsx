"use client";
import { useTheme } from "next-themes";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (!theme) setTheme("dark");
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }

  return (
    <div>
      <p>{theme}</p>
      <button onClick={toggleTheme}>click</button>
    </div>
  )
}