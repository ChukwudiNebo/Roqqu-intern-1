import React from 'react'
import LightJet from '../roqqu-images/Lighting Jet.png'
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
                        <div className='d-lg-flex'>
                            <div>
                                <div>
                                    <img src="" alt="" />
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
                            <div>
                                <div>
                                    <img src="" alt="" />
                                </div>
                                <div id='TRA_DIV_005'>
                                    <h4>
                                        Always in Sync
                                    </h4>
                                    <p>
                                        Don t worry about the data, always be in sync
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