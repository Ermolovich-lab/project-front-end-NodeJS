import React from 'react'
import classes from './orientation-toggler.module.css';
 
import DeviceOrientation, { Orientation } from 'react-screen-orientation'

const OrientationToggler = ({children, ...props}) => {
    return(
        <DeviceOrientation lockOrientation={'landscape'}>
                <Orientation orientation='landscape' alwaysRender={false}>
                    <div {...props} className={classes.orientationToggler}>
                        {children}
                    </div>
                </Orientation>
                <Orientation orientation='portrait'>

                </Orientation>
        </DeviceOrientation>
    )
}

export default OrientationToggler;