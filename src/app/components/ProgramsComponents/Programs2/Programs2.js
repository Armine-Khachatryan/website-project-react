import React from "react";
import Image19 from '../../../assets/images/Image19.png';
import classes from './Programs2.module.css';



function Programs2(){


    return(
        <div className={"container"}>
            <div className={classes.main}>
                <div className={classes.left}>
                    <img className={classes.imgStyle} src={Image19} alt={""}/>
                </div>
                <div className={classes.right}>
                    <div className={classes.title}>Application Program</div>
                    <div className={classes.subTitle}>This program gives us the best opportunity to provide individuals
                        a true clean slate as they provide all their past due medical related debt regardless of how
                        many providers or collection agencies that debt may be owed to.
                    </div>
                    <div className={classes.title}>Application Process:</div>
                    <div className={classes.row}>
                        <div className={classes.rowLeft}/>
                        <div className={classes.rowRight}>Individuals apply via our website.</div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.rowLeft}/>
                        <div className={classes.rowRight}>We validate the individual meets the eligibility criteria.
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.rowLeft}/>
                        <div className={classes.rowRight}>We negotiate on behalf of the applicant for settlement with
                            the provider or collection agency.
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.rowLeft}/>
                        <div className={classes.rowRight}>We send payment directly to the provider or collection
                            agency to pay off the account.
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.rowLeft}/>
                        <div className={classes.rowRight}>Applicants are notified of their relieved debt.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programs2;