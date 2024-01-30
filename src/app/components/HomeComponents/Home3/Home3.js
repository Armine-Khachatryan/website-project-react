import React from "react";
import Image22 from '../../../assets/images/Image22.png';
import classes from './Home3.module.css';


function Home3(){


    return(
        <div className={classes.whole}>
            <div className={"container"}>
                <div className={classes.main}>
                    <div className={classes.left}>
                        <div className={classes.leftTitle}>Tens of Millions in Deep Debt</div>
                        <div className={classes.leftText}>Americans owe more than $190 Billion in medical debt! The average
                            household balance is $4,600 in unpaid medical bills.</div>
                        <div className={classes.leftText}>Medical debt is an all too familiar tale. A simple ER
                            visit can amount to several thousand dollars out of pocket even if you have insurance coverage.
                            Need a major surgery, a long hospital stay, or have a chronic disease? You're talking serious
                            money that most people cannot afford to pay.</div>
                    </div>
                    <div className={classes.right}>
                        <img src={Image22} alt={""}/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home3;