import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../roqqu-images/Logo-White (1).png'
import '../css files/bottomfooter.css'

const BottomFooter = () => {
return (
    <>
        <div id='BOTT_DIV_001'>
                <div>
                    {/* <div>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <img src="" alt="" />
                        </div>
                    </div> */}
                    <div id='BOTT_DIV_002'>
                        <div>
                            <img src={Logo} alt="" />
                        </div>
                        <div id='BOTT_DIV_003'>
                            <p>
                                Enter your email to get notified by
                                Roqqu for latest updates.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='d-flex flex-wrap' id='BOTT_DIV_004'>
                            <div>
                                <div className='d-flex align-items-center justify-content-between' id='BOTT_DIV_005'>
                                    <input type="email" name="" id="" placeholder='Email Address' />
                                    <i className="fa fa-angle-right"></i>
                                </div>
                                <div id='BOTT_DIV_0060'>
                                    <ul className='d-flex list-unstyled justify-content-between' id='BOTT_DIV_006'>
                                        <li>
                                            <i className="fab fa-facebook"></i>
                                        </li>
                                        <li>
                                            <i className="fab fa-twitter"></i>
                                        </li>
                                        <li>
                                            <i className="fab fa-linkedin"></i>
                                        </li>
                                        <li>
                                            <i className="fab fa-instagram"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className='d-flex flex-wrap justify-content-between' id='BOTT_DIV_0070'>
                                <div id='BOTT_DIV_007'>
                                    <div>
                                        <h3>Product</h3>
                                    </div>
                                    <div id='BOTT_DIV_008'>
                                        <ul className='list-unstyled'>
                                            <li>Wallet</li>
                                            <li>Exchange</li>
                                            <li>Loans</li>
                                            <li>Virtual Card</li>
                                            <li>Savings</li>
                                        </ul>
                                    </div>
                                </div>
                                <div id='BOTT_DIV_009'>
                                    <div>
                                        <h3>Company</h3>
                                    </div>
                                    <div id='BOTT_DIV_0010'>
                                        <ul className='list-unstyled'>
                                            <li>About</li>
                                            <li>Blog</li>
                                            <li>Legal & Privacy</li>
                                        </ul>
                                    </div>
                                </div>
                                <div id='BOTT_DIV_011'>
                                    <div>
                                        <h3>Resources</h3>
                                    </div>
                                    <div id='BOTT_DIV_012'>
                                        <ul className='list-unstyled'>
                                            <li>Help Center</li>
                                            <li>FAQs</li>
                                            <li>Roqqu Hub</li>
                                        </ul>
                                    </div>
                                </div>
                                <div id='BOTT_DIV_013'>
                                    <div>
                                        <h3>Developers</h3>
                                    </div>
                                    <div id='BOTT_DIV_014'>
                                        <ul className='list-unstyled'>
                                            <li>Overview</li>
                                            <li>Integration</li>
                                            <li>Technical Help</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>                       
                                
                        </div>
                    </div>
                    
                    <div id='BOTT_DIV_015'>   
                        <hr />

                        <div>
                            <div  className='d-flex flex-wrap justify-content-between'>
                                <div id='BOTT_DIV_016'>
                                    <p>© 2022 Roqqu Technologies Ltd. All rights reserved.</p>
                                </div>
                                <div id='BOTT_DIV_017'>
                                    <p>
                                        Roqqu is a fully regulated digital asset operator licensed in Lithuania by the Central Bank of Lithuania under Roqqu UAB Technologies with license number 305963619 operated legally across 28 countries 
                                        across Europe. Information about Roqqu s Crypto license can be found <Link to="/">here</Link>. 
                                    </p>
                                </div>
                            </div>        
                        </div>
                    </div>
                </div>
            </div>               

    </>
)
}

export default BottomFooter