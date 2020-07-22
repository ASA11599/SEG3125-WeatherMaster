import React from 'react';

import './CityInfoComponent.css';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

class CityInfoComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            language: "en",
            city: props["city"],
            cityData: props["cityData"]
        };
    }

    setLanguage = (lang) => {
        this.setState({language: lang});
    };

    toDateFR = (dt) => {
        const a = dt.split("/");
        const m = a[0];
        const d = a[1];
        a[0] = d;
        a[1] = m;
        return a.join("/");
    };

    render() {
        return (
            <div>
                <h2> { this.state.city } </h2>
                <select onChange={(e) => {this.setLanguage(e.target.value)}} name={(this.state.language === "en") ? ("Language") : ("Langue")} >
                    <option value="en" >English</option>
                    <option value="fr" >Fran&ccedil;ais</option>
                </select>
                <br></br>
                <br></br>
                <p>
                    {
                        (this.state.language === "en") ? ((new Date()).toLocaleDateString()) : (this.toDateFR((new Date()).toLocaleDateString()))
                    }
                </p>
                <p>
                    {
                        (this.state.language === "en") ? (<strong> {((this.state.cityData["temperature"]) * 9/5 + 32)} &#8457;</strong>) : (<strong> {this.state.cityData["temperature"]} &#8451;</strong>)
                    }
                </p>
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            {
                                (this.state.language === "en") ? ("Additional info") : ("Autres informations")
                            }
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <p> { this.state.cityData["additionalInfo"]["humidity"] }% { (this.state.language === "en") ? ("humidity") : ("humidité") } </p>
                                <p> { (this.state.language === "en") ? (this.state.cityData["additionalInfo"]["description"]) : ("Ensoleillé") } </p>
                                <p> { this.state.cityData["additionalInfo"]["pressure"] } mb</p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        );
    }

}

export default CityInfoComponent;
