import React from 'react'
import ApplePlay from '../roqqu-images/Vector (8).png'
import GooglePlay from '../roqqu-images/Vector (9).png'
import '../css files/downloadLogo.css'


const DownloadLogo = () => {
return (
    <>
        <div id='DL_DIV'>
            <div className='d-flex justify-content-between' id='DL_DIV_001'>
                <div>
                    <img src={ApplePlay} alt="" id='DL_DIV_001_IMG_01'/>
                </div>
                <div>
                    <img src={GooglePlay} alt="" id='DL_DIV_001_IMG'/>
                </div>
            </div>
        </div>
    </>
)
}

export default DownloadLogo