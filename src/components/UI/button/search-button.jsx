import React from "react";
import classes from './search-button.module.css';

const SearchButton = ({children, ...props}) => {
    return(
        <button {...props} className={classes.search_button}>
            {children}
        </button>
    )
}

export default SearchButton;