import React from 'react';

import './SearchComponent.css';

import weather from '../../data/weather.json';
import CityInfoComponent from '../city/CityInfoComponent';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

class SearchComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cities: this.getCities()
        };
    }

    getCities = () => {
        const res = [];
        Object.keys(weather).forEach( (continent) => {
            Object.keys(weather[continent]).forEach( (country) => {
                Object.keys(weather[continent][country]).forEach( (city) => {
                    res.push({
                        continent: continent,
                        country: country,
                        city: city
                    });
                } );
            } );
        } );
        return res;
    }

    getSearchQuery = () => {
        return this.props["location"]["city"];
    };

    getSearchResults = () => {
        const q = this.getSearchQuery();
        return this.state.cities.filter( (cityObject) => {
            return cityObject["city"].toLowerCase().includes( (q) ? (q.toLowerCase()) : ("") );
        } );
    };

    render() {
        return (
            <div className="search page" >
                <h1>Search results for "{this.getSearchQuery()}" </h1>
                <br></br>
                <Accordion>
                    {
                        this.getSearchResults().map( (cityObject, index) => {
                            return (
                                <Card key={cityObject["city"]} >
                                    <Accordion.Toggle as={Card.Header} eventKey={index.toString()}>
                                        { cityObject["city"] }
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey={index.toString()}>
                                        <Card.Body>
                                            <CityInfoComponent key={cityObject["city"]} city={cityObject["city"]} cityData={weather[cityObject["continent"]][cityObject["country"]][cityObject["city"]]}></CityInfoComponent>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            )
                        } )
                    }
                </Accordion>
            </div>
        );
    }

}

export default SearchComponent;
