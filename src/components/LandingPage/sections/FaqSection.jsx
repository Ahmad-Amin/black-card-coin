import React, { useState } from "react";
import { Reveal } from "../../util/Reveal";

const FaqSection = () => {
  const [openfaq, setOpenfaq] = useState(0);

  const handleonClick = (index) => {};

  return (
    <div className=" container mx-auto p-2 md:p-8 lg:p-24">
      <p className=" font-medium text-center text-5xl uppercase mb-10">faq</p>
      <div className=" grid md:grid-cols-2 gap-3 lg:gap-10">
        <div className="  flex flex-col gap-5">
          <Reveal>
            <div>
              <div className=" ml-auto">
                <button
                  onClick={() => setOpenfaq(0)}
                  className=" bg-customPurple px-6 py-4 rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md text-xl font-medium w-full"
                >
                  Q: How do I get a BlackCard?
                </button>
                <div
                  className={`transform duration-150 overflow-hidden ${
                    openfaq === 0 ? "h-28" : "h-0"
                  }`}
                >
                  <p className=" leading-[35px] text-xl font-extralight mt-2">
                    We prioritize security with blockchain-driven transparency,
                    KYC-free transactions, and a strategic token reserve for
                    ecosystem stability.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <div className=" mr-auto">
                <button
                  onClick={() => setOpenfaq(1)}
                  className=" bg-customPurple px-6 py-4 rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md text-xl font-medium w-full"
                >
                  Q: How do I get a BlackCard?
                </button>
                <div
                  className={`transform duration-150 overflow-hidden ${
                    openfaq === 1 ? "h-28" : "h-0"
                  }`}
                >
                  <p className=" leading-[35px] text-xl font-extralight mt-2">
                    We prioritize security with blockchain-driven transparency,
                    KYC-free transactions, and a strategic token reserve for
                    ecosystem stability.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <div className=" ml-auto">
                <button
                  onClick={() => setOpenfaq(2)}
                  className=" bg-customPurple px-6 py-4 rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md text-xl font-medium w-full"
                >
                  Q: How do I get a BlackCard?
                </button>
                <div
                  className={`transform duration-150 overflow-hidden ${
                    openfaq === 2 ? "h-28" : "h-0"
                  }`}
                >
                  <p className=" leading-[35px] text-xl font-extralight mt-2">
                    We prioritize security with blockchain-driven transparency,
                    KYC-free transactions, and a strategic token reserve for
                    ecosystem stability.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className=" flex flex-col gap-5">
          <Reveal>
            <div>
              <div className=" mr-auto">
                <button
                  onClick={() => setOpenfaq(3)}
                  className=" bg-customPurple px-6 py-4 rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md text-xl font-medium w-full"
                >
                  Q: How do I get a BlackCard?
                </button>
                <div
                  className={`transform duration-150 overflow-hidden ${
                    openfaq === 3 ? "h-28" : "h-0"
                  }`}
                >
                  <p className=" leading-[35px] text-xl font-extralight mt-2">
                    We prioritize security with blockchain-driven transparency,
                    KYC-free transactions, and a strategic token reserve for
                    ecosystem stability.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <div className=" ml-auto">
                <button
                  onClick={() => setOpenfaq(4)}
                  className=" bg-customPurple px-6 py-4 rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md text-xl font-medium w-full"
                >
                  Q: How do I get a BlackCard?
                </button>
                <div
                  className={`transform duration-150 overflow-hidden ${
                    openfaq === 4 ? "h-28" : "h-0"
                  }`}
                >
                  <p className=" leading-[35px] text-xl font-extralight mt-2">
                    We prioritize security with blockchain-driven transparency,
                    KYC-free transactions, and a strategic token reserve for
                    ecosystem stability.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <div className=" mr-auto">
                <button
                  onClick={() => setOpenfaq(5)}
                  className=" bg-customPurple px-6 py-4 rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md text-xl font-medium w-full"
                >
                  Q: How do I get a BlackCard?
                </button>
                <div
                  className={`transform duration-150 overflow-hidden ${
                    openfaq === 5 ? "h-28" : "h-0"
                  }`}
                >
                  <p className=" leading-[35px] text-xl font-extralight mt-2">
                    We prioritize security with blockchain-driven transparency,
                    KYC-free transactions, and a strategic token reserve for
                    ecosystem stability.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
