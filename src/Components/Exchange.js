import React from 'react'
import ExchangeGetstarted from '../roqqu-images/Button.png'
import JetOne from '../roqqu-images/Lighting Jet (1).png'
import '../css files/exchange.css'


const Exchange = () => {
return (
    <>
        <div id='EXC_DIV_001'>
                <div className='d-flex flex-wrap flex-lg-nowrap align-items-center' id='EXC_DIV_002'>
                    <div>
                        <div id='EXC_DIV_003'>
                            <h4>
                                EXCHANGE
                            </h4>
                        </div>
                        <div  id='EXC_DIV_004'>
                            <h3>
                                Lighting Fast Crypto Trading 
                            </h3>
                        </div>
                        <div id='EXC_DIV_005'>
                            <p>
                                Trade over 100+ cryptocurrencies at the best swiftness 
                                available on low fees, advanced accessibility all over 
                                globe.
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
                                <div className='d-lg-flex flex-wrap flex-lg-wrap justify-content-between align-items-center list-unstyled' id='EXC_UL_001'>                                     
                                    <li className='d-flex'>
                                        <div>
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <p>
                                            Low Fees
                                        </p>
                                        
                                    </li>
                                    <li className='d-flex'>
                                        <div>
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <p>
                                            Virtual Cards
                                            
                                        </p>
                                    </li>
                                {/* <div className="d-lg-flex justify-content-lg-between"> */}
                                    <li className='d-flex'>
                                        <div>
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <p>
                                            Advanced Trade Charts 
                                        </p>
                                    </li>
                                    <li className='d-flex'>
                                        <div>
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <p>                                        
                                            Large selection of crypto assets
                                        </p>
                                    </li>
                                {/* </div> */}
                                    <li className='d-flex'>
                                        <div>
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <p>
                                            Military Grade Encryption 
                                        </p>
                                    </li>
                                </div>
                            </ul>
                        </div>

                        <div className='d-flex justify-content-lg-start align-items-center' id='EXC_DIV_006'>
                            <div>
                                <img src={ExchangeGetstarted} alt="*" />
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
                        <img src={JetOne} alt="*" className='img-fluid_EXC'/>
                    </div>
                </div>
            </div>
    </>
)
}

export default Exchange