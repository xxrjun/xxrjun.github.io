"use client";

import { useEffect, useState, useRef, useContext } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import {
  Flex,
  Heading,
  Highlight,
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { LayoutContext } from "context/layout";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const DesktopCanvas = dynamic(
  () => import("@/components").then((mod) => mod.DesktopCanvas),
  {
    ssr: false,
  }
);

export function WelcomeSection() {
  const ref = useRef(null);
  const { introRef, setIntroHeight } = useContext(LayoutContext);
  const isInView = useInView(ref, { once: true });

  const subTitleColor = useColorModeValue("blackAlpha.600", "whiteAlpha.600");
  const highlightColor = useColorModeValue("purple.500", "purple.500");

  let [count, setCount] = useState(0);
  const [text] = useState([
    "am passionate about cutting-edge technology",
    "love programming and learning new techniques.",
    "also enjoy playing FPS games like valorant.",
  ]);

  const handleOnClick = (e) => {
    e.preventDefault();

    scroll({
      top: 680,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    let interval = setInterval(() => {
      setCount(count + 1);

      if (count === 3) {
        setCount(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [count]);

  useEffect(() => {
    setIntroHeight(introRef.current?.offsetHeight);
  }, [introRef, setIntroHeight]);

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative w-full mx-auto">
        <Box
          as="section"
          id="intro"
          className="section absolute"
          ref={introRef}
        >
          <Flex direction="column" gap={3} pt={10} pb={16} maxW="5xl">
            <Heading
              as="h1"
              size={["xl", "2xl", "2xl", "2xl"]}
              lineHeight="shorter !important"
              mr={[null, null, null, "-25%"]}
              tabIndex="0"
              ref={ref}
              sx={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <Highlight
                query={["passionate", "rjun"]}
                styles={{ color: highlightColor }}
              >
                Hi, I&apos;m rjun, a passionate programmer!
              </Highlight>
            </Heading>

            <Flex direction="column" overflow="hidden" pos="relative" mt={3}>
              <Text
                fontSize={["md", "lg", "x-large"]}
                tabIndex="0"
                ref={ref}
                sx={{
                  transform: isInView ? "none" : "translateX(-200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                I
                <Text
                  as="span"
                  pos="absolute"
                  top={
                    count === 0
                      ? "0"
                      : count === 1
                      ? "-100%"
                      : count === 2
                      ? "-200%"
                      : "0"
                  }
                  left={3}
                  display="flex"
                  flexDirection="column"
                  transition="top .5s ease-in-out"
                  tabIndex="0"
                >
                  {text.map((element) => (
                    <TextElement key={element} element={element} />
                  ))}
                </Text>
              </Text>
            </Flex>

            <Text
              fontSize={["md", "lg"]}
              color={subTitleColor}
              mt={3}
              mb={10}
              tabIndex="0"
              ref={ref}
              sx={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              Debuggin in sleep.
            </Text>
          </Flex>
        </Box>

        {/* Canvas */}
        <DesktopCanvas />

        <div
          className="absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center"
          onClick={handleOnClick}
        >
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}

function TextElement({ element }) {
  const firstWord = <b>{element.split(" ").at(0)}</b>;
  const restWords = element.split(" ").slice(1).join(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Text
      as="span"
      tabIndex="0"
      ref={ref}
      sx={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      {firstWord} {restWords}
    </Text>
  );
}
