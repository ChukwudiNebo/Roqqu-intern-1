import React from 'react'
import Jet from '../roqqu-images/Lighting Jet.png'
import HeroGetstarted from '../roqqu-images/Button.png'
import '../css files/roqquWallet.css'



const RoqquWallet = () => {
return (
    <>
        <div id='WALL_DIV_001'>
                <div className='d-flex flex-wrap flex-lg-nowrap align-items-center' id='WALL_DIV_002'>
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
                                doesn t stop at that, <b>you;</b> 
                            </p>
                        </div>

                        <div>
                            <ul className='d-lg-flex flex-wrap flex-lg-wrap justify-content-between align-items-center list-unstyled' id='WALL_UL_001'>
                                {/* <div>
                                    
                                </div> */}
                                <li className='d-flex'>
                                    <div>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <p>
                                        Stay in control
                                    </p>
                                </li>
                                <li className='d-flex'>
                                    <div>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <p>
                                        Enjoy zero deposit 
                                    </p>
                                    
                                </li>
                                <li className='d-flex'>
                                    <div>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <p>
                                        Have all the coins you need 
                                    </p>
                                </li>
                                <li className='zeroWithdrawal d-flex'>
                                    <div>
                                        <i className="fa fa-check"></i>
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
                                <li className='d-flex'>
                                    <div>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <p>
                                        Experience solid rock security
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className='d-flex justify-content-lg-start align-items-center' id='WALL_DIV_006'>
                            <div>
                                <img src={HeroGetstarted} alt="" />
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
                        <img src={Jet} alt="" className='img-fluid_WAL'/>
                    </div>
                </div>
            </div>

    </>
)
}

export default RoqquWallet