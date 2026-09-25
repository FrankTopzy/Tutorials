async function getUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

    if (!response.ok) {
      throw new Error ('request failed');
      return;
    }

    const data = await response.json();
    console.log(data);

    return data;

  } catch (error) {

    console.log(error);

  }
}

getUser();