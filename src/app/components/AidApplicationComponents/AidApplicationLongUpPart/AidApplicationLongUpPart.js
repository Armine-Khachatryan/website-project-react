import React from "react";
import Header from "../../Header/Header";
import classes from '../AidApplication1/AidApplication1.module.css';


function AidApplicationLongUpPart(){


    return(
        <div className={classes.whole}>
            <div className={classes.main}>
                <Header/>
                <div className={classes.middle}>
                    <div className={classes.title}>We are here to help!  No strings attached!  Apply today for medical
                        debt relief!</div>
                </div>
            </div>
        </div>
    )
}

export default AidApplicationLongUpPart;
