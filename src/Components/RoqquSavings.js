import React from 'react'
import SavingsGetstarted from '../roqqu-images/Button.png'
import JetFour from '../roqqu-images/Lighting Jet (3).png'
import '../css files/roqquSavings.css'




const RoqquSavings = () => {
  return (
            <>
        <div id='SAV_DIV_001'>
                <div className='d-flex align-items-center' id='SAV_DIV_002'>
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
                                <div className='d-flex justify-content-between' id='SAV_UL_001'>                                     
                                    <li>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                        <p>
                                            Zero bank charges
                                        </p>
                                        
                                    </li>
                                    <li>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                        <p>
                                            No market volatility                                          
                                        </p>
                                    </li>
                                </div>
                                <div className='d-flex justify-content-between'> 
                                    <li>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                        <p>
                                            Safe and secure funds
                                        </p>
                                    </li>
                                    <li>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                        <p>                                        
                                            Solid Security
                                        </p>
                                    </li>
                                </div>
                                <div className=''> 
                                    <li>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                        <p>
                                            +15% interest p.a 
                                        </p>
                                    </li>
                                </div>
                            </ul>
                        </div>

                        <div className='d-flex justify-content-between align-items-center'>
                            <div>
                                <img src={SavingsGetstarted} alt="*" />
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
                        <img src={JetFour} alt="*" />
                    </div>
                </div>
            </div>
    </>
  )
}

export default RoqquSavings