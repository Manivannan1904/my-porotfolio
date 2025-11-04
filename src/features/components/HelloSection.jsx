import React from "react";
import Button from "../../components/Buttons";
import Mani from "../../assets/Images/mani.jpg"

const HelloSection = ({ isVisible, handleNavClick }) => {
  return (
    // <div>
      <section id="home" className="hero-section">
          <div className={`hero-content ${isVisible.home ? 'visible' : ''}`}>
            {/* <div className="avatar">MP</div> */}
         <img src={Mani}  className="avatar" alt="Manivannan" />

            <h1 className="title">Manivannan P</h1>
            <h2 className="subtitle">Frontend Developer</h2>
            <p className="description">
Frontend Developer with 3.7 years of experience in ReactJS and JavaScript, dedicated to creating responsive, scalable, and reliable web applications that deliver smooth user experiences.            </p>
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
