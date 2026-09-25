async function getUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

    if (!response.ok) {
      throw new Error ('request failed');
    }

    const data = await response.json();

    return data;

  } catch (error) {

    console.error(error);
    throw error;

  }
}

getUser().then(user => {
  console.log(user);
});