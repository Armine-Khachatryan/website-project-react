import React, {useEffect} from "react";
import AboutUs1 from "../../components/AboutUsComponents/AboutUs1/AboutUs1";
import AboutUs2 from "../../components/AboutUsComponents/AboutUs2/AboutUs2";
import AboutUs3 from "../../components/AboutUsComponents/AboutUs3/AboutUs3";
import AboutUs4 from "../../components/AboutUsComponents/AboutUs4/AboutUs4";
import AboutUs5 from "../../components/AboutUsComponents/AboutUs5/AboutUs5";
import Footer from "../../components/Footer/Footer";
import {useLocation} from "react-router-dom";



function AboutUs(){

    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop();
    }, [routePath]);


    return(
        <>
            <AboutUs1/>
            <AboutUs2/>
            <AboutUs3/>
            <AboutUs4/>
            <AboutUs5/>
            <Footer/>
        </>
    )
}


export default AboutUs;