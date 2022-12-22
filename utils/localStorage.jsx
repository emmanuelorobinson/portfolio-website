export const getLocalTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }
  return "light";
}

export const setLocalTheme = (theme) => {
  if (typeof window !== "undefined" && window.localStorage) {
    window.localStorage.setItem("theme", theme);
  }
}
