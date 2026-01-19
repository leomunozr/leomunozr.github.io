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
      className={`${theme.colors.cardBg} hover:${theme.colors.cardBgHover} rounded-xl overflow-hidden shadow-md transition-all duration-300 flex flex-col h-full group border backdrop-opacity-100 ${theme.colors.timelineBorder}`}
    >
      {/* <div className="relative overflow-hidden h-36"> 
        <img 
            src={imgSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      </div> */}

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
            <h3 className={`text-lg font-bold ${theme.colors.textPrimary} mb-2 group-hover:${theme.colors.accent} transition-colors`}>
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