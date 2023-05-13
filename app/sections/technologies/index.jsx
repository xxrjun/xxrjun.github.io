"use client";

import { Fragment, useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import {
  Box,
  Heading,
  SimpleGrid,
  Flex,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { HeadingDivider } from "components";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiVisualstudio, DiNodejs } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava, FaReact, FaPython, FaFigma } from "react-icons/fa";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import {
  SiExpress,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiCplusplus,
  SiIntellijidea,
} from "react-icons/si";

const Technologies = [
  {
    category: "Front-end",
    items: [
      { name: "HTML", icon: <AiFillHtml5 size={32} /> },
      { name: "CSS", icon: <DiCss3 size={32} /> },
      { name: "JS", icon: <IoLogoJavascript size={32} /> },
      { name: "React", icon: <FaReact size={32} /> },
      { name: "Next", icon: <TbBrandNextjs size={32} /> },
      { name: "Tailwind CSS", icon: <TbBrandTailwind size={32} /> },
    ],
  },
  {
    category: "Back-end",
    items: [
      { name: "NodeJS", icon: <DiNodejs size={32} /> },
      { name: "ExpressJS", icon: <SiExpress size={32} /> },
      { name: "Java Spring Boot", icon: <SiSpringboot size={32} /> },
      { name: "MySQL", icon: <SiMysql size={32} /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={32} /> },
      { name: "MongoDB", icon: <SiMongodb size={32} /> },
    ],
  },
  {
    category: "Programming Languages",
    items: [
      { name: "C++", icon: <SiCplusplus size={32} /> },
      { name: "Java", icon: <FaJava size={32} /> },
      { name: "Python", icon: <FaPython size={32} /> },
    ],
  },
  {
    category: "Other tools",
    items: [
      { name: "Github", icon: <AiFillGithub size={32} /> },
      { name: "VsCode", icon: <DiVisualstudio size={32} /> },
      { name: "Intellij", icon: <SiIntellijidea size={32} /> },
      { name: "Figma", icon: <FaFigma size={32} /> },
    ],
  },
];

export function TechnologiesSection() {
  const textRef = useRef(null);
  const stackRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true });
  const isStackInView = useInView(stackRef, { once: true });

  return (
    <LazyMotion features={domAnimation}>
      <Box as="section" id="tech" className="section">
        <HeadingDivider title="Technologies" />
        <Text
          fontSize="xl"
          pt={5}
          pb={10}
          tabIndex="0"
          ref={textRef}
          style={{
            transform: isTextInView ? "none" : "translateX(-200px)",
            opacity: isTextInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          I work with the following technologies and tools:
        </Text>

        {!!Technologies.length && (
          <SimpleGrid columns={[1, null, 4]} spacing={[5, 10]}>
            {Technologies.map((tech, index) => {
              return (
                <Box
                  key={tech.category}
                  ref={stackRef}
                  sx={{
                    transform: isStackInView
                      ? "none"
                      : `${
                          index === 0
                            ? "translateY(250px)"
                            : `translateY(${200 / index}px)`
                        }`,
                    opacity: isStackInView ? 1 : 0,
                    transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
                      index === 0 ? 0 : 0.5 * index
                    }s`,
                  }}
                >
                  <Heading as="h3" fontSize="xl" tabIndex="0">
                    {tech.category}
                  </Heading>
                  <Flex py={5} gap={4} flexWrap="wrap">
                    {tech.items.map((item) => (
                      <Fragment key={item.name}>
                        <Tooltip label={item.name} hasArrow arrowSize={8}>
                          <span aria-label={item.name} tabIndex="0" role="img">
                            {item.icon}
                          </span>
                        </Tooltip>
                      </Fragment>
                    ))}
                  </Flex>
                </Box>
              );
            })}
          </SimpleGrid>
        )}
      </Box>
    </LazyMotion>
  );
}
