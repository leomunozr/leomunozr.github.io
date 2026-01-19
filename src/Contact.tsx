import { useTheme } from "./theme/ThemeProvider";
import { useLanguage } from "./language/LanguageProvider";

const Contact = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  return (
    <section id="contact" className={`py-20 ${theme.colors.sectionBgPrimary}`}>
      <div className="container mx-auto px-6 text-center">
        <h2
          className={`text-3xl md:text-4xl font-bold ${theme.colors.textPrimary}`}
        >
          {t('contact.title')}
        </h2>
        <p
          className={`${theme.colors.textSecondary} mt-2 mb-8 max-w-xl mx-auto`}
        >
          {t('contact.text')}
        </p>
        <a
          href="mailto:leo@leomunoz.dev"
          className={`${theme.colors.accentBg} text-white px-8 py-3 rounded-full text-lg font-semibold ${theme.colors.accentBgHover} ${theme.transition} shadow-lg inline-block`}
        >
          {t('contact.cta')}
        </a>
      </div>
    </section>
  );
};

export default Contact;
