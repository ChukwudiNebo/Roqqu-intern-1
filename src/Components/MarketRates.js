import React from 'react';
import {rates} from '../data/rates'

const MarketRates = () =>
{
return (
    <>
        <div>
                <div className='d-flex align-items-center'>
                    <div>
                        <h4>
                            Market Price
                        </h4>
                    </div>
                    <div>
                        <div>
                            <ul className='list-unstyled d-flex justify-content-center align-items-center'>
                            {rates.map(rate =>
                            {
                                console.log(rate)
                                return (
                                        <li key={rate.id} className="d-flex">
                                            <button className="d-flex" >
                                                <div>
                                                    <img src={rate.image} alt="" />                                                
                                                </div>  
                                                <div>
                                                    {rate.rate}                                                
                                                </div> 
                                                <div>
                                                    {rate.percent}                                                
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