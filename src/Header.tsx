import { useState } from "react";
import { useTheme } from "./theme/ThemeProvider";
import { useLanguage } from "./language/LanguageProvider";
import { featureFlags } from "./config/featureFlags";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { t, toggleLanguage } = useLanguage();

    const allNavLinks = [
        { href: '#skills', label: t('nav.skills'), emoji: '💡', enabled: featureFlags.enableSkills },
        { href: '#projects', label: t('nav.projects'), emoji: '🚀', enabled: featureFlags.enableProjects },
        { href: '#experience', label: t('nav.experience'), emoji: '💼', enabled: featureFlags.enableExperience },
        { href: '#contact', label: t('nav.contact'), emoji: '📬', enabled: featureFlags.enableContact },
    ];

    const navLinks = allNavLinks.filter(link => link.enabled);

    return (
        <header className={`${theme.colors.headerBg} backdrop-blur-md  md:bg-transparent md:backdrop-opacity-0 sticky top-0 z-50`}>
            <nav className="container mx-auto px-6 py-3 flex md:justify-between items-center">
                <div></div>
                <div className={`${theme.colors.headerBg} ${theme.colors.buttonSecondaryBorder} hidden md:flex backdrop-blur-md py-2 md:px-10 space-x-6 items-center rounded-full border-1`}>
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} className={`flex items-center space-x-1 ${theme.colors.textSecondary} ${theme.colors.iconHover} ${theme.transition} group`}>
                            <span className="group-hover:scale-110 transition-transform">{link.emoji}</span>
                            <span>{link.label}</span>
                        </a>
                    ))}
                </div>
                <div className="hidden md:flex align-center gap-4 ">
                    <button onClick={toggleTheme} className={`${theme.colors.headerBg} hover:${theme.colors.cardBgHover} ${theme.colors.buttonSecondaryBorder} backdrop-blur-md p-2 rounded-full ${theme.colors.textSecondary} ${theme.transition} border-1`}>
                        {theme.name === 'dark' ? '☀️' : '🌙'}
                    </button>
                    <button onClick={toggleLanguage} className={`${theme.colors.headerBg} ${theme.colors.buttonSecondaryBorder} backdrop-blur-md p-2 rounded-full ${theme.colors.textSecondary} hover:${theme.colors.cardBgHover} ${theme.transition} border-1`} title="Translate">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path xmlns="http://www.w3.org/2000/svg" d="M20.58 19.37L17.59 11.01C17.38 10.46 16.91 10.12 16.37 10.12C15.83 10.12 15.37 10.46 15.14 11.03L12.16 19.37C12.02 19.76 12.22 20.19 12.61 20.33C13 20.47 13.43 20.27 13.57 19.88L14.19 18.15H18.54L19.16 19.88C19.27 20.19 19.56 20.38 19.87 20.38C19.95 20.38 20.04 20.37 20.12 20.34C20.51 20.2 20.71 19.77 20.57 19.38L20.58 19.37ZM14.74 16.64L16.38 12.05L18.02 16.64H14.74ZM12.19 7.85C9.92999 11.42 7.89 13.58 5.41 15.02C5.29 15.09 5.16 15.12 5.04 15.12C4.78 15.12 4.53 14.99 4.39 14.75C4.18 14.39 4.3 13.93 4.66 13.73C6.75999 12.51 8.48 10.76 10.41 7.86H4.12C3.71 7.86 3.37 7.52 3.37 7.11C3.37 6.7 3.71 6.36 4.12 6.36H7.87V4.38C7.87 3.97 8.21 3.63 8.62 3.63C9.02999 3.63 9.37 3.97 9.37 4.38V6.36H13.12C13.53 6.36 13.87 6.7 13.87 7.11C13.87 7.52 13.53 7.86 13.12 7.86H12.18L12.19 7.85ZM12.23 15.12C12.1 15.12 11.97 15.09 11.85 15.02C11.2 14.64 10.57 14.22 9.97999 13.78C9.64999 13.53 9.58 13.06 9.83 12.73C10.08 12.4 10.55 12.33 10.88 12.58C11.42 12.99 12.01 13.37 12.61 13.72C12.97 13.93 13.09 14.39 12.88 14.75C12.74 14.99 12.49 15.12 12.23 15.12Z" />
                        </svg>
                    </button>
                </div>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`md:hidden ${theme.colors.textPrimary}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </nav>
            <div className={`${isMenuOpen ? 'block' : 'hidden'} ${theme.colors.headerBg} backdrop-blur-md  md:hidden px-6 pb-4`}>
                {navLinks.map(link => (
                    <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className={`flex items-center space-x-2 py-2 ${theme.colors.textSecondary} ${theme.colors.iconHover}`}>
                        <span>{link.emoji}</span>
                        <span>{link.label}</span>
                    </a>
                ))}
                <button onClick={() => { toggleTheme(); setIsMenuOpen(false) }} className={`w-full mt-2 py-2 rounded-md ${theme.colors.textSecondary} hover:${theme.colors.buttonPrimaryBg} ${theme.transition}`}>
                    {theme.name === 'dark' ? 'Light' : 'Dark'} Mode
                </button>
                <button onClick={() => { toggleLanguage(); setIsMenuOpen(false); }} className={`w-full mt-2 py-2 rounded-md ${theme.colors.textSecondary} hover:${theme.colors.buttonPrimaryBg} ${theme.transition}`}>
                    {t('nav.language')}
                </button>
            </div>

        </header>
    );
};

export default Header;
