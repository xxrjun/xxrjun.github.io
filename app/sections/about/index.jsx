"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { Box, Flex, Text } from "@chakra-ui/react";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <LazyMotion features={domAnimation}>
      <Box as="section" id="about" className="section">
        <HeadingDivider title="About me" />
        <Flex direction="column" gap={3} pt={10} pb={16} maxW="5xl">
          <Text
            fontSize="xl"
            tabIndex="0"
            ref={ref}
            sx={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            My name is rjun, and I am currently studying Management Information
            System at Nation Central University.
          </Text>
          <Text
            fontSize="xl"
            tabIndex="0"
            ref={ref}
            sx={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
            }}
          >
            I enjoy learning technologies I like. I love diving into the field
            of Computer Science.
          </Text>
          <Text
            fontSize="xl"
            tabIndex="0"
            ref={ref}
            sx={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
            }}
          >
            At the moment, I am self-studying Java Spring Boot and Next.js to
            further expand my skillset.
          </Text>
        </Flex>

        <TimeLine />
      </Box>
    </LazyMotion>
  );
}
