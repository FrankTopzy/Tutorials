async function getGithubUser(username) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}`
    );

    if (!response.ok) {
      console.log("status:", response.status);
      console.log(
        "remaining:",
        response.headers.get("x-ratelimit-remaining")
      );
      console.log(
        "reset:",
        response.headers.get("x-ratelimit-reset")
      );
      throw new Error(`Request failed: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

getGithubUser("octocat").then(user => {
  console.log(user);
}).catch(error => console.log("Couldn't get user:", error.message))

const state = {
  loading: false,
  user: null,
  error: null
};

async function searchUser(username) {
  state.user = null;
  state.error = null;

  if (!username.trim()) {
    state.error = "Please enter a username";
    return;
  }

  state.loading = true;

  try {
    const user = await getGithubUser(username);
    state.user = user;
  } catch (error) {
    state.error = error.message;
  } finally {
    state.loading = false;
  }

  console.log(state);
}