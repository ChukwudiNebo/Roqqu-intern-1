import React from 'react'
import JetTwo from '../roqqu-images/Lighting Jet (2).png'
import BusinessGetstartedMobile from '../roqqu-images/Button.png'
import BusinessGetstarted from '../roqqu-images/Button (1).png'
import '../css files/roqquBusiness.css'





const RoqquBusiness = () => {
return (
    <>
        <div id='BUS_DIV_001'>
                <div className='d-flex flex-wrap flex-lg-nowrap align-items-center' id='BUS_DIV_002'>
                    <div>
                        <div id='BUS_DIV_003'>
                            <h4>
                                BUSINESS
                            </h4>
                        </div>
                        <div  id='BUS_DIV_004'>
                            <h3>
                                Take your business to the next level with payment links!
                            </h3>
                        </div>
                        <div id='BUS_DIV_005'>
                            <p>
                                You can now receive all your payments globally within minutes and not have to worry about price volatility.
                            </p>
                        </div>

                        <div>
                            <ul className='list-unstyled'>
                                {/* <li>
                                    <div>
                                        <img src="" alt="" />
                                    </div>
                                    <p>
                                        Stay in control
                                    </p>
                                </li> */}
                                <div className='d-lg-flex flex-wrap flex-lg-wrap justify-content-between align-items-center list-unstyled' id='BUS_UL_001'>                                     
                                    <li className='d-flex'>
                                        <div>
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <p>
                                            Fast
                                        </p>
                                        
                                    </li>
                                    <li className='d-flex'>
                                        <div>
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <p>
                                            Encrypted Security                                            
                                        </p>
                                    </li>
                                </div>
                                <div className='d-lg-flex' id='BUS_EAS'> 
                                    <li className='d-flex'>
                                        <div>
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <p>
                                            Easy to integrate 
                                        </p>
                                    </li>
                                    <li className='d-flex'>
                                        <div>
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <p>                                        
                                            24/7 Support
                                        </p>
                                    </li>
                                </div>
                                <div className='' id='BUS_SAF_001'> 
                                    <li className='d-flex'>
                                        <div>
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <p>
                                            Safe
                                        </p>
                                    </li>
                                </div>
                            </ul>
                        </div>

                        <div className='d-flex align-items-center' id='BUS_DIV_006'>
                            <div className='d-lg-block d-xl-none d-xl-none d-inline-block'>
                                <img src={BusinessGetstartedMobile } alt="" />
                            </div>
                            <div className='d-lg-none d-xl-inline-block d-xl-flex d-none'>
                                <img src={BusinessGetstarted} alt="*" />
                            </div>
                            <div className='d-flex justify-item-center'>
                                <h5>
                                    Learn more               
                                </h5>
                                <div>
                                    <i className='fa fa-angle-double-right'></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src={JetTwo} alt="*" className='img-fluid_BUS' />
                    </div>
                </div>
            </div>
    </>
  )
}

export default RoqquBusiness