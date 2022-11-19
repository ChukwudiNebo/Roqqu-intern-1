import React from 'react'
import { Link } from 'react-router-dom'
import '../css files/roqquEducation.css'
// import Data from '../data/EduCard.js'




const RoqquEducation = () => {
return (
    <>
        <div id='EDU_DIV_001'>
                <div>
                    <div>
                        <ul className='d-flex flex-nowrap flex-lg-nowrap list-unstyled' id='EDU_UL_001'>
                            <li id='LI_ALL'>
                                <Link to='/'>
                                    All                                
                                </Link>
                            </li>
                            <li className='d-none d-lg-inline-block'>
                                <Link to='/'>
                                    Trading <sup className='d-none d-lg-inline-block'>(17)</sup>                               
                                </Link>
                            </li>
                            <li className='d-none d-lg-inline-block'>
                                <Link to='/'>
                                    Cryptocurrency <sup className='d-none d-lg-inline-block'>(17)</sup>                              
                                </Link>
                            </li>
                            <li className='d-inline d-lg-none'>
                                <Link to='/'>
                                    Bitcoin                             
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    Blockchain <sup className='d-none d-lg-inline-block'>(17)</sup>                              
                                </Link>
                            </li>
                            <li className='d-block d-lg-none'>
                                <Link to='/'>
                                    Tutorial                              
                                </Link>
                            </li>
                            <li className='d-none d-lg-inline-block'>
                                <Link to='/'>
                                    Defii <sup className='d-none d-lg-inline-block'>(17)</sup>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
                
        {/* cards  */}
        
        {/* {
            Data.map(({ name, image, id }) => (
                <div key={id}>
                    <div>{name}</div>
                    <div>
                        <img src={image} alt="" />
                    </div>
                </div>
            ))
        } */}

        <ul className='list-unstyled d-flex align-items-center'>
                            {roqquEducation.map(education =>
                            {
                                // console.log(rate)
                                return (
                                        <li key={education.id} className="d-flex flex-nowrap rateB">
                                            <Link className="d-flex flex-nowrap justify-content-center align-items-center" id='button_LI'>
                                                <div>
                                                    <img src={education.image} alt="" />                                                
                                                </div>  
                                                <div>
                                                    <h4>
                                                        {education.subheading}
                                                    </h4>
                                                </div> 
                                                <div>
                                                    <div>
                                                        <h2>
                                                            {education.heading}
                                                        </h2>
                                                    </div>
                                                    <div>
                                                        <p>
                                                            Volatility is a measure of how much an asset's price has fluctuated upwards or downwards over time....
                                                        </p>
                                                    </div>
                                                </div>                                                 
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>

            {/* <div>
                <div>
                    <div>
                        <div>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <h4>
                                    FINANCE
                                </h4>
                            </div>
                            <div>
                                <div>
                                    <h2>
                                        Volatility and Crypto Volatility
                                    </h2>
                                </div>
                                <div>
                                    <p>
                                        Volatility is a measure of how much an asset's price has fluctuated upwards or downwards over time....
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h4>
                                        Read More
                                    </h4>
                                    <i></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <h4>
                                    TRADING
                                </h4>
                            </div>
                            <div>
                                <div>
                                    <h2>
                                        What Is a Limit Order?
                                    </h2>
                                </div>
                                <div>
                                    <p>
                                        Limit buy or sell orders state the price at which 
                                        securities must be bought or sold. The order will 
                                        be executed only at or below...
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h4>
                                        Read More
                                    </h4>
                                    <i></i>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <h4>
                                    TRADING
                                </h4>
                            </div>
                            <div>
                                <div>
                                    <h2>
                                        What Is a Limit Order?
                                    </h2>
                                </div>
                                <div>
                                    <p>
                                        Limit buy or sell orders state the price at which 
                                        securities must be bought or sold. The order will 
                                        be executed only at or below...
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h4>
                                        Read More
                                    </h4>
                                    <i></i>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div> */}

    
    </>
)
}

export default RoqquEducation