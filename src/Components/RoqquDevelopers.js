import React from 'react'
import JetThree from '../roqqu-images/Lighting Jet (3).png'
import DeveloperGetstarted from '../roqqu-images/Button.png'
import '../css files/roqquDevelopers.css'




const RoqquDevelopers = () => {
  return (
        <>
        <div id='DEV_DIV_001'>
                <div className='d-flex align-items-center' id='DEV_DIV_002'>
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
                                        <img src="" alt="" />
                                    </div>
                                    <p>
                                        Stay in control
                                    </p>
                                </li> */}
                                <div className='d-flex justify-content-between' id='DEV_UL_001'>                                     
                                    <li>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                        <p>
                                            Simple Integration
                                        </p>
                                        
                                    </li>
                                    <li>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                        <p>
                                            Military Grade Security                                           
                                        </p>
                                    </li>
                                </div>
                                <div className='d-flex justify-content-between'> 
                                    <li>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                        <p>
                                            Intelligent Fraud Detection
                                        </p>
                                    </li>
                                    <li>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                        <p>                                        
                                            Simple Documentation
                                        </p>
                                    </li>
                                </div>
                                <div className=''> 
                                    <li>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                        <p>
                                            Dev Support 
                                        </p>
                                    </li>
                                </div>
                            </ul>
                        </div>

                        <div className='d-flex justify-content-between align-items-center'>
                            <div>
                                <img src={DeveloperGetstarted} alt="*" />
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
                        <img src={JetThree} alt="*" />
                    </div>
                </div>
            </div>
    </>
  )
}

export default RoqquDevelopers