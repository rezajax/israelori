import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { ComputerDesktopIcon } from "@heroicons/react/24/outline";
function SunIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </svg>
  );
}

function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  console.log("now: ", theme);

  const tripple = () => {
    theme === "dark" ? setTheme("light") : null;
    theme === "light" ? setTheme("system") : null;
    theme === "system" ? setTheme("dark") : null;
  };

  return (
    <>
      <button
        type="button"
        aria-label="Toggle dark mode"
        className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
        onClick={() => {
          theme === "dark" ? setTheme("light") : null;
          theme === "light" ? setTheme("system") : null;
          theme === "system" ? setTheme("dark") : null;
        }}
      >
        {theme === "dark" && (
          <>
            <MoonIcon className="h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:fill-zinc-800 dark:stroke-zinc-500 dark:group-hover:fill-zinc-900/20 dark:group-hover:stroke-zinc-400" />
            {/* <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:fill-amber-50 dark:stroke-amber-500 dark:group-hover:fill-amber-50 dark:group-hover:stroke-amber-600" /> */}
          </>
        )}
        {theme === "light" && (
          <>
            <SunIcon className="h-6 w-6 fill-zinc-100 stroke-amber-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:fill-amber-50 dark:stroke-amber-500 dark:group-hover:fill-amber-50 dark:group-hover:stroke-amber-600" />
            {/* <MoonIcon className="h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:fill-amber-400/10 dark:stroke-amber-500 dark:group-hover:stroke-zinc-400" /> */}
          </>
        )}
        {theme === "system" && (
          <ComputerDesktopIcon className="h-6 w-6 fill-zinc-100 stroke-amber-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:fill-zinc-800 dark:stroke-zinc-500 dark:group-hover:fill-zinc-900/20 dark:group-hover:stroke-zinc-400" />
        )}
      </button>
    </>
  );
};

export default ThemeSwitch;
