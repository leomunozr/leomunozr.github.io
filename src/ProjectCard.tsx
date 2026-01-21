import { useTheme } from "./theme/ThemeProvider";

const ProjectCard = ({
  title,
  description,
  tech,
}: {
  title: string;
  description: string;
  tech: string;
}) => {
  const { theme } = useTheme();

  const techStack = tech.split(',').map(t => t.trim());

  return (
    <div
      className={`${theme.colors.cardBg} hover:${theme.colors.cardBgHover} rounded-xl overflow-hidden transition-all duration-300 flex flex-col h-full group border backdrop-opacity-100 ${theme.colors.timelineBorder}`}
    >
      <div className="p-3 flex flex-col flex-grow">
        <div className="flex-grow">
            <h3 className={`text-md font-bold ${theme.colors.textPrimary} mb-1 group-hover:${theme.colors.accent} transition-colors`}>
            {title}
            </h3>
            <p className={`${theme.colors.textSecondary} text-xs leading-relaxed mb-4`}>{description}</p>
        </div>
        
        <div className="flex flex-wrap gap-1">
            {techStack.map((item, index) => (
                <span key={index} className={`text-xs font-medium px-2 py-0.5 rounded-full ${theme.colors.skillPillBg} ${theme.colors.skillPillText} border ${theme.colors.timelineBorder}`}>
                    {item}
                </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;