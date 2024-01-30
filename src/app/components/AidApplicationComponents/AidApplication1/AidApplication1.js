import React from "react";
import Header from "../../Header/Header";
import classes from './AidApplication1.module.css';


function AidApplication1(){


    return(
        <div className={classes.whole}>
            <div className={classes.main}>
                <Header/>
                    <div className={classes.middle}>
                        <div className={classes.title}> We are currently preparing our Application. We expect to have
                            this completed and available within the next 30-days. Please check back to apply for
                            assistance, or send an email to us and we will notify you when you the application is live.
                            Our email is: applicants@cleanslatez.org
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default AidApplication1;