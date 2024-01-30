import React from "react";
import classes from './Donate1.module.css';
import Image2 from "../../../assets/images/Image2.png";
import Header from "../../Header/Header";
import {useNavigate} from "react-router-dom";





function Donate1(){

    const navigate=useNavigate();

    return(
        <div className={classes.whole}>
            <div className={classes.main}>
                <Header/>
                <div className={classes.mainInside}>
                    <div className={classes.inside}>
                        <div className={classes.left}>
                            <div className={classes.swiperDiv}><img  className="imgSwiper" src={Image2}/></div>
                            <div className={classes.btnDonate} onClick={()=>navigate('/donate-now')}>Donate Now</div>
                        </div>
                        <div className={classes.middle}>Change a Life, Erase a Debt:
                            Support Medical Debt Relief Today
                        </div>
                        <div/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donate1;