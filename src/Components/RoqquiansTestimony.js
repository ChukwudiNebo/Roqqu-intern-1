import React from 'react'
import '../css files/roqquiantestimony.css'

const RoqquiansTestimony = () => {
return (
    <>
         <div>
                <div>
                    <div>
                        <div>
                            <h5>
                                Let’s hear from other Roqquians
                            </h5>
                        </div>
                        <div>
                            <p>
                                People who use our app think we are awesome. Here's what they are saying!​
                            </p>
                        </div>
                    </div>
                    
                    <div>
                    <div>
                        
                            <div>
                                <div>
                                    <img src={testimony.image} alt="" />
                                </div>
                                <div>
                                    <p>
                                        {testimony.paragraph}
                                    </p>
                                </div>
                                <div>
                                    <h4>
                                        {testimony.author}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
)
}

export default RoqquiansTestimony