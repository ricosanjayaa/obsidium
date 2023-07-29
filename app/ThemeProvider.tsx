import React, { useState, useEffect } from "react";
import { ThemeProvider as Provider } from "next-themes";

export default function ThemeProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <Provider attribute="class">
      {children}
    </Provider>
  )
}