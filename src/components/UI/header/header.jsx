import React from "react";
import classes from './header.module.css';
import logo from './img/logo.png';

const MyHeader = ({children, ...props}) => {
    return(
        <header {...props} className={classes.myheader}>
            <div className={classes.img_logo}>
                <img src={logo} alt={logo}/>
            </div>  
			<div className={classes.text_logo}>
                <h1>
                    {children}
                </h1>
            </div>
        </header>
    )
}

export default MyHeader;