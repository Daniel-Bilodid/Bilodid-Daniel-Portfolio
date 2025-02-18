import React from "react";
import htmlIcon from "../assets/icons/html.svg";
import cssIcon from "../assets/icons/css.svg";
import jsIcon from "../assets/icons/js.svg";
import tsIcon from "../assets/icons/typescript.svg";
import reactIcon from "../assets/icons/react.svg";
import reduxIcon from "../assets/icons/redux.svg";
import vueIcon from "../assets/icons/vue.svg";
import angularIcon from "../assets/icons/angular.svg";
import tailwindIcon from "../assets/icons/tailwind.svg";
import sassIcon from "../assets/icons/sass.svg";
import bootstrapIcon from "../assets/icons/bootstrap.svg";
import firebaseIcon from "../assets/icons/firebase.svg";
import gitHubIcon from "../assets/icons/github.svg";
import gulpIcon from "../assets/icons/gulp.svg";
import webpackIcon from "../assets/icons/webpack.svg";

import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const tools = [
  { src: tailwindIcon, alt: "Tailwind", name: "Tailwind" },
  { src: sassIcon, alt: "Sass", name: "Sass" },
  { src: bootstrapIcon, alt: "Bootstrap", name: "Bootstrap" },
  { src: firebaseIcon, alt: "Firebase", name: "Firebase" },
  { src: gitHubIcon, alt: "GitHub", name: "GitHub" },
  { src: gulpIcon, alt: "Gulp", name: "Gulp" },
  { src: webpackIcon, alt: "Webpack", name: "Webpack" },
];

const languages = [
  { src: htmlIcon, alt: "HTML", name: "HTML" },
  { src: cssIcon, alt: "CSS", name: "CSS" },
  { src: jsIcon, alt: "JS", name: "JavaScript" },
  { src: tsIcon, alt: "TS", name: "TypeScript" },
  { src: reactIcon, alt: "React", name: "React" },
  { src: reduxIcon, alt: "Redux", name: "Redux" },
  { src: vueIcon, alt: "Vue", name: "Vue" },
  { src: angularIcon, alt: "Angular", name: "Angular" },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1   mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">Skills.</h2>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex xl:justify-around items-center flex-col xl:flex-row "
          >
            <div>
              <h3 className="h3 max-w-[500px] mb-16 flex justify-center">
                Languages & frameworks
              </h3>
              <div className="max-w-[600px] bg-white rounded-[20px] pt-[40px] pb-[40px]">
                <div className="flex flex-wrap justify-center items-center gap-8 max-w-[500px] mx-auto">
                  {languages.map((icon, index) => (
                    <div>
                      <img
                        className="w-[84px] h-[84px]"
                        key={index}
                        src={icon.src}
                        alt={icon.alt}
                      />
                      <p className="text-black flex justify-center mt-[5px]">
                        {icon.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h3 className="h3 max-w-[500px] mb-16 flex justify-center">
                Other tools
              </h3>
              <div className="max-w-[600px] bg-white rounded-[20px] pt-[40px] pb-[40px]">
                <div className="flex flex-wrap justify-center items-center gap-8 max-w-[500px] mx-auto">
                  {tools.map((icon, index) => (
                    <div>
                      <img
                        className="w-[84px] h-[84px]"
                        key={index}
                        src={icon.src}
                        alt={icon.alt}
                      />
                      <p className="text-black flex justify-center mt-[5px]">
                        {icon.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
