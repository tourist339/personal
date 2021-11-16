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

        <div className="tech-stack row-flex">
            <div className="row-flex">   <p className="stack-head">Technology Stack</p><p> : </p></div>
            {props.stack.map((item,index)=><div className="row-flex" key={index}><p  className="stack-item"> {item}</p>{index!=props.stack.length-1?<p> | </p>:<></>}</div>)}
        </div>
        <div className="description-box ">
            <p>{props.description}</p>
        </div>
    </div>
);
export default LargeProject;