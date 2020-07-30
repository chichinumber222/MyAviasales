async function request(url, options={}) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw Error(`Could not fetch ${url}. Status: ${response.status}`);
    }
  
    const body = await response.json();
    return body;

  } catch(error) {
    console.log(`Ошибка: ${error.message}`);
  }
}

export default request;