import React from "react";
import Header from "../../Header/Header";
import Image2 from "../../../assets/images/Image2.png";
import {useNavigate} from "react-router-dom";
import classes from './Programs1.module.css';



function Programs1(){

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
                        <div className={classes.middle}>
                            <div className={classes.title}>Programs</div>
                            <div className={classes.text}>Our Application and Wholesale programs have the same
                                high-level result of removing medical debt for qualified individuals through diverse
                                approaches.  We target all donations to be split equally between the programs.  We
                                strongly believe that offering both programs is the best approach to erasing medical
                                debt as there is no one-size-fits-all approach to solving the US medical debt crisis.
                            </div>
                            <div className={classes.text}>Please consider donating today.  While we encourage donors to
                                donate with no requirements, we do allow donors to specify if they want their funds
                                used for the Application or Wholesale Program.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programs1;