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
const About = ({
    isVisible,
    achievements
}) => {
  return (
    // <div>
        <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <div className="grid">
          <div className="animated-card card-light">
            <div className="icon-header">
              <Briefcase size={36} />
              <h3 className="card-title">Professional Summary..</h3>
            </div>
            <p className="text-gray">
            Frontend Developer with 3.7 years of experience in building dynamic, responsive, and high-performance web applications using ReactJS and JavaScript. Skilled in developing scalable user interfaces, optimizing performance, and ensuring seamless user experiences. Strong collaborator with a focus on clean code practices, maintainability, and continuous learning in modern frontend frameworks and tools.
            </p>
          </div>

          <div className="animated-card card-dark">
            <div className="icon-header">
              <GraduationCap size={36} />
              <h3 className="card-title">Education</h3>
            </div>
            <h4 className="card-subtitle">B.E. Mechanical Engineering</h4>
            <p className="text-gray">Mahalakshmi Engineering College</p>
            <p className="text-muted">08/2014 – 05/2018 | Trichy</p>
          </div>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h3 className="section-title" style={{ fontSize: '2rem' }}>Key Achievements</h3>
          <div className="grid">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div 
                  key={index} 
                  className={`animated-card ${index % 2 === 0 ? 'card-light' : 'card-dark'}`}
                >
                  <Icon className="contact-icon" size={48} />
                  <h4 className="card-subtitle">{achievement.title}</h4>
                  <p className="text-muted">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    // </div>
  );
};

export default About;
