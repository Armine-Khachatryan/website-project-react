import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import './App.css';
import Home from "./app/pages/Home/Home";
import FAQs from "./app/pages/FAQs/FAQs";
import Donate from "./app/pages/Donate/Donate";
import AboutUs from "./app/pages/AboutUs/AboutUs";
import Programs from "./app/pages/Programs/Programs";
import Volunteer from "./app/pages/Volunteer/Volunteer";
import DonateNow from "./app/pages/DonateNow";
import AidApplication from "./app/pages/AidApplication/AidApplication";
import AidApplicationShort from "./app/pages/AidApplicationShort/AidApplicationShort";
import AidApplicationLong from "./app/pages/AidApplicationLong/AidApplicationLong";


function App() {



  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/about-us" element={<AboutUs/>}/>
              <Route path="/donate" element={<Donate/>}/>
              <Route path="/donate-now" element={<DonateNow/>}/>
              <Route path="/programs" element={<Programs/>}/>
              <Route path="/volunteer" element={<Volunteer/>}/>
              <Route path="/faqs" element={<FAQs/>}/>
              <Route path="/aid-application" element={<AidApplication/>}>
                  <Route index path="short-term" element={<AidApplicationShort/>}/>
                  <Route path="long-term" element={<AidApplicationLong/>}>
                  </Route>
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App;