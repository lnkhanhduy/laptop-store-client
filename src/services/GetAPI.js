export function GetAPI(path, token) {
  const options = {
    method: 'GET',
    url: 'https://laptop-store-server-nodejs-n1bo1155h-lnkhanhduy.vercel.app/' + path,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  };

  return options;
}
