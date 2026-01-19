import { useTheme } from "./theme/ThemeProvider";

const HeroBackground = () => {
    const { theme } = useTheme();
    const color = theme.name === 'dark' ? '#ffffff' : '#000000';
    const opacity = 0.07; 

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden min-h-screen">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="computer-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                        {/* Continuous Scrolling Animation */}
                        <animate attributeName="x" from="0" to="120" dur="30s" repeatCount="indefinite" />
                        <animate attributeName="y" from="0" to="120" dur="30s" repeatCount="indefinite" />

                        <g fill="none" stroke={color} strokeWidth="1.5" opacity={opacity}>
                            {/* Monitor */}
                            <g transform="translate(10, 10)">
                                <rect x="2" y="2" width="26" height="18" rx="2" />
                                <path d="M8 26h14 M15 20v6" />
                            </g>
                            
                            {/* Code Brackets */}
                            <g transform="translate(60, 15)">
                                <path d="M10 5l-8 8 8 8 M20 5l8 8-8 8 M14 25l6-20" />
                            </g>

                            {/* Microchip */}
                            <g transform="translate(15, 60)">
                                <rect x="4" y="4" width="22" height="22" rx="2" />
                                <path d="M4 10h-4 M4 15h-4 M4 20h-4 M26 10h4 M26 15h4 M26 20h4 M10 4v-4 M15 4v-4 M20 4v-4 M10 26v4 M15 26v4 M20 26v4" />
                            </g>

                            {/* Cloud / Server */}
                            <g transform="translate(70, 70)">
                                <path d="M4 16h22a6 6 0 0 0 0-12h-2a8 8 0 0 0-16 0h-2a6 6 0 0 0 0 12z" />
                                <path d="M10 20v6 M20 20v6 M4 26h22" />
                            </g>
                            
                             {/* Decorative Dots */}
                            <circle cx="50" cy="50" r="1" fill={color} stroke="none" />
                            <circle cx="100" cy="100" r="1" fill={color} stroke="none" />
                            <circle cx="110" cy="10" r="1" fill={color} stroke="none" />
                        </g>
                    </pattern>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#computer-pattern)" />
            </svg>
        </div>
    );
};

export default HeroBackground;
