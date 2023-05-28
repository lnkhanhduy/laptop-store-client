export function PostAPI(path, body, token) {
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/' + path,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    data: body,
  };

  return options;
}
