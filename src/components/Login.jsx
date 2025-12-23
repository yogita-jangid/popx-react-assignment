import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormFilled = email.trim() !== "" && password.trim() !== "";

  return (
    <div>
      <h2>Signin to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <label>Email Address</label>
      <input
        type="email"
        placeholder="Enter email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Password</label>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className={isFormFilled ? "primary-btn" : "disabled-btn"}
        disabled={!isFormFilled}
        onClick={() => navigate("/profile")}
      >
        Login
      </button>
    </div>
  );
}

export default Login;

