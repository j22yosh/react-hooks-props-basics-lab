import React from "react";
import user from "../data/user";

function Links(props){
    return (
        <h3>Links
            <a href={props.links.github}>{props.links.github}</a>
            <a href={props.links.linkedin}>{props.links.linkedin}</a>
        </h3>
        

    )
}
export default Links;
