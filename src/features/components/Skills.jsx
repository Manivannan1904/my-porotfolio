import React from "react";

import LinearLineChart from "../../components/LinearLineChart";
import {
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
const skills = [
  { name: "React.js", level: 95, icon: Code, category: "Framework" },
  { name: "JavaScript (ES6+)", level: 90, icon: Zap, category: "Language" },
  { name: "TypeScript", level: 70, icon: Code, category: "Language" },
  {
    name: "Redux / Redux Toolkit",
    level: 85,
    icon: Zap,
    category: "State Management",
  },
  { name: "HTML5 / CSS3", level: 95, icon: Palette, category: "Core" },
  {
    name: "Material UI / Bootstrap",
    level: 88,
    icon: Palette,
    category: "UI Library",
  },
  {
    name: "Jest / React Testing Library",
    level: 90,
    icon: Code,
    category: "Testing",
  },
  { name: "Git / GitLab", level: 85, icon: Code, category: "Version Control" },
  { name: "REST API / GraphQL", level: 88, icon: Zap, category: "API" },
  { name: "AWS / Postman", level: 60, icon: Code, category: "Tools" },
];
const Skills = ({isVisible}) => {
  return (
    <div>
    <section id="skills" className="section">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="grid">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <div className="skill-name">
                    <Icon size={24} />
                    <span style={{ fontSize: '1.125rem', fontWeight: 600 }}>{skill.name}</span>
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{ width: isVisible.skills ? `${skill.level}%` : '0%' }}
                  />
                </div>
                <p className="skill-category">{skill.category}</p>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: '4rem' }}>
          <h3 className="section-title" style={{ fontSize: '2rem' }}>Certifications</h3>
          <div className="grid">
            <div className="animated-card card-light">
              <Award className="contact-icon" size={32} />
              <h4 className="card-subtitle">Professional Certification in Python</h4>
              <p className="text-muted">Using PyCharm IDE</p>
            </div>
            <div className="animated-card card-dark">
              <Award className="contact-icon" size={32} />
              <h4 className="card-subtitle">Certificate of Appreciation</h4>
              <p className="text-muted">Outstanding project delivery at Perpetuuiti Technosoft</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
