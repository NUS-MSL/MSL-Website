import React, { useEffect, useState } from "react";
import "../../../static/css/home/our-recent-events.css"; 

function OurRecentEvents() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('/api/recent-events')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setEvents(data);
            })
            .catch(error => {
                console.error("There was an error fetching the recent events!", error);
            });
    }, []);

    return (
        <section id="our-recent-events-section">
            <div className="our-recent-events-container">
                <h1>Our Recent Events</h1>
                {events.length > 0 ? (
                    events.map(event => (
                        <div key={event.id} className="event">
                            <h2>{event.event_title}</h2>
                            <p>{event.event_description}</p>
                            <p>{new Date(event.event_date).toLocaleDateString()}</p>
                            <img src={event.event_image} alt={event.event_title} />
                        </div>
                    ))
                ) : (
                    <p>No recent events available.</p>
                )}
            </div>
        </section>
    );
}

export default OurRecentEvents;
