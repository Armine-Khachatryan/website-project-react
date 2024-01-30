import React, {useEffect} from "react";
import AidApplication1 from "../../components/AidApplicationComponents/AidApplication1/AidApplication1";
import {useLocation} from "react-router-dom";



function AidApplicationShort(){

    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop();
    }, [routePath]);


    return(
        <>
            <AidApplication1/>
            <div className={"container"} style={{marginBottom:"50px"}}>
                    {/*<ApplicationShortTerm2/>*/}
            </div>
        </>
    )
}

export default AidApplicationShort;