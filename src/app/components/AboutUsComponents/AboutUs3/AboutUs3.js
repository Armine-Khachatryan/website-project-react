import React from "react";
import Image8 from '../../../assets/images/Image8.png';
import classes from './AboutUs3.module.css';


function AboutUs3() {

    return (
        <div className={"container"}>
            <div className={classes.main}>
                <div className={classes.left}>
                    <div className={classes.title}>TEAM</div>
                    <div className={classes.text}>Our strength lies in our dedicated team—a collective of compassionate
                        individuals driven by a shared vision. Every member brings expertise, commitment, and a genuine
                        desire to change lives. Together, we aren't just relieving debt; we're restoring hope, dignity,
                        and dreams.
                    </div>
                </div>
                <div className={classes.imgDiv}>
                    <img className={classes.img} src={Image8} alt={""} />
                </div>
            </div>
        </div>
    )
}

export default AboutUs3;
