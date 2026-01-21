import { useTheme } from "./theme/ThemeProvider";
import { useLanguage } from "./language/LanguageProvider";

interface Job {
    company: string;
    title: string;
    dates: string;
    client?: string;
    details: string[];
}

const Experience = () => {
    const { theme } = useTheme();
    const { t } = useLanguage();
    const jobs = t('experience.jobs') as unknown as Job[];

    return (
        <section id="experience" className="space-y-6">
            <h3 className={`text-xl font-bold ${theme.colors.textPrimary} border-b ${theme.colors.footerBorder} pb-2 mb-4`}>
                {t('experience.title')}
            </h3>
            {Array.isArray(jobs) && jobs.map((job: Job, index: number) => (
                <div key={index} className="group">
                    <h4 className={`text-base font-bold ${theme.colors.textPrimary} group-hover:${theme.colors.accent} transition-colors`}>
                        {job.company}
                    </h4>
                    <p className={`text-sm ${theme.colors.textSecondary}`}>{job.title}</p>
                    <p className={`text-xs ${theme.colors.textSecondary} opacity-75`}>{job.dates}</p>
                </div>
            ))}
        </section>
    );
};

export default Experience;
