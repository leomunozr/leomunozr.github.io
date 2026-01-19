import { useTheme } from "./theme/ThemeProvider";
import { useLanguage } from "./language/LanguageProvider";

const Experience = () => {
    const { theme } = useTheme();
    const { t } = useLanguage();
    
    interface Job {
        company: string;
        title: string;
        dates: string;
        client?: string;
        details: string[];
    }

    const experienceData = t('experience.jobs') as unknown as Job[];

    return (
        <section id="experience" className={`py-20 ${theme.colors.sectionBgSecondary}`}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className={`text-3xl md:text-4xl font-bold ${theme.colors.textPrimary}`}>{t('experience.title')}</h2>
                </div>
                <div className="max-w-4xl mx-auto space-y-12">
                    {Array.isArray(experienceData) && experienceData.map((job: Job, index: number) => (
                        <div key={index} className={`border-l-4 ${theme.colors.timelineBorder} pl-8 relative`}>
                            <div className={`absolute w-4 h-4 rounded-full -left-[8px] top-0 ${theme.colors.accentBg}`}></div>
                            <div className="mb-2">
                                <h3 className={`text-2xl font-bold ${theme.colors.textPrimary}`}>{job.company}</h3>
                                <div className={`flex flex-col md:flex-row md:items-center justify-between ${theme.colors.textSecondary} mt-1`}>
                                    <h4 className="text-xl font-semibold">{job.title}</h4>
                                    <span className="italic">{job.dates}</span>
                                </div>
                                {job.client && <p className={`${theme.colors.textSecondary} text-sm mt-1`}>Client: {job.client}</p>}
                            </div>
                            <ul className={`list-disc list-inside mt-4 space-y-2 ${theme.colors.textSecondary}`}>
                                {job.details && job.details.map((detail: string, i: number) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
