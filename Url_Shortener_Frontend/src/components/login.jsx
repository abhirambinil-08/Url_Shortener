import { useState } from "react";
import { login, signup } from "../api/auth";
import Dashboard from "../components/Dashboard";
import "../style/login.css";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  async function handleSubmit() {
    try {
      if (isLogin) {
        const res = await login({ email, password });
        setUser(res.data.user);
      } else {
        const res = await signup({ name, email, password });
        alert(res.data.message + " — Now login!");
        setIsLogin(true);
        setName("");
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  }

  if (user) return <Dashboard user={user} setUser={setUser} />;

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Shorten your URL,</h1>
        <h1 className="hero-title">Not your Code...</h1>

        <h3 className="hero-price">
          {isLogin
            ? "Welcome back! Login to manage your links."
            : "Create an account to get started."}
        </h3>

        <div
          className="hero-form"
          style={{ flexDirection: "column", alignItems: "center" }}
        >
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="hero-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Email address"
            className="hero-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="hero-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="hero-btn" onClick={handleSubmit}>
            {isLogin ? "Login" : "Sign Up"}
          </button>

          <p
            className="hero-text"
            style={{ cursor: "pointer" }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin
              ? "Don't have an account? Sign up"
              : "Already have an account? Login"}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
