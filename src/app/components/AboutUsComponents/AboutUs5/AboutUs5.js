import React from "react";
import Image12 from '../../../assets/images/Image12.png';
import classes from './AboutUs5.module.css';
import Button from "../../../ui/Button/Button";
import {useNavigate} from "react-router-dom";


function AboutUs5(){
    const navigate=useNavigate();

    return(
        <div className={classes.whole}>
            <div className={"container"}>
                <div className={classes.main}>
                    <div className={classes.left}>
                        <div className={classes.blueTitle}>Contact US</div>
                        <div className={classes.blueSubTitle}>Got questions or thinking about partnering with our
                            mission? Clean SlateZ is here for you!</div>
                        <div className={classes.blueText}>Whether you're seeking assistance, looking to contribute, or
                            just want to learn more about our impactful work, our dedicated team is ready to assist.
                        </div>
                        <div className={classes.blueText}>Every inquiry matters to us, as every step brings us closer
                            to wiping out medical debt for many. Don't hesitate; your opportunity for a fresh start or
                            to make a transformative contribution is just a few clicks away.</div>
                        <div className={classes.btnDiv}>
                            <Button OnClick={()=>navigate('/donate-now')}>Donate Now</Button>
                        </div>

                        <div className={classes.blueTitle}>Connect with us, and together, let's reshape
                            futures and offer renewed hope.</div>
                        <div className={classes.mailRow}>info@cleanslatez.org</div>
                    </div>
                    <div className={classes.imgDiv}>
                        <img src={Image12} alt={""}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs5;