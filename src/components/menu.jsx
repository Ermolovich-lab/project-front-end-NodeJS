import React from "react";
import classes from './menu.module.css';
import {Link} from 'react-router-dom';

const MyMenu = ({items}) => {
    return(
        <nav className={classes.menu}>
            <ul>
                {items.map(item => 
                    <li>
                        <Link className="b" to={item.href} >{item.value}</Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default MyMenu;