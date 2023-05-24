"use client";

import { Suspense, useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import useSWR from "swr";
import { Box, Button, Center, SimpleGrid } from "@chakra-ui/react";
import { HeadingDivider } from "components";
import { ProjectItem } from "./ProjectItem";
import { arrayFetcher } from "utils/fetcher";

const DynamicLoader = dynamic(() =>
  import("components/Loader").then((mod) => mod.Loader)
);

const repos = [
  "xxrjun/cs-resources",
  "CARRYUU/carryu",
  "xxrjun/total-repos-size",
];

const reposUrl = repos.map(
  (repo) => `${process.env.NEXT_PUBLIC_GITHUB_API_BASE_URL}/${repo}`
);

export function ProjectsSection() {
  const btnRef = useRef(null);
  const isBtnInView = useInView(btnRef, { once: true });

  console.log(reposUrl);

  const { data, error } = useSWR(reposUrl, arrayFetcher);

  console.log(data);

  const projects = data;

  if (error && !data) {
    console.log("error in ProjectsSection: " + error);

    return null;
  }

  return (
    <Box as="section" id="projects" className="section">
      <HeadingDivider title="Projects & Repositories" />
      <Box py={8} />

      <Suspense fallback={<DynamicLoader width="100%" />}>
        <SimpleGrid spacingY={10} spacingX={6} columns={[1, 1, 3]}>
          {projects
            ?.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            ?.map((project, index) => (
              <ProjectItem key={project._id} project={project} index={index} />
            ))}
        </SimpleGrid>
      </Suspense>

      <Center mt={[8, 8, 16]}>
        <Link
          href="https://github.com/xxrjun?tab=repositories"
          target="_blank"
          tabIndex={-1}
          aria-label="Go to project page"
          ref={btnRef}
          style={{
            transform: btnRef ? "none" : "translateX(-50px)",
            opacity: isBtnInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Button aria-label="See more projects">
            More projects on GitHub
          </Button>
        </Link>
      </Center>
    </Box>
  );
}
