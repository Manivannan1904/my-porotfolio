import React from "react";
import { Download, Menu, X } from "lucide-react";
import CV from '../../components/layouts/Manivannan_CV.pdf';


const Headers = ({
  handleNavClick,
  navItems,
  setMobileMenuOpen,
  mobileMenuOpen,
  activeSection,
  isVisible, // 👈 make sure this prop is passed from parent
}) => {
  return (
    <div>
      {/* Navigation */}
       <nav className="nav">
        <div className="nav-container">
          <div className="logo" onClick={(e) => handleNavClick(e, 'home')}>
            Manivannan P
          </div>
          
          <div className="nav-menu">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={(e) => handleNavClick(e, item)}
                className={`nav-button ${activeSection === item ? 'active' : ''}`}
              >
                {item}
              </button>
            ))}
        
               <a
      href={CV}
     download="Manivannan_CV.pdf"
       className="download-btn"
    >
              <Download size={18} />
              CV
            </a>
          </div>

          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={(e) => handleNavClick(e, item)}
                className="nav-button"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

    </div>
  );
};

export default Headers;
