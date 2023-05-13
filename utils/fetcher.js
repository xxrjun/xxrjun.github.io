import axios from "axios";

export const fetcher = (url) =>
  axios
    .get(url, {
      headers: {
        Authorization: `${process.env.NEXT_PUBLIC_GITHUB_API_TOKEN}`,
      },
    })
    .then((res) => res.data);

export const arrayFetcher = (urlArr) => {
  return Promise.all(
    urlArr.map((url) => {
      console.log("fetching: " + url);

      return fetcher(url);
    })
  );
};
