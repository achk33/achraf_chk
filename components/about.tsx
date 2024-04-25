"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
       Following my graduation with a degree in computer science and electronics ,{" "}
        <span className="font-medium">my passion for technology led me down a different path towards becoming a Front End Developer. </span> 
        With a specialty in electronics and a fervent interest in robotics,{" "}
        <span className="font-medium"> I actively participate in robotics competitions,</span>{" "}
        <span className="italic">where I've showcased my skills in creating <span className="underline">robots</span> with diverse capabilities. </span>
         What excites me most about programming is the thrill of unraveling complex challenges and crafting elegant solutions. 
           Whether it's optimizing code for efficiency or designing intuitive user interfaces, 
        <span className="font-medium">
        {" "}I thrive on pushing boundaries and embracing new technologies.
        </span>
    
      </p>

      <p>
        <span className="italic">Currently,</span> I am eagerly seeking a full-time position where I can leverage my expertise in front-end development, 
        {" "}
        <span className="font-medium">coupled with my background in electronics and robotics, </span>
         to contribute to innovative projects and drive technological advancements.{" "}
      </p>
    </motion.section>
  );
}
