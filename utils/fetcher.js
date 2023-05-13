import axios from "axios";

export const fetcher = (url) =>
  axios
    .get({
      url,
      headers: {
        Authorization: `${process.env.NEXT_PUBLIC_GITHUB_API_TOKEN}`,
      },
    })
    .then((res) => res.data);

export const arrayFetcher = (urlArr) => {
  // const f = (u) = axios.get(url).then((res) => {
  // 	console.log(url);
  // 	console.log(res);

  // 	return res.data;
  // });


  return Promise.all(urlArr.map((url) => fetcher(url)));
};
