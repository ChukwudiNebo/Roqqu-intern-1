import React, { Fragment } from 'react'
import D from '../roqqu-images/D.png'
import DownLoadScreenShot from '../roqqu-images/ScreenShot.png'
import Light from '../roqqu-images/Light.png'


const DownloadApp = () => {
return (
    <Fragment>
        <div>
                <div className='text-center'>
                    <h5>
                        Press <img src={D} alt="" /> Download our app! Dive into the Roqqu world!
                    </h5>
                </div>
                <div className='text-center'>
                <div style={{ marginBottom: '0px' }}>
                        <img src={Light} alt="" />
                    </div>
                    <div>
                        <img src={DownLoadScreenShot} alt="" />
                    </div>
                </div>
            </div>
    </Fragment>
)
}

export default DownloadApp