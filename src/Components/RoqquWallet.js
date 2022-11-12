import React from 'react'
import Jet from '../roqqu-images/Lighting Jet.png'
import HeroGetstarted from '../roqqu-images/Button.png'
import '../css files/roqquWallet.css'



const RoqquWallet = () => {
return (
    <>
        <div id='WALL_DIV_001'>
                <div className='d-flex align-items-center' id='WALL_DIV_002'>
                    <div>
                        <div id='WALL_DIV_003'>
                            <h5>
                                WALLET
                            </h5>
                        </div>
                        <div id='WALL_DIV_004'>
                            <h3>
                                Swift, Safe, Secured 
                            </h3>
                        </div>
                        <div id='WALL_DIV_005'>
                            <p>
                                Never thought you could process crypto transactions 
                                with lightning speed right? Well, welcome to Roqqu! It 
                                doesn t stop at that,<b>you;</b> 
                            </p>
                        </div>

                        <div>
                            <ul className='d-flex flex-wrap justify-content-between align-items-center list-unstyled' id='WALL_UL_001'>
                                {/* <div>
                                    
                                </div> */}
                                <li>
                                    <div>
                                        <img src="" alt="" />
                                    </div>
                                    <p>
                                        Stay in control
                                    </p>
                                </li>
                                <li>
                                    <div>
                                        <img src="" alt="" />
                                    </div>
                                    <p>
                                        Enjoy zero deposit 
                                    </p>
                                    
                                </li>
                                <li>
                                    <div>
                                        <img src="" alt="" />
                                    </div>
                                    <p>
                                        Have all the coins you need 
                                    </p>
                                </li>
                                <li className='zeroWithdrawal'>
                                    <div>
                                        <img src="" alt="" />
                                    </div>
                                    <p>
                                        Enjoy zero withdrawal fees
                                    </p>
                                </li>
                                {/* <li>
                                    <div>
                                        <img src="" alt="" />
                                    </div>
                                    <p>
                                        Have all the coins you need 
                                    </p>
                                </li> */}
                                <li>
                                    <div>
                                        <img src="" alt="" />
                                    </div>
                                    <p>
                                        Experience solid rock security
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className='d-flex justify-content-between align-items-center'>
                            <div>
                                <img src={HeroGetstarted} alt="" />
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
                        <img src={Jet} alt="" />
                    </div>
                </div>
            </div>

    </>
)
}

export default RoqquWallet