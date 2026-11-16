import { useEffect, useState } from "react";

function ThemeToggle() {
    const [isLightMode, setIsLightMode] = useState(
        () => typeof window !== "undefined" && window.localStorage.getItem("portfolio-theme") === "light"
    );

    useEffect(() => {
        const theme = isLightMode ? "light" : "dark";
        document.documentElement.dataset.theme = theme;
        window.localStorage.setItem("portfolio-theme", theme);
    }, [isLightMode]);

    return (
        <button
            className="theme-toggle"
            type="button"
            onClick={() => setIsLightMode((currentMode) => !currentMode)}
            aria-label={`Switch to ${isLightMode ? "dark" : "light"} mode`}
            aria-pressed={isLightMode}
            title={`Switch to ${isLightMode ? "dark" : "light"} mode`}
        >
            <i className={`fa-solid ${isLightMode ? "fa-moon" : "fa-sun"}`} aria-hidden="true"></i>
        </button>
    );
}

export default ThemeToggle;
