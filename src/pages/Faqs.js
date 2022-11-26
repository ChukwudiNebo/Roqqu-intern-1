import React from 'react'
import Navbar from '../Components/Navbar'
import SideNavBarFaq from '../Components/SideNavBarFaq'
import BottomFooter from '../Components/BottomFooter'
import { Outlet } from "react-router-dom";

import '../css files/roqqu.css'
// import { useRouteMatch } from 'react-router-dom'
// import Categories from '../Components/Categories'
// import MainRoute from '../Components/MainRoute'
// import { Switch, Route } from 'react-router-dom';
// import LatestRelease from '../Components/LatestRelease'

import '../css files/faq.css'


const Faqs = () =>
{
  // let { path } = useRouteMatch();
  return (
    <>
      <div className='FAQ_BG'>
          <Navbar />
          <div className='d-flex flex-lg-nowrap' id='FAQ_DIV'>
              <SideNavBarFaq />
              {/* <Switch>
                <Route path={`${path}`} exact component={LatestRelease}/>        
                <Route path={`${path}/:categories`} exact component={Categories}/>
              </Switch> */}
              <div>
                  <Outlet />
              </div>

          </div>
      </div>
        
        {/* <MainRoute /> */}
        <section className='footer'>
          <BottomFooter />        
        </section>
    </>
  )
}

export default Faqs