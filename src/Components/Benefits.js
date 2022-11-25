import React from 'react'
import User from '../roqqu-images/user.png'
import User1 from '../roqqu-images/users 1.png'
import P2P from '../roqqu-images/p2p transaction done.png'
import P2P1 from '../roqqu-images/Coin BG (1).png'
import Assets from '../roqqu-images/Assets Traded.png'
import AssetsTradeable from '../roqqu-images/Assets Tradeable.png'
import AssetsTradeable1 from '../roqqu-images/Coin BG (3).png'
import Assets1 from '../roqqu-images/Coin BG.png'


import '../css files/benefit.css'


const Benefits = () => {
return (
    <>
        {/* benefits and assets  */}
            <div id='BENE_DIV_001'>
                <div className='d-flex flex-wrap justify-content-between align-items-center' id='BENE_DIV'>
                    <div className='d-flex justify-content-center align-items-center' id='BENE_DIV_00100'>
                        <div className='d-none d-lg-inline-block'>
                            <img src={User} alt="*" />                            
                        </div>
                        <div className='d-lg-none d-inline-block'>
                            <img src={User1} alt="*" />                            
                        </div>
                        <div id='BENE_DIV_0010'>
                            <h4>1.4M+</h4>
                            <p>
                                Users
                            </p>                          
                        </div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center' id='BENE_DIV_00101'>
                        <div className='d-none d-lg-inline-block'>
                            <img src={Assets} alt="*" />                        
                        </div>
                        <div className='d-lg-none d-inline-block'>
                            <img src={Assets1} alt="*" />                        
                        </div>
                        <div id='BENE_DIV_0011'>
                            <h4>$1bn+</h4>
                            <p>
                                Assets Traded
                            </p>                         
                        </div>
                    </div>  
                    <div className='d-flex justify-content-center align-items-center' id='BENE_DIV_00102'>
                        <div className='d-none d-lg-inline-block'>
                            <img src={P2P} alt="*" />                            
                        </div>
                        <div className='d-lg-none d-inline-block'>
                            <img src={P2P1} alt="*" />                            
                        </div>
                        <div id='BENE_DIV_0012'>
                            <h4>$700m+</h4>
                            <p>
                                P2P Transactions Done
                            </p>                    
                        </div>
                    </div> 
                    <div className='d-flex justify-content-center align-items-center' id='BENE_DIV_00103'>
                        <div className='d-none d-lg-inline-block'>
                            <img src={AssetsTradeable} alt="*" />                             
                        </div>
                        <div className='d-lg-none d-inline-block'>
                            <img src={AssetsTradeable1} alt="*" />                             
                        </div>
                        <div id='BENE_DIV_0013'>
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