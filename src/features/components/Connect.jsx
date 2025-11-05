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
const GIT = process.env.REACT_APP_GIT;
const LINKEDIN = process.env.REACT_APP_LINKEDIN;

const Connect = ({
    isVisible,
}) => {
  return (
    <div>
       <section id="contact" className="section" style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="section-title">Let's Connect</h2>
            <div className="card">
              <p style={{ fontSize: '1.25rem', textAlign: 'center', color: '#d1d5db', marginBottom: '2rem' }}>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="grid" style={{ marginBottom: '2rem' }}>
                <a href="mailto:manivannanp0619@gmail.com" className="contact-card">
                  <Mail className="contact-icon" size={32} />
                  <h4 className="contact-title">Email</h4>
                  <p className="contact-text">manivannanp0619@gmail.com</p>
                </a>
                
                <a href="tel:+916374371082" className="contact-card">
                  <Phone className="contact-icon" size={32} />
                  <h4 className="contact-title">Phone</h4>
                  <p className="contact-text">+91 63743 71082</p>
                </a>
                
                <div className="contact-card" style={{ cursor: 'default' }}>
                  <MapPin className="contact-icon" size={32} />
                  <h4 className="contact-title">Location</h4>
                  <p className="contact-text">Chennai, India</p>
                </div>
              </div>

              <div className="social-links">
           
                <a
  href="https://github.com/Manivannan1904"
  target="_blank"
  rel="noopener noreferrer"
  className="social-link"
>
  <div className="social-icon">
    <Github size={32} />
  </div>
  <span style={{ fontSize: '0.875rem' }}>GitHub</span>
</a>
               <a
  href="https://linkedin.com/in/Manivannan19"
  target="_blank"
  rel="noopener noreferrer"
  className="social-link"
>
  <div className="social-icon">
    <Linkedin size={32} />
  </div>
  <span style={{ fontSize: '0.875rem' }}>LinkedIn</span>
</a>
              </div>
            </div>
          </div>
        </section>

    </div>
  );
};

export default Connect;
