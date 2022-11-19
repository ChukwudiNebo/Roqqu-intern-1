import React from 'react';
import { rates } from '../data/rates'
import '../css files/marketRate.css'

const MarketRates = () =>
{
return (
    <>
        <div>
                <div className='d-flex align-items-center rateBG'>
                    <div id='rateBG_001'>
                        <h4>
                            Market Price
                        </h4>
                    </div>
                    <div>
                        <div>
                            <ul className='list-unstyled d-flex align-items-center'>
                            {rates.map(rate =>
                            {
                                // console.log(rate)
                                return (
                                        <li key={rate.id} className="d-flex flex-nowrap rateB">
                                            <button className="d-flex flex-nowrap justify-content-center align-items-center" id='button_LI'>
                                                <div>
                                                    <img src={rate.image} alt="" />                                                
                                                </div>  
                                                <div>
                                                    <h4>
                                                        {rate.rate}                                                
                                                    </h4>
                                                </div> 
                                                <div>
                                                    <h4>
                                                        {rate.percent}                                                
                                                    </h4>                                                
                                                </div>                                                 
                                            </button>
                                        </li>
                                    )
                                })}
                            </ul>
                            {/* <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
    </>
)
}

export default MarketRates