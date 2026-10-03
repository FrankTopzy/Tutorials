import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

async function getUser(): Promise<User> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }

  const data = await response.json();

  return data;
}


function ApiData() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getUser().then((user) => {
      setUser(user);
      setLoading(false)
    }).catch(error => {setError(error.message); setLoading(false)})
  }, [])

  return (
    <div>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}

      {user && (
        <div>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  )
}

export default ApiData
