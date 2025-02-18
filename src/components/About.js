import React from "react";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import avatar from "../assets/photos/avatar2.PNG";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section min-h-screen" id="about" ref={ref}>
      <div className="container mx-auto ">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 min-h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1  h-[640px] mix-blend-lighten bg-top"
          >
            <img className="scale-x-[-1]" src={avatar} alt="avatar" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I'm a Front-end Developer with over 1 year of experience.
            </h3>
            <p className="mb-6">
              Frontend Developer with two years of hands-on experience in
              building responsive and dynamic web applications. Proficient in
              modern technologies like JavaScript, TypeScript, React, and
              Vue.js, I excel at creating visually appealing and highly
              functional user interfaces. Known for my quick learning ability
              and attention to detail, I thrive on transforming design concepts
              into seamless digital experiences.
            </p>

            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={1} duration={3} /> : null}
                </div>
                <div className="fonr-primary text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={30} duration={3} /> : null}
                </div>
                <div className="fonr-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={40} duration={3} /> : null}
                </div>
                <div className="fonr-primary text-sm tracking-[2px]">
                  Provided assistance <br /> to over web challenges.
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <a
                href="/DanielBilodidCV.pdf"
                download="DanielBilodidCV.pdf"
                type="application/pdf"
                className="btn btn-lg flex items-center justify-center"
              >
                Download CV
              </a>

              <Link
                to="work"
                smooth={true}
                spy={true}
                offset={10}
                className="text-gradient btn-link"
              >
                My Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
