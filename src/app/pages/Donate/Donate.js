import React, {useEffect} from "react";
import Donate1 from "../../components/DonateComponents/Donate1/Donate1";
import Donate2 from "../../components/DonateComponents/Donate2/Donate2";
import Donate3 from "../../components/DonateComponents/Donate3/Donate3";
import Donate4 from "../../components/DonateComponents/Donate4/Donate4";
import Footer from "../../components/Footer/Footer";
import {useLocation} from "react-router-dom";


function Donate(){

    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop();
    }, [routePath]);

    return(
        <>
            <Donate1/>
            <Donate2/>
            <Donate3/>
            <Donate4/>
            <Footer/>
        </>

    )
}

export default Donate;