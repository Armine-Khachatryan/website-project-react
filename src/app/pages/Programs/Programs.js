import React, {useEffect} from "react";
import Programs1 from "../../components/ProgramsComponents/Programs1/Programs1";
import Programs2 from "../../components/ProgramsComponents/Programs2/Programs2";
import Programs3 from "../../components/ProgramsComponents/Programs3/Programs3";
import Programs5 from "../../components/ProgramsComponents/Programs5/Programs5";
import Footer from "../../components/Footer/Footer";
import Programs4 from "../../components/ProgramsComponents/Programs4/Programs4";
import {useLocation} from "react-router-dom";



function Programs(){
    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop();
    }, [routePath]);

    return(
        <>
            <Programs1/>
            <Programs2/>
            <Programs3/>
            <Programs4/>
            <Programs5/>
            <Footer/>
        </>
    )
}

export default Programs;