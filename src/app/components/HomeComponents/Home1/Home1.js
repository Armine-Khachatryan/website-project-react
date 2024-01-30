import React from "react";
import Image2 from '../../../assets/images/Image2.png';
import classes from './Home1.module.css';
import Header from "../../Header/Header";
import {useNavigate} from "react-router-dom";



function Home1(){

    const navigate=useNavigate();


    return(
        <div className={classes.whole}>
            <div className={classes.main}>
                <Header/>
                <div className={classes.middle}>
                    <div className={classes.middleLeft}>
                        <div className={classes.swiperDiv}><img  className={classes.imgSwiper} src={Image2}/></div>
                        <button className={classes.btnStyle} onClick={()=>navigate('/donate-now')}>
                            Donate Now
                        </button>
                    </div>
                    <div className={classes.middleRight}>
                        <div className={classes.middlePart1}>
                            Help us wipe out medical bills for just a few cents.
                            The collective power of us working
                            together is unstoppable.
                        </div>
                        <div className={classes.middlePart}>
                            <div className={classes.middlePart2}>
                                For every $100 given, up to $10,000 in medical bills go away.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.below}>
                    <div className={classes.belowWhole}>
                        <div className={classes.text}>Together, let’s reset  </div>
                        <div className={classes.text}>everyone to Clean SlateZ!</div>
                    </div>
                    <div className={classes.belowRight}>
                        <div className={classes.belowTitle}>Help us heal patients
                            financially</div>
                        <div className={classes.belowText}> Your donation will help alleviate medical financial debt
                            for everyday people who could use the help the most.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home1;