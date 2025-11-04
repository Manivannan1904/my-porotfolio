import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Zap,
  Menu,
  X,
  Phone,
  MapPin,
  Download,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react";
const LinearLineChart = ({ isVisible, index, skill, Icon }) => {
  return (
    <div
      key={index}
      className={`bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-purple-500/20 transition-all duration-700 ${
        isVisible.skills
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-10"
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <Icon className="text-purple-400" size={24} />
          <span className="text-xl font-semibold">{skill.name}</span>
        </div>
        <span className="text-sm text-purple-300 font-semibold">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
          style={{
            width: isVisible.skills ? `${skill.level}%` : "0%",
          }}
        />
      </div>
      <p className="text-xs text-gray-400 mt-2">{skill.category}</p>
    </div>
  );
};

export default LinearLineChart;
