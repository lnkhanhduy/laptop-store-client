export function GetAPI(path, token) {
  const options = {
    method: 'GET',
    url: 'http://localhost:5000/' + path,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  };

  return options;
}
// https://laptop-store-server-nodejs-7cwsq5ayj-lnkhanhduy.vercel.app/
