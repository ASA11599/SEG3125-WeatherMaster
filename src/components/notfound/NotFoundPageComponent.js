import React from 'react';

import './NotFoundPageComponent.css';

import { Link } from 'react-router-dom';

class NotFoundPageComponent extends React.Component {

    render() {
        return (
            <div className="notfound page" >
                <h1>404 ERROR</h1>
                <br></br>
                <p>The page you are looking for does not exist. It may have been removed.</p>
                <p>You can go back to the <Link to="/" >Home page</Link> or try searching for a city.</p>
            </div>
        );
    }

}

export default NotFoundPageComponent;
