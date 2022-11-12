import React from 'react'
import User from '../roqqu-images/user.png'
import P2P from '../roqqu-images/p2p transaction done.png'
import Assets from '../roqqu-images/Assets Traded.png'

import '../css files/benefit.css'


const Benefits = () => {
return (
    <>
        {/* benefits and assets  */}
            <div id='BENE_DIV_001'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div>
                            <img src={User} alt="*" />                            
                        </div>
                        <div>
                            <h4>1.4M+</h4>
                            <p>
                                Users
                            </p>                          
                        </div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div>
                            <img src={Assets} alt="*" />                        
                        </div>
                        <div>
                            <h4>$1bn+</h4>
                            <p>
                                Assets Traded
                            </p>                         
                        </div>
                    </div>  
                    <div className='d-flex justify-content-center align-items-center'>
                        <div>
                            <img src={P2P} alt="*" />                            
                        </div>
                        <div>
                            <h4>$700m+</h4>
                            <p>
                                P2P Transactions Done
                            </p>                    
                        </div>
                    </div> 
                    <div className='d-flex justify-content-center align-items-center'>
                        <div>
                            <img src={Assets} alt="*" />                             
                        </div>
                        <div>
                            <h4>75+</h4>
                            <p>
                                Assets Tradedable
                            </p>                         
                        </div>
                    </div> 
                </div>                                    
            </div>             
    </>
)
}

export default Benefits