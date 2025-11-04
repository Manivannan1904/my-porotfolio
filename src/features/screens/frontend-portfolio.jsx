import React, { useState, useEffect } from "react";
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
import {
  navItems,
  experiences,
  skills,
} from "../../utils/constants";
import HelloSection from "../components/HelloSection";
import Headers from "../../components/layouts/Headers";
import About from "../components/About";
import WorkExperiance from "../components/WorkExperiance";
import Skills from "../components/Skills";
import Connect from "../components/Connect";
import Bottom from "../../components/layouts/Bottom";
const achievements = [
  {
    title: "Unit Testing Excellence",
    description: "Achieved 90% code coverage through effective unit testing",
    icon: Award,
  },
  {
    title: "Performance Improvement",
    description: "Reduced load times by 25% through performance optimizations",
    icon: Zap,
  },
  {
    title: "Certificate of Appreciation",
    description: "Outstanding project delivery at Perpetuuiti Technosoft",
    icon: Award,
  },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <Headers
        handleNavClick={handleNavClick}
        navItems={navItems}
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
        activeSection={activeSection}
      />

      {/* Hero Section */}
      <HelloSection isVisible={isVisible} handleNavClick={handleNavClick} />

      {/* About Section */}
      <About isVisible={isVisible} achievements={achievements}  />

      {/* Experience Section */}
      <WorkExperiance isVisible={isVisible} experiences={experiences} />

      {/* Skills Section */}
      <Skills isVisible={isVisible} />

      {/* Contact Section */}
      <Connect isVisible={isVisible} />

      {/* Bottom */}
      <Bottom />

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
