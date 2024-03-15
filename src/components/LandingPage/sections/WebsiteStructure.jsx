import React from 'react'
import Compliance from '../../../assets/compliance.png';

const WebsiteStructure = () => {
  return (
    <div className=' container mx-auto'>
      <div className=" grid lg:grid-cols-2 gap-8 mt-24 mb-12">
      <div className=" flex flex-col justify-center p-8 lg:p-0 items-center lg:items-end lg:ml-auto 2xl:w-9/12">
        <div className=" flex flex-col gap-14">
          <h1 className=" font-medium text-6xl  ">
            Website Experience
          </h1>
          <p className=" font-thin text-lg">
            <strong className=' font-semibold'>Seamless Registration & Management:</strong> Register swiftly and securely, manage your profile, and perform transactions via the Sellix.io integrated dashboard.
          </p>
          <p className=" font-thin text-lg">
            <strong className=' font-semibold'>Information Portal:</strong> Access detailed guides, understand tokenomics, and engross in frequently asked questions (FAQs) for comprehensive knowledge.
          </p>
        </div>
      </div>
      <div className=" flex justify-center lg:justify-start items-center">
        <img src={Compliance} />
      </div>
    </div>
    </div>
  )
}

export default WebsiteStructure