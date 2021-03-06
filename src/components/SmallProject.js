import Slideshow from "./Slideshow";
import LinkBar from "./LinkBar";
import "css/smallproject.css"
import {useState} from "react";
const SmallProject=(props)=>{
    const [displayDesc,setDisplayDesc]=useState(false)
    return(
        <div className="small-project raised-box" style={{backgroundColor:props.backgroundColor}}>

            <Slideshow res={props.res}>

                <div className={`sp-description col-flex-center ${!displayDesc?"hidden":""}`}><p className="text-medium">{props.description}</p></div>

            </Slideshow>

            <button className={"sp-menu"} onClick={()=>setDisplayDesc(!displayDesc)}><i className={"fa fa-bars"}></i></button>
            <button className={"sp-links"}><a  target={"_blank"} href={props.links[Object.keys(props.links)[0]]}><i className={"fa fa-link"}></i></a></button>
            <div className="sp-title">{props.title}</div>
            <div className="sp-stack">
                <span className="stack-head">Stack</span><span> : </span>
                {props.stack.map((item,index)=><span key={index}><span  className="stack-item"> {item}</span>{index!=props.stack.length-1?<span> | </span>:<></>}</span>)}

            </div>
        </div>
    )
}
export default SmallProject