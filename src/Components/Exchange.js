import React from 'react'
import ExchangeGetstarted from '../roqqu-images/Button.png'
import JetOne from '../roqqu-images/Lighting Jet (1).png'
import '../css files/exchange.css'


const Exchange = () => {
return (
    <>
        <div id='EXC_DIV_001'>
                <div className='d-flex align-items-center' id='EXC_DIV_002'>
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
                                <div className='d-flex justify-content-between' id='EXC_UL_001'>                                     
                                    <li>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                        <p>
                                            Low Fees
                                        </p>
                                        
                                    </li>
                                    <li>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                        <p>
                                            Virtual Cards
                                            
                                        </p>
                                    </li>
                                </div>
                                <div className='d-flex justify-content-between'> 
                                    <li>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                        <p>
                                            Advanced Trade Charts 
                                        </p>
                                    </li>
                                    <li>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                        <p>                                        
                                            Large selection of crypto assets
                                        </p>
                                    </li>
                                </div>
                                <div className='d-flex justify-content-between'> 
                                    <li>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                        <p>
                                            Military Grade Encryption 
                                        </p>
                                    </li>
                                </div>
                            </ul>
                        </div>

                        <div className='d-flex justify-content-between align-items-center'>
                            <div>
                                <img src={ExchangeGetstarted} alt="*" />
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
                        <img src={JetOne} alt="*" />
                    </div>
                </div>
            </div>
    </>
)
}

export default Exchange