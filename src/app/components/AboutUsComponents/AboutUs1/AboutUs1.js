import React from "react";
import Image2 from '../../../assets/images/Image2.png';
import Header from "../../Header/Header";
import classes from './AboutUs1.module.css';
import {useNavigate} from "react-router-dom";


function AboutUs1(){

    const navigate=useNavigate();


    return(
        <div className={classes.whole}>
            <div className={classes.main}>
                <Header/>
                <div className={classes.middle}>
                    <div className={classes.middleLeft}>
                        <div className={classes.swiperDiv}><img  className="imgSwiper" src={Image2}/></div>
                        <button className={classes.btnStyle} onClick={()=>navigate('/donate-now')}>
                            Donate Now
                        </button>
                    </div>
                    <div className={classes.middleInside}>
                        <div className={classes.middlePartTitle}>Mission Statement</div>
                        <div className={classes.middlePartSubTitle}>To offer financial relief to those struggling with
                            medical debt.</div>
                    </div>
                    <div/>
                </div>
                        <div className={classes.below}>
                            <div className={classes.belowWhole}>
                                <div className={classes.text}>Together, let’s reset  </div>
                                <div className={classes.text}>everyone to Clean SlateZ!</div>
                            </div>
                        </div>
            </div>
        </div>
    )
}

export default AboutUs1;