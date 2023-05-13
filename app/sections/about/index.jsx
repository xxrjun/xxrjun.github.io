"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import {
  Box,
  Flex,
  Text,
  Highlight,
  useColorModeValue,
} from "@chakra-ui/react";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const highlightColor = useColorModeValue("blue.400", "blue.400");

  return (
    <LazyMotion features={domAnimation}>
      <Box as="section" id="about" className="section">
        <HeadingDivider title="About me" />
        <Flex direction="column" gap={3} pt={10} pb={16} maxW="5xl">
          <Text
            fontSize="l"
            tabIndex="0"
            ref={ref}
            sx={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <Highlight
              query={[
                "Management Information System",
                "Nation Central University, TW",
              ]}
              styles={{ color: highlightColor, fontWeight: "bold" }}
            >
              My name is rjun. I am currently studying Management Information System at Nation Central University, TW.
            </Highlight>
          </Text>
          <Text
            fontSize="l"
            tabIndex="0"
            ref={ref}
            sx={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
            }}
          >
            I enjoy learning technologies that interest me. I love diving into the field of Computer Science. At the moment, I am self-studying Java Spring Boot and Next.js to further expand my skillset and am working on my Student Graduate Project.
          </Text>
          <Text
            fontSize="l"
            tabIndex="0"
            ref={ref}
            sx={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
            }}
          >
            I hope I could be a talent at the intersection of technology and humanities as Steve Job said.
          </Text>
        </Flex>

        <TimeLine />
      </Box>
    </LazyMotion>
  );
}
