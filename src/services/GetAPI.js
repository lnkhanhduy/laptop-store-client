export function GetAPI(path, token) {
  const options = {
    method: 'GET',
    url: 'http://localhost:5000/' + path,
    headers: {
      Authorization: token,
    },
  };

  return options;
}
