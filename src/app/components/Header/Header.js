import React, {useState} from "react";
import BurgerMenu from '../../assets/icons/BurgerMenu.svg';
import Logo from '../../assets/images/Logo.svg';
import {useNavigate} from "react-router-dom";
import classes from './Header.module.css';

function Header(){

    const headerData=[
        {
            title:"About Us",
            href:"about-us"
        },
        {
            title:"Donate",
            href:"donate"
        },
        {
            title:"Aid Application",
            href:"aid-application/short-term"
        },
        // {
        //     title:"Providers",
        //     href:"providers"
        // },
        {
            title:"Programs",
            href:"programs"
        },
        {
            title:"Volunteer",
            href:"volunteer"
        },
        {
            title:"FAQs",
            href:"faqs"
        }
    ]


    const [isLinksVisible, setIsLinksVisible] = useState(false);
    const navigate=useNavigate();

    const navigateToPage = (val) => {
        navigate(`/${val}`);
    }


    let renderHeaderData = headerData.map((item, index)=>(
        <div  key={item.href}
              className={`${window.location.pathname === `/${item.href}` ? classes.activeItem:classes.item}`}
              onClick={()=>navigateToPage (item.href)}>{item.title}</div>
    ))


    let renderHeaderBurgerData = headerData.map((item, index)=>(
        <div  key={item.href}
              className={`${window.location.pathname === `/${item.href}` ? classes.activeItemBurger:classes.itemBurger}`}
              onClick={()=>navigateToPage (item.href)}>{item.title}</div>
    ))

    let toggleDivs=()=>{
        setIsLinksVisible(!isLinksVisible);
    }
    console.log(isLinksVisible, 1111111111111)

    // let toggleDivs=()=>{
    //     console.log('Before toggle:', sessionStorage.getItem('opened'));
    //     setIsLinksVisible(!isLinksVisible);
    //     if (sessionStorage.getItem('opened')) {
    //         console.log('Clearing sessionStorage');
    //         sessionStorage.clear();
    //     }
    //     sessionStorage.setItem('opened', 'opened');
    //     console.log('After toggle:', sessionStorage.getItem('opened'));
    // }

    return(
        <>
            <div className={classes.whole}>
                <div className={classes.left}>
                    <div className={classes.logo} onClick={()=>{navigate('/home')}}><img src={Logo} alt={""}/></div>
                    <div className={classes.itemsWhole}>
                        {renderHeaderData}
                    </div>
                </div>
                <div className={classes.right}/>
            </div>
            <div className={classes.topnav}>
                <div className={classes.upTop}>
                    <div className={classes.logo} onClick={()=>{navigate('/home')}}><img src={Logo} alt={""}/></div>
                    <div className={classes.burgerIcon} onClick={toggleDivs}>
                        <img src={BurgerMenu} alt={""}/>
                    </div>
                </div>
                <div className={classes.itemsBurger}
                     style={{ display: isLinksVisible ? 'block' : 'none' }}>
                        {renderHeaderBurgerData}
                </div>
            </div>
        </>
    )
}

export default Header;