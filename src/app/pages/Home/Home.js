import React, {useEffect} from "react";
import Home1 from "../../components/HomeComponents/Home1/Home1";
import Home2 from "../../components/HomeComponents/Home2/Home2";
import Home3 from "../../components/HomeComponents/Home3/Home3";
import Home4 from "../../components/HomeComponents/Home4/Home4";
import Home5 from "../../components/HomeComponents/Home5/Home5";
import Footer from "../../components/Footer/Footer";
import {useLocation} from "react-router-dom";



function Home(){

    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop();
    }, [routePath]);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-PEJF1C71PP';
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                window.dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-PEJF1C71PP');
        };

        return () => {
            // Cleanup script tag to avoid memory leaks
            document.head.removeChild(script);
        };
    }, []);

    return(
        <>
            <Home1/>
            <Home2/>
            <Home3/>
            <Home4/>
            <Home5/>
            <Footer/>
        </>

    )
}

export default Home;