import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} `}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        {/* 20% discount for 1 month access */}
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />

          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For {' '}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        {/* The next generation payment. Get Started component */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold text-[52px] text-white leading-[75px]
                          ss:text-[72px] ss:leading-[100.8px]">
            The Next <br className="sm:block hidden" /> {' '}
            <span className="text-gradient">Generation</span> {' '} 
            Payment Method.
          </h1>
        
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero