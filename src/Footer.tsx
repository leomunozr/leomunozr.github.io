import { useTheme } from "./theme/ThemeProvider";
import { useLanguage } from "./language/LanguageProvider";

const Footer = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  return (
    <footer
      className={`${theme.colors.background} ${theme.colors.footerBorder}`}
    >
      <div className="container mx-auto px-6 py-8 text-center">
        <p className={`${theme.colors.footerText} text-sm`}>
          {t('footer.text')} &copy; {new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;