import React from 'react'
import liquidity from '../../../assets/liquidity.svg'
import invest from '../../../assets/invest.svg'
import structureGraphImage from '../../../assets/structureGraphImage.png'


const EconomicStructure = () => {
  return (
    <div className=' container mx-auto'>
      <div className=" grid lg:grid-cols-2 gap-8 my-36">
      <div className=" flex flex-col justify-center items-center lg:items-end lg:ml-auto lg:p-8">
        <div className=" flex flex-col gap-14">
          <h1 className=" font-medium text-6xl  ">
            Economic Structure & Tokenomics
          </h1>
          <p className=" font-thin text-xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>

          <div className="flex flex-row gap-7">
            <div className="flex justify-center items-start">
              <div className=" bg-customPurple w-20 h-20 rounded-full relative  ">
                <img  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"  src={ liquidity} />
              </div>
            </div>

            <div className=" flex flex-col justify-around">
              <p className=" text-customPurple font-semibold text-lg">
                Scarcity and Liquidity
              </p>
              <p className="leading-[24px] font-light text-base mt-5">
                With only 150 million $BCCOIN in total supply, 90 million tokens provide liquidity on Pancakeswap v3, while 60 million are reserved for strategic development.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-7">
            <div className="flex justify-center items-start">
              <div className=" bg-customPurple w-20 h-20  rounded-full relative  ">
                <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={ invest} />
              </div>
            </div>
            <div className=" flex flex-col justify-around">
              <p className=" text-customPurple font-semibold text-lg">
                Invest In Stability
              </p>
              <p className="leading-[24px] font-light text-base mt-5">
               Initial token price set at 1 USDT, promising growth and stability within Pancakeswap v3 trading.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center lg:justify-start items-center">
        <img src={structureGraphImage} />
      </div>
    </div>
    </div>
  )
}

export default EconomicStructure