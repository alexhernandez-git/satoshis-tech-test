import React, { useEffect, useState } from "react";

const useDarkTheme = () => {
  const [isDarkLoading, setIsDarkLoading] = useState<boolean>(true);
  const [isDark, setIsDark] = useState<boolean>(false);
  useEffect(() => {
    if (localStorage.theme === "dark") {
      setIsDark(true);
    }
    setIsDarkLoading(false);
  }, []);
  const handleToggleIsDark = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };
  return { isDark, isDarkLoading, handleToggleIsDark };
};

export default useDarkTheme;
