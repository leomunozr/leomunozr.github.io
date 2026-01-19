import { useTheme } from "./theme/ThemeProvider";
import { useLanguage } from "./language/LanguageProvider";

const Skills = () => {
    const { theme } = useTheme();
    const { t } = useLanguage();

    const skillCategories = [
        { title: t('skills.categories.languages'), skills: ['TypeScript', 'JavaScript (ES6+)', 'Node.js', 'Python', 'HTML5', 'CSS3/SASS', 'SQL'] },
        { title: t('skills.categories.frameworks'), skills: ['React', 'Redux', 'Next.js', 'Express', 'Jest', 'Mocha/Chai', 'Enzyme', 'Angular'] },
        { title: t('skills.categories.databases'), skills: ['PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs', 'Firebase'] },
        { title: t('skills.categories.tools'), skills: ['Google Cloud Platform', 'Docker', 'Kubernetes', 'GitHub Actions', 'Grafana', 'Git', 'Webpack', 'Scrum/Kanban'] },
    ];
    return (
        <section id="skills" className={`py-20 ${theme.colors.sectionBgPrimary}`}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className={`text-3xl md:text-4xl font-bold ${theme.colors.textPrimary}`}>{t('skills.title')}</h2>
                </div>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                    {skillCategories.map(category => (
                        <div key={category.title} className={`${theme.colors.cardBg} p-6 backdrop-opacity-100 rounded-xl shadow-md border ${theme.colors.timelineBorder}`}>
                            <h3 className={`text-xl font-bold ${theme.colors.accent} mb-4 border-b ${theme.colors.timelineBorder} pb-2`}>{category.title}</h3>
                            <ul className="flex flex-wrap gap-2 justify-center">
                                {category.skills.map(skill => (
                                    <li key={skill} className={`${theme.colors.skillPillBg} ${theme.colors.skillPillText} px-3 py-1 rounded-full text-sm font-medium ${theme.transition} transform cursor-default shadow-sm`}>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;