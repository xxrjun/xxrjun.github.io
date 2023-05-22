import {
  WelcomeSection,
  AboutSection,
  TechnologiesSection,
  ProjectsSection,
} from "app/sections";

// Metadata
const author = "xxrjun";
const description = "A student who loves new technology and programming.";
const url = "https://xxrjun.vercel.app/";
export const metadata = {
  title: {
    default: `${author} | Portfolio`,
  },
  description: description,
  icons: {
    icon: "/favicon.png",
  },
  keywords: [
    "xxrjun",
    "Portfolio website",
    "React Portfolio",
    "Next.js Portfolio",
  ],
  creator: author,
  authors: [{ name: author, url: url }],
  openGraph: {
    title: `${author} | Portfolio`,
    description: description,
    url: url,
    siteName: `${author} | Portfolio`,

    locale: "en-US",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <WelcomeSection />
      <AboutSection />
      <TechnologiesSection />
      <ProjectsSection />
    </>
  );
}
