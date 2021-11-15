import React from 'react';

import Slideshow from "./Slideshow";

import "../css/large_project.css"
import LinkBar from "./LinkBar";

const LargeProject = (props) => (
    <div className="large-project" id={props.sidebarName+"-project"} style={{backgroundColor:props.backgroundColor}}>
        <h1 className="title text-mid-heading">{props.title}</h1>

        <div className="media-container row-flex-center">
            <Slideshow res={props.res} className="slideshow-large-project"/>
            <LinkBar/>
        </div>
        {/*Anchor point to display sidebar name */}
        <div className={props.sidebarName}/>

        <div className="tech-stack">
            <span className="stack-head">Technology Stack</span><span> : </span>
            {props.stack.map((item,index)=><span key={index}><span  className="stack-item"> {item}</span><span> | </span></span>)}
        </div>
        <div className="description-box ">
            <p>{props.description}</p>
        </div>
    </div>
);
export default LargeProject;