import { useTheme } from "./theme/ThemeProvider";

const SocialIcon = ({ href, pathData }: { href: string, pathData: string }) => {
    const { theme } = useTheme();
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={`${theme.colors.icon} ${theme.colors.iconHover} ${theme.transition}`}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d={pathData} />
            </svg>
        </a>
    );
};

export default SocialIcon;
