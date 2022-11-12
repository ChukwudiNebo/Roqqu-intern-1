import React from 'react'
import SavingsGetstarted from '../roqqu-images/Button.png'
import JetFour from '../roqqu-images/Lighting Jet (3).png'
import '../css files/roqquSavings.css'




const RoqquSavings = () => {
  return (
            <>
        <div id='SAV_DIV_001'>
                <div className='d-flex flex-wrap flex-lg-nowrap align-items-center' id='SAV_DIV_002'>
                    <div>
                        <div id='SAV_DIV_003'>
                            <h4>
                                SAVINGS & INVESTEMENTS
                            </h4>
                        </div>
                        <div  id='SAV_DIV_004'>
                            <h3>
                                Boost your finances!  
                            </h3>
                        </div>
                        <div id='SAV_DIV_005'>
                            <p>
                                You enjoy +15% p.a interest, no market volatility, and 
                                even beat inflation when you stash funds away in stable 
                                coins.
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
                                <div className='d-flex flex-wrap flex-lg-wrap justify-content-between align-items-center list-unstyled' id='SAV_UL_001'>                                     
                                    <li className='d-flex'>
                                        <div>
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <p>
                                            Zero bank charges
                                        </p>
                                        
                                    </li>
                                    <li className='d-flex'>
                                        <div>
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <p>
                                            No market volatility                                          
                                        </p>
                                    </li>
                                </div>
                                <div className='d-lg-flex justify-content-lg-start' id='SAV_EAS'> 
                                    <li className='d-flex'>
                                        <div>
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <p>
                                            Safe and secure funds
                                        </p>
                                    </li>
                                    <li className='d-flex'>
                                        <div>
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <p>                                        
                                            Solid Security
                                        </p>
                                    </li>
                                </div>
                                <div id='SAV_SAF_001'> 
                                    <li className='d-flex'>
                                        <div>
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <p>
                                            +15% interest p.a 
                                        </p>
                                    </li>
                                </div>
                            </ul>
                        </div>

                        <div className='d-flex justify-content-lg-start align-items-center'  id='SAV_DIV_006'>
                            {/* <div className='d-lg-block d-xl-none d-xl-none d-inline-block'>
                                <img src={BusinessGetstartedMobile } alt="" />
                            </div>
                            <div className='d-lg-none d-xl-inline-block d-xl-flex d-none'>
                                <img src={BusinessGetstarted} alt="*" />
                            </div> */}
                            <div>
                                <img src={SavingsGetstarted} alt="*" />
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
                        <img src={JetFour} alt="*" className='img-fluid_SAV'/>
                    </div>
                </div>
            </div>
    </>
)
}

export default RoqquSavings