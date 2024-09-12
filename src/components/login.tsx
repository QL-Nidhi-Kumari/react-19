import React, { useState } from "react";
import { loginUser } from "../api/user";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [isPending, setIsPending] = useState<boolean>(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsPending(true);
    setUser(null);
    setError(null);

    try {
      const response: any = await loginUser(username, password);
      setUser(response.data);
    } catch (error) {
      setError(error.error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={isPending}>
        {isPending ? "Logging in..." : "Login"}
      </button>

      {user && <p style={{ color: "green" }}>Logged in: {user.email}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default Login;
