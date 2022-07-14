/**
 * @Author: Your name
 * @Date:   2022-07-14 06:32:45
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-07-14 07:50:16
 */
import React from "react";

const Like = (props) => {
        let classes = "fa fa-heart";
        if(!props.liked) classes += "-o"
        return (
        <i className={classes} 
            aria-hidden="true" 
            onClick={props.onClick}
            style={{cursor: "pointer"}}
        />
    );
}
 
export default Like;