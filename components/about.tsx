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
       With a strong foundation in <span className="underline">computer science</span> and <span className="underline">electronics</span>,{" "}
        <span className="font-medium">my journey into technology naturally evolved into a deep passion for <span className="underline">web development</span>. </span> 
        Specializing in web technologies and equipped with a solid background in electronics and <span className="underline">robotics</span>,{" "}
        <span className="font-medium"> I’ve honed my skills through active participation in robotics competitions,</span>{" "}
        <span className="italic">designing and building innovative systems with advanced capabilities. What drives me is the challenge of solving complex problems and delivering seamless, </span>
        efficient solutions.
        Whether it’s optimizing code, crafting intuitive user interfaces, or integrating cutting-edge technologies,
        <span className="font-medium">
        {" "}I thrive on pushing boundaries and embracing innovation.
        </span>
    
      </p>

      <p>
        <span className="italic">Currently,</span> I am actively seeking a full-time opportunity to apply my expertise in web development, 
        {" "}
        <span className="font-medium">along with my experience in electronics and robotics, </span>
         to contribute to forward-thinking projects and drive impactful technological advancements.{" "}
      </p>
    </motion.section>
  );
}
