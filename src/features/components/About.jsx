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
             I’m a front-end developer who enjoys building clean, responsive, and high-performing web applications. I focus on component-driven development and API integration to create seamless, user-friendly experiences. Working in Agile teams, I collaborate closely with designers and developers to turn ideas into efficient, practical solutions that look great and perform even better.
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
