import React from 'react';
const LinkBar = ({links}) => (
    <div className="linkbar col-flex">
        {Object.keys(links).map(link_type=>{
            if(link_type=="github"){
                return <a href={links[link_type]} target={"_blank"}><i className="fa fa-github"></i></a>
            }else if(link_type=="info"){
               return <a href={links[link_type]} target={"_blank"}><i className="fa fa-info"></i></a>

            }
        })}
    </div>
);

export default LinkBar;