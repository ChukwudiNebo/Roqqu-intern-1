import React from 'react'
import { Link } from 'react-router-dom';
import '../css files/roqquhub.css'

const RoqquHub = () => {
return (
    <>
        <div id='HUB_DIV_001'>
                <div>
                    <div className='d-flex align-items-center justify-content-between' id='HUB_DIV_002'>
                        <div>
                            <h3>
                                Roqqu Hub
                            </h3>                           
                        </div>
                        <div>
                            <Link to='/'>
                                Go to Hub
                            </Link>
                            <i></i>
                        </div>
                    </div>
                    <div id='HUB_DIV_003'>
                        <p>
                            We present to you the no. 1 stop for everything crypto and blockchain. You re 
                            guaranteed to get the best out of the entire blockchain space with over 100+ 
                            learning materials on Roqqu hub.
                        </p>
                    </div>
                </div>
        </div>
    </>
)
}

export default RoqquHub