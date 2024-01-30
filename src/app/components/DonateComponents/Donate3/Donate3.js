import React from "react";
import Image16 from '../../../assets/images/Image16.png';
import classes from './Donate3.module.css';


function Donate3(){


    return(
        <div className={"container"}>
            <div className={classes.main}>
                <div className={classes.left}>
                    <div className={classes.subTitle}>Creating Hope for Thousands</div>
                    <div className={classes.text}>That's where Clean SlateZ steps in, with two transformative programs
                        dedicated to alleviating the burden of medical debt. Our initiatives focus on helping
                        individuals like Sarah and Jim, providing debt relief so they can concentrate on what’s really
                        important.
                    </div>
                    <div className={classes.text}>The heart of our programs is a shared foundation: the unparalleled
                        generosity of donors like you. Your donation isn't just about numbers on a bill; it's about
                        reigniting hope, rebuilding futures, and rekindling dreams.
                    </div>
                    <div className={classes.text}>Your contribution helps us erase these debts—with zero tax
                        implications for the recipient. It's a pure act of kindness, ensuring that every recipient can
                        start anew, free from the shadows of mounting bills.
                    </div>
                </div>
                <div className={classes.right}>
                    <img className={classes.imgStyle} src={Image16} alt={""}/>
                </div>
            </div>
        </div>
    )
}

export default Donate3;