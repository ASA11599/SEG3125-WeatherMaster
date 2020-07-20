import React from 'react';

import './HomeComponent.css';

class HomeComponent extends React.Component {

    render() {
        return (
            <div className="home page" >
                <h1>Welcome to <i>WeatherMaster</i> !</h1>
                <br></br>
                <p><i>WeatherMaster</i> provides weather data for cities across all continents. The user can explore or search to find a city and get weather information on it. The user can also sign up for email notifications to be sent whenever there is a weather alert for certain locations</p>
            </div>
        );
    }

}

export default HomeComponent;
