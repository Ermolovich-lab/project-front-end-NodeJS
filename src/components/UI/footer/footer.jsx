import React from "react";
import classes from './footer.module.css';

const MyFooter = ({children, ...props}) => {
    return(
        <footer {...props} className={classes.myfooter}>
            {children}
        </footer>
    )
}

export default MyFooter;