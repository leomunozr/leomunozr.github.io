import ProjectCard from "./ProjectCard";
import { useTheme } from "./theme/ThemeProvider";
import { useLanguage } from "./language/LanguageProvider";


const Projects = () => {
    const { theme } = useTheme();
    const { t } = useLanguage();

    interface Project {
        title: string;
        description: string;
        tech: string;
        imgSrc: string;
        liveUrl: string;
        codeUrl: string;
    }
    
    // We assume t('projects.items') returns the array from the translations object.
    // In a stricter TS setup we might need a better type for the t function return.
    const projectData = t('projects.items') as unknown as Project[]; 

    return (
        <section id="projects" className={`py-20 ${theme.colors.sectionBgPrimary}`}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className={`text-3xl md:text-4xl font-bold ${theme.colors.textPrimary}`}>{t('projects.title')}</h2>
                    <p className={`${theme.colors.textSecondary} mt-2`}>{t('projects.subtitle')}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Array.isArray(projectData) && projectData.map((project: Project) => <ProjectCard key={project.title} {...project} />)}
                </div>
            </div>
        </section>
    );
};

export default Projects;