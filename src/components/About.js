import React from 'react';
import {Helmet} from "react-helmet";
const About = (props) => (
    <>
        <Helmet>
            <title>{props.title}</title>
        </Helmet>
    <h3>About</h3>
    </>
);

export default About;