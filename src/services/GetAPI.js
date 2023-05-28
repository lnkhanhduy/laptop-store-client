export function GetAPI(path, token) {
  const options = {
    method: 'GET',
    url: 'https://laptop-store-server-nodejs-7cwsq5ayj-lnkhanhduy.vercel.app/' + path,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  };

  return options;
}
