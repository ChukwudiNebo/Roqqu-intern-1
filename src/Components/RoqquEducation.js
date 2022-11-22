import React from 'react'
import { Link } from 'react-router-dom'
import {roqquEducation} from '../data/education.js'
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
                
        {/* cards  style={{paddingLeft: '100px'}} */}
        <div id='Card_LINk_DIV' style={{}}>
                <ul className='list-unstyled d-flex flex-wrap flex-lg-nowrap  align-items-center'>
                            {roqquEducation.map(education =>
                            {
                                // console.log(rate)
                                return (
                                        <li key={education.id} className="d-flex flex-wrap flex-lg-nowrap justify-content-center card">
                                            <Link to="/" className="" id='Card_LINk'>
                                                <div>
                                                    <div className='text-center'>
                                                        <img src={education.image} alt="" />                                                
                                                    </div> 
                                                    <div id='img-overlay'>
                                                        {education.imgOverlayBadge}
                                                    </div>                            
                                                </div>
                                                <div id='Card_LINk_001'>
                                                    <div>
                                                        <h4>
                                                            {education.subHeading}
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
                                                                {education.paragraph}
                                                            </p>
                                                        </div>
                                                        <div id='read'>
                                                            <Link to="/" className='d-flex'>
                                                                <h5>
                                                                    {education.read}
                                                                </h5>
                                                                <i className='fa fa-angle-double-right'></i>
                                                            </Link>
                                                        </div>
                                                    </div>                                                                                                    
                                                </div>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
            </div>
    </>
)
}

export default RoqquEducation