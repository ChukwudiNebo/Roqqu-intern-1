import React, { Fragment } from 'react'
import '../css files/hero.css'



const Hero = () => {
return (
    <Fragment>
        <div id='DIV_002'>
                <div>
                    <div id='DIV_003'>
                        <div className='d-flex justify-content-start align-items-center' id='DIV_004'>
                            <h4 id='H4_001'>
                                News 
                            </h4>
                            <h5 id='H5_001'>
                                News goes here <span className='d-lg-none d-xl-inline-block d-none'>and can be this long only</span>
                            </h5>
                            <i className="fa fa-angle-right"></i>
                        </div>
                    </div>
                    <div className='text-lg-center'>
                        <div id='DIV_005'>
                            <h2 id='H2_001'>
                                75+ cryptocurrencies at your 
                                fingertips on Roqqu
                            </h2>
                        </div>
                        <div id='DIV_006'>
                            <p id='P_001'>
                                Buying & Selling cryptocurrency is made safe and easy with Roqqu.
                                    <br  className='d-xl-inline-block'/>
                                Start your Roqqu journey now! 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    </Fragment>
)
}

export default Hero