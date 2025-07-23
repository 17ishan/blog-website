import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { HyperText } from "@/components/ui/HyperText"
// import { MorphingText } from "@/components/ui/MorphingText";
;

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <header className="relative px-4 py-6">
      {/* Theme Toggle Icon - fixed at top right of screen */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 text-gray-700 dark:text-white hover:text-yellow-500 transition-all"
        aria-label="Toggle Theme"
      >
        {isDark ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      {/* Centered Heading */}
      <div className="text-center px-4">
        <h1 className="text-2xl sm:text-4xl font-semibold text-gray-800 dark:text-white leading-snug text-center flex justify-center">
          
          <HyperText className="w-fit ">✍️Create a Post</HyperText>
        </h1>
      </div>
    </header>
  );
};

export default Header;
