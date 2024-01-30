import React from "react";
import Image6 from '../../../assets/images/Image6.png';
import Image7 from '../../../assets/images/Image7.png'
import classes from './AboutUs2.module.css';


function AboutUs2() {


    return (
        <div className={"container"}>
            <div className={classes.main}>
                <div className={classes.left}>
                    <img className={classes.img} src={Image6} alt={""}/>
                </div>
                <div className={classes.right}>
                    <div className={classes.title}>about us</div>
                    <div className={classes.text}>At Clean SlateZ, we believe in the power of a fresh start. We've seen
                        the harsh realities that countless Americans face due to the weight of medical debt—dreams
                        shattered, futures uncertain, and the ever-looming fear of a financial pitfall. It's not just
                        about the money owed; it's about the immense stress, strain on families, and the dimming light
                        of hope.</div>
                    <div className={classes.text}>Born out of a profound understanding of these challenges, Clean
                        SlateZ emerged as a beacon of hope. Our purpose is rooted in compassion, understanding, and a
                        drive to make a tangible difference. We are devoted to improving the financial well-being of
                        economically disadvantaged individuals. Through the strategic use of donations, we aim to give
                        every individual an opportunity to begin anew, free from the shackles of medical debt.</div>
                    <div className={classes.text}>Our dedicated team, with their vast experience and passion, works
                        tirelessly to turn our vision into a reality. From negotiating with providers to validating
                        each application, our team ensures that the process is seamless, giving beneficiaries the clean
                        slate they truly deserve.</div>
                </div>
            </div>
            <div className={classes.below}>
                <div className={classes.left}>
                    <img className={classes.imageStyle} src={Image7} alt={""}/>
                </div>
                <div className={classes.right}>
                    <div className={classes.titleBelow}>Our Purpose</div>
                    <div className={classes.textBelow}>“To revolutionize financial well-being by eliminating medical
                        debt burdens. Through strategic use of donations, Clean SlateZ strives to provide financial
                        relief and alleviate the burden of medical debt for those in need, offering
                        economically disadvantaged individuals a fresh start. We firmly believe that
                        healthcare should empower lives, not limit them." </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs2;