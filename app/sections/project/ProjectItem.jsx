"use client";

import { Suspense, useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import {
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Tag,
  Text,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { VscSourceControl } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";

export function ProjectItem(props) {
  const { project, index } = props;
  const { name, description, images, homepage, html_url, topics } = project;
  const { onOpen } = useDisclosure();
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true });

  const cardBgColor = useColorModeValue("whiteAlpha.800", "whiteAlpha.50");

  const onKeyDown = (event) => {
    if (event.code === "Enter" && !event.shiftKey) {
      event.preventDefault();

      onOpen();
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <Grid
        templateRows={[
          // "225px 1fr",
          "250px 1fr",
          "200px 1fr",
          //   "260px 1fr minmax(clamp(50px, 100px, 160px), 160px)",
        ]}
        gap={5}
        pb={5}
        bgColor={cardBgColor}
        borderRadius="lg"
        ref={cardRef}
        sx={{
          transform: isCardInView
            ? "none"
            : `${
                index === 0
                  ? "translateY(250px)"
                  : `translateY(${200 / index}px)`
              }`,
          opacity: isCardInView ? 1 : 0,
          transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
            index === 0 ? 0 : 0.5 * index
          }s`,
        }}
      >
        <Flex
          as="header"
          flexDirection="column"
          alignItems="center"
          gap={4}
          px={4}
          pt={8}
        >
          <Heading as="h3" fontSize={["xl", "xl", "xl", "2xl"]} tabIndex="0">
            {name}
          </Heading>
          <Text textAlign="center" tabIndex="0">
            {description}
          </Text>
        </Flex>

        <Grid as="footer" gridTemplateRows="1fr 40px" gap={5} px={3}>
          {!!topics.length && (
            <Flex
              justifyContent="center"
              flexWrap="wrap"
              gap={3}
              alignContent="flex-start"
            >
              {topics.map((tag) => (
                <Tag key={tag} cursor="default" tabIndex="0">
                  {tag}
                </Tag>
              ))}
            </Flex>
          )}
          <HStack py={[null, null, null, null, 5]} spacing={3} justify="center">
            {html_url && (
              <Link
                href={html_url}
                target="_blank"
                tabIndex={-1}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button variant="ghost" aria-label="Go to repository">
                  <VscSourceControl />
                  <Text as="span" ml={2}>
                    Source
                  </Text>
                </Button>
              </Link>
            )}
            {homepage && (
              <Link
                href={homepage}
                target="_blank"
                tabIndex={-1}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button variant="ghost" aria-label="Go live">
                  <FiExternalLink />
                  <Text as="span" ml={2}>
                    Demo
                  </Text>
                </Button>
              </Link>
            )}
          </HStack>
        </Grid>
      </Grid>
    </LazyMotion>
  );
}
