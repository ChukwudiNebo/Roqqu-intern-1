import React, { Fragment } from 'react'
import D from '../roqqu-images/D.png'
import DownLoadScreenShot from '../roqqu-images/ScreenShot.png'
import Light from '../roqqu-images/Light.png'
import '../css files/downloadapp.css'

const DownloadApp = () => {
return (
    <Fragment>
        <div id='DA_DIV_001'>
                <div className='text-center d-lg-none d-xl-block d-xl-flex d-none' id='DA_DIV_002'>
                    <h5>
                        Press <img src={D} alt="*" className='d-image' /> Download our app! Dive into the Roqqu world!
                    </h5>
                </div>
                <div className='text-lg-center'>
                    <div style={{ marginBottom: '0px' }}>
                        <img src={Light} alt="" className='img-fluid-one'/>
                    </div>
                    <div>
                        <img src={DownLoadScreenShot} alt="" className='img-fluidi img-fluid-two'/>
                    </div>
                </div>
            </div>
    </Fragment>
)
}

export default DownloadApp