import React from "react";
import Image17 from '../../../assets/images/Image17.png';
import classes from './Donate4.module.css';

function Donate4(){


    return(
        <div className={classes.whole}>
            <div className={"container"}>
                <div className={classes.main}>
                    <div className={classes.left}>
                        <div className={classes.subTitle}>We Need Your Help</div>
                        <div className={classes.text}>Together, with your support, we can change narratives, transform
                            lives, and stand up against the crippling weight of medical debt.
                        </div>
                        <div className={classes.text}>Stand with Clean SlateZ. Stand with Sarah, Jim, and countless
                            others. Donate today, and be the beacon of hope in someone's darkest hour.</div>
                        </div>
                    <div className={classes.right}>
                        <img className={classes.imgStyle} src={Image17} alt={""}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donate4;