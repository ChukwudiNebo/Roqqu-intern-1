import React from 'react'
import {roqquEducation} from '../data/testimony.js'
import '../css files/roqquiantestimony.css'

const RoqquiansTestimony = () => {
return (
    <>
         <div id='RTES_DIV'>
                <div>
                    <div className='d-flex flex-wrap align-items-center' id='RTES_DIV_001'>
                        <div>
                            <h2>
                                Let’s hear from other Roqquians
                            </h2>
                        </div>
                        <div id='RTES_DIV_P'>
                            <p>
                                People who use our app think we are awesome. Here's what they are saying!​
                            </p>
                        </div>
                    </div>
                    
                    <div>
                    <div className="d-flex flex-wrap flex-lg-nowrap" id='RTES_CARD_001'>
                        {roqquEducation.map(testimony =>
                        {
                            return (

                                <div id='RTES_CARD_002'>
                                    <div id='RTES_CARD_IMG'>
                                        <img src={testimony.image} alt="" />
                                    </div>
                                    <div className='card' id='RTES_CARD'>
                                        <div>
                                            <p>
                                                {testimony.paragraph}
                                            </p>
                                        </div>
                                        <div>
                                            <h5>
                                                -{testimony.author}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                </div>
            </div>
    </>
)
}

export default RoqquiansTestimony