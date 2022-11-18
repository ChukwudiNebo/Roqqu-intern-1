import React from 'react'
import bottomImage from '../roqqu-images/Icon.png'
import path1 from '../roqqu-images/Path.png'
import path2 from '../roqqu-images/Path (1).png'
import LightJet from '../roqqu-images/Image.png'



import '../css files/tradeOnGo.css'

const TradeOnGo = () => {
return (
    <>
        <div id='TRA_DIV_001'>
                <div className='d-flex flex-wrap flex-lg-nowrap'>
                    <div>
                        <div id='TRA_DIV_002'>
                            <h3>
                                Trade on the go. Anywhere, anytime.
                            </h3>
                        </div>
                        <div id='TRA_DIV_003'>
                            <p>
                                Don't worry, we've got an app for every device
                            </p>
                        </div>
                        <div className='d-flex'>
                            <div>
                                <div>
                                    <img src={bottomImage} alt="" />
                                </div>
                                <div id='TRA_DIV_004'>
                                    <h4>
                                        Easy access
                                    </h4>
                                    <p>
                                        Access and monitor funds at all times
                                    </p>
                                </div>
                            </div>
                            <div id='TRA_DIV_0062'>
                                <div id='TRA_DIV_006'>
                                    <div id="TRA_DIV_0061">
                                        <div>
                                            <img src={path1} alt="" />
                                        </div>
                                        <div>
                                            <img src={path2} alt="" />                                  
                                        </div>                                                                         
                                    </div>
                                </div>
                                <div id='TRA_DIV_005'>
                                    <h4>
                                        Always in Sync
                                    </h4>
                                    <p>
                                        Don't worry about the data, always be in sync
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={LightJet} alt="*" className='img-fluid' />
                    </div>
                </div>
            </div>
    </>
)
}

export default TradeOnGo