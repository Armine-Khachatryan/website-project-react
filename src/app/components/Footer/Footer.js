import React from "react";
import Logo from '../../assets/images/Logo.svg';
import Message from '../../assets/icons/Message.svg';
import Phone from '../../assets/icons/Phone.svg';
import Twitter from '../../assets/icons/Twitter.svg';
import LinkedIn from '../../assets/icons/LinkedIn.svg';
import Facebook from '../../assets/icons/Facebook.svg';
import classes from './Footer.module.css';
import {useNavigate} from "react-router-dom";


function Footer(){


    const navigate=useNavigate();


    return(
        <div className={classes.whole}>
            <div className={"container"}>
                <div className={classes.main}>
                    <div className={classes.left}>
                        <div onClick={()=>{navigate('/home')}}>
                            <div className={classes.logo}><img src={Logo} alt={""}/></div>
                        </div>

                        <div className={classes.subTitle}>EIN: 93-3747833</div>
                        <div className={classes.subTitle}>
                            <img className={classes.iconStyle} src={Message} alt={""}/>INFO@CLEANSLATEZ.ORG
                        </div>
                        <div className={classes.subTitle}>
                            <img className={classes.iconStyle} src={Phone} alt={""}/>(877) 443-8810
                        </div>

                        <div className={classes.line}>
                            <a href={"https://www.facebook.com/profile.php?id=61553798613116"}
                                target="_blank">
                                <img className={classes.icons} src={Facebook} alt={""}/>
                            </a>
                            <a href={"https://twitter.com/cleanslatezorg"}
                               target="_blank">
                                <img className={classes.icons} src={Twitter} alt={""}/>
                            </a>
                            <a href={"https://www.linkedin.com/company/clean-slatez/about/?viewAsMember=true"}
                               target="_blank">
                                <img className={classes.icons} src={LinkedIn} alt={""}/>
                            </a>
                        </div>
                    </div>
                    <div className={classes.middle}>
                        <div className={classes.subTitleAddress}>Mailing address:</div>
                        <div className={classes.address}>7901 4th St N</div>
                        <div className={classes.address}>Suite 17261</div>
                        <div className={classes.address}>St. Petersburg, FL 33702</div>
                    </div>
                    <div className={classes.right}>
                        <div className={classes.text} onClick={()=>{navigate('/about-us')}}>About Us</div>
                        <div className={classes.text} onClick={()=>{navigate('/donate')}}>Donate</div>
                        <div className={classes.text} onClick={()=>{navigate('/aid-application/short-term')}}>Apply</div>
                        <div className={classes.text} onClick={()=>{navigate('/faqs')}}>FAQs</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;