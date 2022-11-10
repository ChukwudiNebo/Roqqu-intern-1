import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import roqquLogo from '../roqqu-images/Logo-White.png'
import BtnNav from '../roqqu-images/Btn.png'




const Navbar = () => {
return (
    <Fragment>
        <div>
            <div id='ID_001'>
                <div className='d-flex flex-wrap'>
                    <div className='align-items-center'>
                        <img src={roqquLogo} alt="*" />
                    </div>
                    <div id='ID_002'>
                        <div>
                            <ul className='d-flex list-unstyled align-items-center' id='UL_001'>
                                <div className="hamburger d-sm-block d-md-block d-lg-block d-xl-none">
                                    <div className=" bar bar one"></div>
                                    <div className= "bar bar two"></div> 
                                    <div className=" bar bar three"></div>            
                                </div>
                                <div className='d-lg-none d-xl-block d-xl-flex d-none'>
                                    <li>
                                        <Link to="/Wallet">
                                            Wallet
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Exchange">
                                            Exchange
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/for-businesses">
                                            For Businesses
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Developers">
                                            Developers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Learn">
                                            Learn
                                        </Link>
                                    </li>
                                </div>
                                <div className='d-flex align-items-center' id='DIV_001'>
                                    {/* <div> */}
                                        {/* <div> */}
                                            <div className=' d-flex list-unstyled align-items-center'>
                                                <li>
                                                    <Link to="/Sign-in">
                                                        Sign In
                                                    </Link>
                                                </li>
                                                <li>
                                                    {/* <Link to="/Sign-up">
                                                        Sign up for free
                                                    </Link> */}
                                                    <img src={BtnNav} alt="" />
                                                </li>
                                            </div>
                                        {/* </div> */}
                                    {/* </div> */}
                                    <div>
                                        <div>
                                            <img src={ngEllipse} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
)
}

export default Navbar