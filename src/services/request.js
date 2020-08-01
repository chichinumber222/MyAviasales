async function request(url, options = {}) {
  let body;
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw Error(`Could not fetch ${url}. Status: ${response.status}`);
    }

    body = await response.json();
  } catch (error) {
    console.log(`Ошибка в request: ${error.message}`);
  }

  return body;
}

export default request;
