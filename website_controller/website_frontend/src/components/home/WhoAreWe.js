import React from "react";
import whoAreWeImage from "../../../static/images/home/Home-Page-Who-Are-We.png";
import "../../../static/css/home/who-are-we.css"; 
import FadeInRight from "../../animations/FadeInRight";

function WhoAreWe() {
    FadeInRight(); 

    return (
        <section id="who-are-we-section">
            <div className="who-are-we-container fade-in-right-hidden">
                <img src={whoAreWeImage} alt="whoAreWeImage" className="who-are-we-image" />
                <div className="who-are-we-word-content">
                    <h1>Who Are We ?</h1>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                   
                    <a href="/about" ><button className="learn-more-btn">Learn More</button></a>
                </div>
            </div>     
        </section>
    );
}

export default WhoAreWe;
