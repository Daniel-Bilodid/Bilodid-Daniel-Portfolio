import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import preview from "../assets/preview.jpg";

import countryPreview from "../assets/desktop-preview.jpg";

import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br /> Work.
              </h2>
              <p className="max-w-sm mb-16">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                exercitationem saepe suscipit ab, incidunt dolorem quae
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>
            <a
              href="https://countries-ruddy-alpha.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer"></div>

                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={countryPreview}
                  alt="img"
                />

                <div className="absolute -bottom-full left-12 group-hover:bottom-44 transition-all duration-500 z-50">
                  <span className="text-gradient">Rest Countries API</span>
                </div>

                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">
                    Multi-page website designed to showcase a comprehensive list
                    of countries and their key information.
                  </span>
                </div>
              </div>
            </a>

            <a
              href="https://photosnap-app-one.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer"></div>

                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={preview}
                  alt="img"
                />

                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">PhotoSnap App</span>
                </div>

                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">
                    Marketing site for a photo-sharing app
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-x1">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt="img"
              />

              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all durtation-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all durtation-700 z-50">
                <span className="text-3x1 text-white ">Project Title</span>
              </div>
            </div>
            <a
              href="https://photosnap-app-one.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer"></div>

                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={preview}
                  alt="img"
                />

                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">PhotoSnap App</span>
                </div>

                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">
                    Marketing site for a photo-sharing app
                  </span>
                </div>
              </div>
            </a>

            <a
              href="https://photosnap-app-one.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer"></div>

                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={preview}
                  alt="img"
                />

                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">PhotoSnap App</span>
                </div>

                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">
                    Marketing site for a photo-sharing app
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
