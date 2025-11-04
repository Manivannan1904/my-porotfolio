import React from "react";

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

const WorkExperiance = ({
    isVisible,
    experiences,
}) => {
  return (
    <div>
         <section id="experience" className="section">
        <h2 className="section-title">Work Experience</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem', color: '#064e3b' }}>
                  {exp.role}
                </h3>
                <p style={{ fontSize: '1.25rem', color: '#059669', fontWeight: 600 }}>
                  {exp.company}
                </p>
                <div style={{ color: '#047857', marginTop: '0.5rem' }}>
                  <p>{exp.period}</p>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPin size={16} />
                    {exp.location}
                  </p>
                </div>
              </div>
              <ul className="achievement-list">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="achievement-item">
                    <span className="achievement-bullet">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default WorkExperiance;
