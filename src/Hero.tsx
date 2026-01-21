import SocialIcon from "./SocialIcon";
import { useTheme } from "./theme/ThemeProvider";
import { useLanguage } from "./language/LanguageProvider";

const Hero = () => {
    const { theme } = useTheme();
    const { t } = useLanguage();
    const socialLinks = [
        { href: 'https://github.com/leomunozr', pathData: 'M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z' },
        { href: 'https://linkedin.com/in/leomunozr', pathData: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
    ];
    return (
        <section id="home" className={`flex items-center relative overflow-hidden`}>
            <div className="container mx-auto px-8 py-5 md:py-10 relative z-10 flex flex-col md:flex-row-reverse items-start justify-center md:gap-8">

                <div className="mb-6 flex w-full lg:w-auto justify-center md:justify-end lg:justify-start">
                    <img
                        src="assets/me.jpg"
                        alt="Leonardo Muñoz Profile"
                        className="w-25 md:w-40 h-25 md:h-40 rounded-full shadow-lg object-cover"
                    />
                </div>
                <div className="max-w-3xl text-left md:mb-8">

                    <h1 className={`text-3xl md:text-4xl text-center md:text-start font-bold ${theme.colors.textPrimary} leading-tight mb-2`}>
                        {t('hero.greeting')} <span className={theme.colors.accent}>Leo Muñoz</span>.
                    </h1>

                    <div className={`text-md mb-4 md:text-lg ${theme.colors.textSecondary} md:max-w-2xl space-y-4 leading-relaxed`}>
                        <p>{t('hero.about')}</p>
                    </div>
                    <div className="flex space-x-4 items-center justify-center md:justify-start">
                        {socialLinks.map((link, index) => <SocialIcon key={index} href={link.href} pathData={link.pathData} />)}
                        <a href="mailto:leo@leomunoz.dev" className={`${theme.colors.accentBg} text-white px-4 py-2 rounded-full text-sm font-semibold ${theme.colors.accentBgHover} ${theme.transition} shadow-lg inline-block`}>
                            {t('hero.cta')}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
