import React, {useEffect, useRef, useState} from 'react';
import LargeProject from "./LargeProject";
import "../css/slideshow.css"
import YouTube from "react-youtube";
const Slideshow = (props) => {




    return(
        <div className="slideshow">

            <Slides>

                {props.res.map((content,index)=>(
                    <div className="each-slide" key={index}>
                        {content.type=="video"?
                        <YouTube videoId={content.url}/>
                            :
                            <div style={{backgroundImage:`url(imgs/${content.url})`}}></div>
                        }
                    </div>
                ))
                }

            </Slides>

            {props.children !== undefined && props.children?
                React.Children.map(props.children,(child)=>React.cloneElement(child))
                :<></>}

        </div>

    )
}

const Slides=(props)=>{
    const [currentIndex,setCurrentIndex]=useState(0)
    const [prevIndex,setPrevIndex]=useState(props.children.length-1)
    const [nextIndex,setNextIndex]=useState(1)

    const [allowed,setAllowed]=useState(true)

    const [goNext,setGoNext]=useState(false)
    const [goPrev,setGoPrev]=useState(false)



    const changeIndex=(index,increase)=>{
        if(increase){
        return (index==props.children.length-1?0:index+1)
            }else{
            return (index==0?props.children.length-1:index-1)
        }
    }
    const changeSlide=(increase)=>{
        if(allowed) {
            setAllowed(false);
            if (increase) {
                setGoNext(true)
                setGoPrev(false)
            }
            else {
                setGoPrev(true)
                setGoNext(false)
            }
            setCurrentIndex(changeIndex(currentIndex, increase))
            setPrevIndex(changeIndex(prevIndex, increase))
            setNextIndex(changeIndex(nextIndex, increase))
            setTimeout(() => {
                setAllowed(true);
            }, 1000)
        }
    }



    return(<>{
        // props.children.map((element,index)=>React.cloneElement(element,{ref:getRef(index,currentIndex,prevIndex,nextIndex)}))
        props.children.map((element,index)=>React.cloneElement(element,{key:index,index:index,className:`each-slide ${goPrev&&index==prevIndex?'no-transition':''} ${goNext&&index==nextIndex?'no-transition':''}`,style:{left:`${currentIndex==index?"0":nextIndex==index?"100%":prevIndex==index?"-100%":"200%"}`}}))

    }
        <button className={"slideshow-prev-btn"} onClick={()=>changeSlide(true)}><i className="fa fa-angle-right" ></i></button>
        <button  className={"slideshow-next-btn"} onClick={()=>changeSlide(false)}><i className="fa fa-angle-left" ></i></button>
    </>)
}
export default Slideshow;