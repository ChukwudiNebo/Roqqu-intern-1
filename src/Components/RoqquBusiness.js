import React from 'react'
import JetTwo from '../roqqu-images/Lighting Jet (2).png'
import BusinessGetstarted from '../roqqu-images/Button.png'
import '../css files/roqquBusiness.css'





const RoqquBusiness = () => {
return (
    <>
        <div id='BUS_DIV_001'>
                <div className='d-flex align-items-center' id='BUS_DIV_002'>
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
                                <div className='d-flex justify-content-between' id='BUS_UL_001'>                                     
                                    <li>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                        <p>
                                            Fast
                                        </p>
                                        
                                    </li>
                                    <li>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                        <p>
                                            Encrypted Security                                            
                                        </p>
                                    </li>
                                </div>
                                <div className='d-flex justify-content-between'> 
                                    <li>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                        <p>
                                            Easy to integrate 
                                        </p>
                                    </li>
                                    <li>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                        <p>                                        
                                            24/7 Support
                                        </p>
                                    </li>
                                </div>
                                <div className='d-flex justify-content-between'> 
                                    <li>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                        <p>
                                            Safe
                                        </p>
                                    </li>
                                </div>
                            </ul>
                        </div>

                        <div className='d-flex justify-content-between align-items-center'>
                            <div>
                                <img src={BusinessGetstarted} alt="*" />
                            </div>
                            <div>
                                <h5>
                                    Learn more               
                                </h5>
                                <div>
                                    <i></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src={JetTwo} alt="*" />
                    </div>
                </div>
            </div>
    </>
  )
}

export default RoqquBusiness