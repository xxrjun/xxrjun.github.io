const author = "xxrjun";
const description = "A student who loves new technology and programming.";
const url = "";
export const AppMetadata = {
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
