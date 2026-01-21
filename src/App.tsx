import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import { SkillsList } from "./Skills";
import { useTheme } from "./theme/ThemeProvider";
import { featureFlags } from "./config/featureFlags";
import HeroBackground from "./HeroBackground";

const App = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${theme.colors.background} ${theme.colors.textPrimary} min-h-screen ${theme.transition}`}
    >
      <HeroBackground />
      <Header />
      <main>
        <Hero />
        <div className={`container mx-auto px-8 lg:px-20 xl:px-50 py-5 md:py-12`}>
          <div className="flex flex-col md:flex-row gap-12">

            <div className="md:w-3/4">
              {featureFlags.enableProjects && <Projects />}
            </div>

            <div className="md:w-1/4">
              {featureFlags.enableExperience && <Experience />}
            </div>
          </div>
        </div>

        {featureFlags.enableSkills && <SkillsList />}
        {featureFlags.enableContact && <Contact />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
