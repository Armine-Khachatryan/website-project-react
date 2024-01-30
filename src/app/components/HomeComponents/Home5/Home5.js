import React from "react";
import Image4 from '../../../assets/images/Image4.png';
import classes from './Home5.module.css';
import {useNavigate} from "react-router-dom";


function Home5(){

    const navigate=useNavigate();


    return(
        <div className={classes.whole}>
            <div className={"container"}>
                <div className={classes.main}>
                    <div className={classes.left}>
                        <div className={classes.blueTitle}>Is there a way to tackle this mammoth issue?</div>
                        <div className={classes.title}>Absolutely!</div>
                        <div className={classes.subTitle}>With our team’s diverse experience in healthcare billing and
                            medical collections, we understand the ins and outs of the problem. More importantly, we've
                            crafted solutions that truly address it.</div>
                        <div className={classes.text}>Click
                            <span className={classes.here} onClick={()=>navigate('/programs')}>here</span>  to learn about
                            our programs that help individuals and families recover financially from medical debt.
                        </div>
                        <div className={classes.text}>Your small gift can have a big impact on medical bills. We can do
                            this! Help us on the journey today with a donation, and together let’s reset everyone to
                            Clean SlateZ.</div>
                        <button className={classes.donateBtn} onClick={()=>navigate('/donate-now')}
                        >Donate Now
                        </button>
                    </div>
                    <div className={classes.right}>
                        <img src={Image4} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home5;