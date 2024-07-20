import React from "react";
import "../../../static/css/home/home-page-landing.css"; 
import "../../../static/css/main.css"; 
import landingImage from "../../../static/images/home/Home-Page-Landing-Image.png";
import landingImageOverlay from "../../../static/images/home/Home-Page-Landing-Image-Overlay.png";
import FadeInRight from "../../animations/FadeInRight";


function HomePageLanding() {
    
    FadeInRight(); 

    return (
        <section id="home-page-landing-section">
             <h1 className="landing-title hidden">NUS MSL</h1>
            <img src={landingImageOverlay} alt="Home Page Landing Overlay" className="home-page-landing-overlay" />
            <img src={landingImage} alt="Home Page Landing" className="home-page-landing-image" />
        </section>
    );
}

export default HomePageLanding;
