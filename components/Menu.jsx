"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { Box, Link as ChakraLink, useMediaQuery } from "@chakra-ui/react";
import { useScrollTo } from "hooks";
import { initial, animate, exit, transition } from "utils/motions";

const MenuItems = [
  { id: "0", name: "Intro", url: "#intro" },
  { id: "1", name: "About", url: "#about" },
  { id: "2", name: "Skills", url: "#tech" },
  { id: "3", name: "Projects", url: "#projects" },
];

const linkCustomStyles = {
  "&:hover": {
    textUnderline: "none",
  },
  "&:after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: "-3px",
    height: "2px",
    backgroundColor: "var(--chakra-colors-chakra-body-text)",
    width: 0,
    transition: "width 300ms ease-in-out",
  },
  "&:hover:after": {
    width: "100%",
  },
};

export function Menu({ onClick = () => {} }) {
  let content, mainMenu;
  const [isMobile] = useMediaQuery("(max-width: 767px)");
  const { scrollToEl } = useScrollTo();

  const sortCallback = (a, b) => a.id - b.id;

  const handleOnClick = (e) => {
    scrollToEl(e);

    window.setTimeout(() => {
      onClick();
    }, 350);
  };

  mainMenu = (
    <Box
      as={m.nav}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      flex={[1, 0]}
      role="menu"
    >
      <Box
        as="ul"
        listStyleType="none"
        display="flex"
        align={isMobile ? "flex-start" : "center"}
        gap={5}
        flexDirection={isMobile ? "column" : "row"}
      >
        {MenuItems.sort(sortCallback).map((menuItem) => (
          <Box as="li" key={menuItem.id}>
            <ChakraLink
              role="menuitem"
              href={menuItem.url}
              title={menuItem.name}
              fontSize={["15px", "20px"]}
              fontWeight="medium"
              textDecoration="none !important"
              pos="relative"
              sx={linkCustomStyles}
              onClick={handleOnClick}
            >
              {menuItem.name}
            </ChakraLink>
          </Box>
        ))}
      </Box>
    </Box>
  );

  content = mainMenu;

  if (MenuItems.length === 0) {
    return null;
  }

  return <LazyMotion features={domAnimation}>{content}</LazyMotion>;
}
