import React from "react";
import landingImage from "../../../static/images/home/Home-Page-Landing-Image.png";
import landingImageOverlay from "../../../static/images/home/Home-Page-Landing-Image-Overlay.png";
import "../../../static/css/home/home-page-landing.css"; 

function HomePageLanding() {
    return (
        <section className="home-page-landing-section">
             <h1 className="landing-title">NUS MSL</h1>
            <img src={landingImageOverlay} alt="Home Page Landing Overlay" className="home-page-landing-overlay" />
            <img src={landingImage} alt="Home Page Landing" className="home-page-landing-image" />
        </section>
    );
}

export default HomePageLanding;
