import React from 'react'
import getStarted from '../roqqu-images/Button.png'
import '../css files/email.css'





const Email = () => {
return (
    <>
        <div>
                <div className='d-flex justify-content-between align-items-center' id='DIV_007'>
                    <div id='EMAIL_DIV'>
                        <input type="email" name="email" id="email" placeholder='Enter email address'/>
                    </div>
                    <div>
                        <img src={getStarted} alt="*" id='IMG_001'/>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
    </>
)
}

export default Email