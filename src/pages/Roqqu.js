import React from 'react'
import Benefits from '../Components/Benefits'
import DownloadApp from '../Components/DownloadApp'
import Email from '../Components/Email'
import Exchange from '../Components/Exchange'
import Hero from '../Components/Hero'
import MarketRates from '../Components/MarketRates'
import Navbar from '../Components/Navbar'
import RoqquBusiness from '../Components/RoqquBusiness'
import RoqquDevelopers from '../Components/RoqquDevelopers'
import RoqquEducation from '../Components/RoqquEducation'
import RoqquHub from '../Components/RoqquHub'
import RoqquSavings from '../Components/RoqquSavings'
import RoqquWallet from '../Components/RoqquWallet'
import TradeOnGo from '../Components/TradeOnGo'
import WeOffer from '../Components/WeOffer'
import Footer from './Footer'




const Roqqu = () => {
return (
    <>
        <section>
            <div className='LandingBG'>
                <div>
                    <Navbar />
                </div>
                <div>
                    <Hero />
                </div>
                <div>
                    <Email />
                </div>
                <div>
                    <DownloadApp />
                </div>
            </div>
            <div>
                <div>
                    <MarketRates />
                    <Benefits />
                    <WeOffer />
                    <RoqquWallet />
                    <Exchange />
                    <RoqquBusiness />
                    <RoqquDevelopers />
                    <RoqquSavings />
                    <RoqquHub />
                    <RoqquEducation />
                </div>
            </div>
            <div>
                <div>
                    <TradeOnGo />
                </div>
            </div>
            <div>
                <div>
                    <Footer />
                </div>
            </div>
        </section>
    </>
)
}

export default Roqqu