"use client";

import { Suspense } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { Header, Footer } from "components";
import { LayoutProvider } from "context/layout";
import { theme, navigationHeight, footerHeight } from "utils/theme-config";
import Loading from "./loading";
import "./global.css";
// export const metadata = { ...AppMetadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>
          <Header />

          <LayoutProvider>
            <Box
              as="main"
              minHeight={`calc(100vh - ${navigationHeight}px - ${footerHeight}px)`}
            >
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </Box>
            <Footer />
          </LayoutProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
