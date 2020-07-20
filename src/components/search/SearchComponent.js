import React from 'react';

import './SearchComponent.css';

import weather from '../../data/weather.json';

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
                    res.push(city);
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
        return this.state.cities.filter( (city) => {
            return city.toLowerCase().includes( (q) ? (q.toLowerCase()) : ("") );
        } );
    };

    render() {
        return (
            <div className="search page" >
                <h1>Search results for "{this.getSearchQuery()}" </h1>
                <br></br>
                {
                    this.getSearchResults().map( (city) => {
                        return <p key={city} > {city} </p>
                    } )
                }
            </div>
        );
    }

}

export default SearchComponent;
