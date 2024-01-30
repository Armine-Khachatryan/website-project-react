import React, {useEffect} from "react";
import classes from './FAQs.module.css';
import Header from "../../components/Header/Header";
import FAQComponent from "../../components/FAQComponent/FAQComponent";
import Footer from "../../components/Footer/Footer";
import {useLocation} from "react-router-dom";



function FAQs(){

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
                <div className={classes.whole}>
                    <Header/>
                </div>
            </div>
                <FAQComponent/>
                <Footer/>
        </>
    )
}


export default FAQs;