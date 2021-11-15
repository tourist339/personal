import React from 'react';
import {Helmet} from "react-helmet";

const Restaurants = (props) => (
    <>
        <Helmet>
            <title>{props.title}</title>
        </Helmet>
        <h3>Restaurants</h3>
    </>);

export default Restaurants;