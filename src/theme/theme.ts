export const commonStyles = {
    transition: 'transition-colors duration-300',
};

// 60-30-10 Principle Implementation
// ---------------------------------
// Key Color (10%): #4a8fe7 (Cornflower Blue)
// Secondary (30%): #e2e8f0 (Slate-200) / #1e293b (Slate-800) -> Used for Cards, Sidebars, Highlights
// Dominant  (60%): #f8fafc (Slate-50)  / #020617 (Slate-950) -> Main Backgrounds

export const lightTheme = {
    ...commonStyles,
    name: 'light',
    colors: {
        background: 'bg-slate-50',     // 60%
        textPrimary: 'text-slate-900',
        textSecondary: 'text-slate-600',
        
        accent: 'text-[#4a8fe7]',      // 10%
        accentBg: 'bg-[#4a8fe7]',
        accentBgHover: 'hover:bg-[#357abd]',
        
        secondaryBg: 'bg-slate-200',   // 30% - New Distinct Secondary Key
        cardBg: 'bg-white',            // Elements on top of 60/30 often need to be white in light mode for contrast
        cardBgHover: 'bg-slate-200',
        
        sectionBgPrimary: 'bg-slate-50',    // 60%
        sectionBgSecondary: 'bg-slate-200', // 30% - Explicitly use the Secondary color for alternate sections
        
        headerBg: 'bg-slate-50/90',
        
        buttonPrimaryBg: 'bg-[#4a8fe7]', // Accent for Primary Actions
        buttonPrimaryBgHover: 'hover:bg-[#357abd]',
        buttonPrimaryText: 'text-white',
        
        buttonSecondaryBorder: 'border-slate-400',
        buttonSecondaryText: 'text-slate-700',
        buttonSecondaryBgHover: 'hover:bg-slate-200', // Hover matches secondary
        
        footerBorder: 'border-none',
        footerText: 'text-slate-600',
        
        icon: 'text-slate-500',
        iconHover: 'hover:text-[#4a8fe7]',
        
        timelineBorder: 'border-slate-300',
        
        // Skill Pill Specifics
        skillPillBg: 'bg-white', // White pills on Slate-200 background looks clean
        skillPillText: 'text-slate-800',
    }
};

export const darkTheme = {
    ...commonStyles,
    name: 'dark',
    colors: {
        background: 'bg-slate-950',    // 60%
        textPrimary: 'text-slate-50',
        textSecondary: 'text-slate-400',
        
        accent: 'text-[#4a8fe7]',      // 10%
        accentBg: 'bg-[#4a8fe7]',
        accentBgHover: 'hover:bg-[#357abd]',
        
        secondaryBg: 'bg-slate-800',   // 30% - New Distinct Secondary Key
        cardBg: 'bg-slate-900',        // Darker than secondary for depth
        cardBgHover: 'bg-slate-800',
        
        sectionBgPrimary: 'bg-slate-950',   // 60%
        sectionBgSecondary: 'bg-slate-800', // 30%
        
        headerBg: 'bg-slate-950/90',
        
        buttonPrimaryBg: 'bg-[#4a8fe7]',
        buttonPrimaryBgHover: 'hover:bg-[#357abd]',
        buttonPrimaryText: 'text-white',
        
        buttonSecondaryBorder: 'border-slate-600',
        buttonSecondaryText: 'text-slate-300',
        buttonSecondaryBgHover: 'hover:bg-slate-800',
        
        footerBorder: 'border-slate-800',
        footerText: 'text-slate-500',
        
        icon: 'text-slate-500',
        iconHover: 'hover:text-[#4a8fe7]',
        
        timelineBorder: 'border-slate-700',
        
        // Skill Pill Specifics
        skillPillBg: 'bg-slate-700',
        skillPillText: 'text-slate-200',
    }
};