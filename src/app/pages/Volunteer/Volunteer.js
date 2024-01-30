import React, {useEffect} from "react";
import Image23 from '../../assets/images/Image23.png';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import classes from './Volunteer.module.css';
import {useLocation} from "react-router-dom";

function Volunteer(){

    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop();
    }, [routePath]);

    return(
        <>
            <div className={classes.smallScreens}>
                <div className={classes.headerDiv}>
                    <Header/>
                </div>
            </div>
                <div className="container">
                    <div className={classes.whole}>
                        <div className={classes.left}>
                            <div className={classes.title}>VOLUNTEER</div>
                            <div className={classes.text}>Interested in getting involved with Clean SlateZ?</div>
                            <div className={classes.text}>We are delighted and honored to have your help and expand the
                                impact that we can have together! There are many ways to volunteer and help our
                                organization.  We are always seeking folks who want to make a difference with us.</div>
                            <div className={classes.text}>
                                <span className={classes.subTitle}>Please send an email to info@cleanslatez.org</span>
                          and we will connect with you to discuss the best fit based on your interests and
                            available volunteer time.
                            </div>
                        </div>
                        <div className={classes.right}>
                            <img className={classes.imgStyle} src={Image23} alt={""}/>
                        </div>
                    </div>
            </div>
            <Footer/>
        </>

    )
}


export default Volunteer;