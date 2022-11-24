import React from 'react'
import '../css files/latestRelease.css'
import DefaultFaq from './DefaultFaq'
import WhatisRoqqu from './WhatisRoqqu'


const LatestRelease = () => {
return (
    <>
        <div id='LREL_DIV'>
            <div id='LREL_DIV_001'>
                <div>
                    <h2>
                        Frequently Asked Questions
                    </h2>
                </div>
                <div>
                    <p>
                        Here are the questions most frequently asked by students on Giverise.
                        <br />
                        If you don’t see the answer to your question, let us know at applicant@giverise.io
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <WhatisRoqqu />
                </div>
                <div>
                    <WhatisRoqqu />
                </div>
                <div>
                    <DefaultFaq />
                </div>
                <div>
                    <WhatisRoqqu />
                </div>
                <div>
                    <DefaultFaq />
                </div>
                <div>
                    <WhatisRoqqu />
                </div>
                <div>
                    <DefaultFaq />
                </div>
            </div>
        </div>
    </>
)
}

export default LatestRelease