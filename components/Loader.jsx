"use client";

import { Center, Flex, Spinner, Text } from "@chakra-ui/react";
import { Html, useProgress } from "@react-three/drei";

export function Loader({ width = "100vw" }) {
  return (
    <Center width={width} minHeight="calc(100vh - 90px - 110px)">
      <Flex direction="column">
        <Spinner width="60px" height="60px" />
        <Text>Loading...</Text>
      </Flex>
    </Center>
  );
}

export function CanvasLoader() {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
}

export default CanvasLoader;
