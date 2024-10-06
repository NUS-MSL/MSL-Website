import React from "react";
import HomePageLanding from "../components/home/HomePageLanding"
import WhoAreWe from "../components/home/WhoAreWe"
import OurRecentEvents from "../components/home/OurRecentEvents"

function HomePage() {
    return (
        <section>
            <HomePageLanding />
            <WhoAreWe />
            <OurRecentEvents />
        </section>
    );
}
    
export default HomePage;