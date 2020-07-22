import React from 'react';

import './ExploreComponent.css';

import weather from '../../data/weather.json';

import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ListGroup from 'react-bootstrap/ListGroup';

import CityInfoComponent from '../city/CityInfoComponent';

class ExploreComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            path: ["World"],
            currentView: weather
        };
    }

    onSelectLocation = (location) => {
        this.setState((prevState) => {
            const p = JSON.parse(JSON.stringify(prevState["path"]));
            p.push(location);
            const newView = prevState["currentView"][location];
            return {
                path: p,
                currentView: newView
            };
        });
    };

    goBack = () => {
        if (this.state.path.length > 1) {
            this.setState((prevState) => {
                const p = JSON.parse(JSON.stringify(prevState["path"]));
                p.pop()
                let newView = {"World": JSON.parse(JSON.stringify(weather))};
                for (let i in p) {
                    newView = newView[p[i]];
                }
                return {
                    path: p,
                    currentView: newView
                };
            });
        }
    };

    render() {
        return (
        <div className="my-component page">
            <Button style={{marginBottom: "1em"}} onClick={() => {this.goBack()}} >
                <i className="fas fa-arrow-circle-left"></i>
            </Button>
            <Breadcrumb>
                {
                    this.state.path.map( (e) => {
                        return <Breadcrumb.Item active key={e} > {e} </Breadcrumb.Item>
                    } )
                }
            </Breadcrumb>
            {
                (this.state.path.length < 4) ? (
                    <ListGroup>
                        {
                            Object.keys(this.state.currentView).map( (e) => {
                                return <ListGroup.Item key={e} action onClick={(e) => {this.onSelectLocation(e.target["innerText"])}} > {e} </ListGroup.Item>;
                            })
                        }
                    </ListGroup>
                ) : (
                    <CityInfoComponent city={this.state.path[this.state.path.length - 1]} cityData={this.state.currentView} ></CityInfoComponent>
                )
            }
        </div>
        );
    }

}

export default ExploreComponent;
