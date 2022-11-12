import React from 'react'
import getStarted from '../roqqu-images/Button.png'
import appStore from '../roqqu-images/App Store.png';
import googleStore from '../roqqu-images/Google Play.png';
import '../css files/email.css'





const Email = () => {
return (
    <>
        <div>
                <div className='d-flex justify-content-between align-items-center' id='DIV_007'>
                    <div className='d-lg-none d-xl-inline-block d-xl-flex d-none' id='EMAIL_DIV'>
                        <input type="email" name="email" id="email" placeholder='Enter email address'/>
                    </div>
                    <div>
                        <img src={getStarted} alt="*" id='IMG_001'/>
                    </div>
                </div>
                <div>
                    <div className='d-lg-none d-flex justify-content-between'  id='EMAIL_DIV_001'>
                        <div>
                            <img src={googleStore} alt="*" />
                        </div>
                        <div>
                            <img src={appStore} alt="" />
                        </div>
                    </div>
                </div>
            </div>
    </>
)
}

export default Email