export function GetAPI(path, token) {
  const options = {
    method: 'GET',
    url: 'https://laptop-store-server-nodejs-7cwsq5ayj-lnkhanhduy.vercel.app/' + path,
    headers: {
      Authorization: token,
    },
  };

  return options;
}
