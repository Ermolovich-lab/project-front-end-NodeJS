import React from "react";
import classes from './search-engine.module.css';

const Searching = ({children, ...props}) => {
    return(
        <input {...props} placeholder={children} className={classes.searching}/>
    )
}

export default Searching;