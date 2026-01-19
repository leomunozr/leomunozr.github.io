import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import { ThemeProvider, useTheme } from "./theme/ThemeProvider";
import { LanguageProvider } from "./language/LanguageProvider";
import { featureFlags } from "./config/featureFlags";
import HeroBackground from "./HeroBackground";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

// We extract the main content to a new component so it can access the theme context
const AppContent = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${theme.colors.background} ${theme.colors.textPrimary} min-h-screen ${theme.transition}`}
    >
            <HeroBackground />
      <Header />
      <main>
        <Hero />
        {featureFlags.enableSkills && <Skills />}
        {featureFlags.enableExperience && <Experience />}
        {featureFlags.enableProjects && <Projects />}
        {featureFlags.enableContact && <Contact />}
      </main>
      <Footer />
    </div>
  );
};
