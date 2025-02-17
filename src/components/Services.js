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

const icons = [
  { src: htmlIcon, alt: "HTML" },
  { src: cssIcon, alt: "CSS" },
  { src: jsIcon, alt: "JS" },
  { src: tsIcon, alt: "TS" },
  { src: reactIcon, alt: "React" },
  { src: reduxIcon, alt: "Redux" },
  { src: vueIcon, alt: "Vue" },
  { src: angularIcon, alt: "Angular" },
  { src: tailwindIcon, alt: "Tailwind" },
  { src: sassIcon, alt: "Sass" },
  { src: bootstrapIcon, alt: "Bootstrap" },
  { src: firebaseIcon, alt: "Firebase" },
  { src: gitHubIcon, alt: "GitHub" },
  { src: gulpIcon, alt: "Gulp" },
  { src: webpackIcon, alt: "Gulp" },
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
            <h3 className="h3 max-w-[455px] mb-16">
              {" "}
              The skills, tools and technologies i use.
            </h3>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-center"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 max-w-[600px] mx-auto">
              {icons.map((icon, index) => (
                <img
                  className="w-[64px] h-[64px]"
                  key={index}
                  src={icon.src}
                  alt={icon.alt}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
