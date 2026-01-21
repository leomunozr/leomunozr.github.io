import ProjectCard from "./ProjectCard";
import { useTheme } from "./theme/ThemeProvider";
import { useLanguage } from "./language/LanguageProvider";

interface Project {
    title: string;
    description: string;
    tech: string;
    imgSrc: string;
    liveUrl: string;
    codeUrl: string;
}

const Projects = () => {
    const { theme } = useTheme();
    const { t } = useLanguage();
    const projectData = t('projects.items') as unknown as Project[];

    return (
        <section id="projects">
            <div className="mb-8">
                <h2 className={`text-2xl font-bold ${theme.colors.textPrimary}`}>{t('projects.title')}</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 max-w-xs">
                {Array.isArray(projectData) && projectData.map((project: Project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
