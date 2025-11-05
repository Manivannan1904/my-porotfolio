import React from "react";
import Button from "../../components/Buttons";
import Mani from "../../assets/Images/mani.jpg"

const HelloSection = ({ isVisible, handleNavClick }) => {
  return (
    // <div>
      <section id="home" className="hero-section">
        <div className={`hero-content ${isVisible.home ? 'visible' : ''}`}>
<div className="avatar-wrapper">
  <div className="avatar">
    <img src={Mani} alt="Avatar" />
  </div>
</div>

          <h1 className="title">Manivannan P</h1>
          <h2 className="subtitle">UI / Frontend Developer</h2>
          <p className="description">
            UI/Front-End Developer with over 3.7 years of experience in crafting scalable and high-performance web applications using ReactJS and modern JavaScript. Specializing in component-driven development and API integration.
          </p>
          <div className="button-group">
            <button 
              className="primary-btn"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Get In Touch
            </button>
            <button 
              className="secondary-btn"
              onClick={(e) => handleNavClick(e, 'experience')}
            >
              View Experience
            </button>
          </div>
        </div>
      </section>

    // </div>
  );
};

export default HelloSection;
