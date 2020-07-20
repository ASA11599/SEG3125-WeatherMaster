import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import ExploreComponent from './components/explore/ExploreComponent';
import AlertsComponent from './components/alerts/AlertsComponent';
import MyNavbar from './components/mynavbar/MyNavbar';
import HomeComponent from './components/home/HomeComponent';
import HelpComponent from './components/help/HelpComponent';
import SearchComponent from './components/search/SearchComponent';
import NotFoundPageComponent from './components/notfound/NotFoundPageComponent';

class App extends React.Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <MyNavbar></MyNavbar>
                    <Switch>
                        <Route path="/explore" exact component={ExploreComponent} />
                        <Route path="/alerts" exact component={AlertsComponent} />
                        <Route path="/help" exact component={HelpComponent} />
                        <Route path="/search" exact component={SearchComponent} />
                        <Route path="/" exact component={HomeComponent} />
                        <Route path="*" component={NotFoundPageComponent} />
                    </Switch>
                </div>
            </Router>
        );
    }

}

export default App;
