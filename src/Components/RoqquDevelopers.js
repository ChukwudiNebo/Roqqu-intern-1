import React from 'react'
import JetThree from '../roqqu-images/Lighting Jet (3).png'
import DeveloperGetstarted from '../roqqu-images/Button.png'
import '../css files/roqquDevelopers.css'




const RoqquDevelopers = () => {
  return (
        <>
        <div id='DEV_DIV_001'>
                <div className='d-flex flex-wrap flex-lg-nowrap align-items-center' id='DEV_DIV_002'>
                    <div>
                        <div id='DEV_DIV_003'>
                            <h4>
                                DEVELOPERS
                            </h4>
                        </div>
                        <div  id='DEV_DIV_004'>
                            <h3>
                                Get real time data over a powerful api  
                            </h3>
                        </div>
                        <div id='DEV_DIV_005'>
                            <p>
                                No need to spend months integrating crypto functionality, we've got you!
                            </p>
                        </div>

                        <div>
                            <ul className='list-unstyled'>
                                {/* <li>
                                    <div>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <p>
                                        Stay in control
                                    </p>
                                </li> */}
                                <div className='d-flex flex-wrap flex-lg-wrap justify-content-between align-items-center list-unstyled' id='DEV_UL_001'>                                     
                                    <li className='d-flex'>
                                        <div>
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <p>
                                            Simple Integration
                                        </p>
                                        
                                    </li>
                                    <li className='d-flex'>
                                        <div>
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <p>
                                            Military Grade Security                                           
                                        </p>
                                    </li>
                                </div>
                                <div className='d-lg-flex justify-content-lg-between' id='DEV_EAS'> 
                                    <li className='d-flex'>
                                        <div>
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <p>
                                            Intelligent Fraud Detection
                                        </p>
                                    </li>
                                    <li className='d-flex'>
                                        <div>
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <p>                                        
                                            Simple Documentation
                                        </p>
                                    </li>
                                </div>
                                <div className='' id='DEV_SAF_001'> 
                                    <li className='d-flex'>
                                        <div>
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <p>
                                            Dev Support 
                                        </p>
                                    </li>
                                </div>
                            </ul>
                        </div>

                        <div className='d-flex justify-content-start align-items-center' id='BUS_DIV_006'>
                            {/* <div className='d-lg-block d-xl-none d-xl-none d-inline-block'>
                                <img src={BusinessGetstartedMobile } alt="" />
                            </div>
                            <div className='d-lg-none d-xl-inline-block d-xl-flex d-none'>
                                <img src={BusinessGetstarted} alt="*" />
                            </div> */}
                            <div>
                                <img src={DeveloperGetstarted} alt="*" />
                            </div>
                            <div className='d-flex'>
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
                        <img src={JetThree} alt="*" className='img-fluid_DEV'/>
                    </div>
                </div>
            </div>
    </>
  )
}

export default RoqquDevelopers