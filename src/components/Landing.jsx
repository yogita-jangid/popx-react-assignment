import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <h2>Welcome to PopX</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <button className="primary-btn" onClick={() => navigate("/signup")}>
        Create Account
      </button>

      <br /><br />

      <button className="secondary-btn" onClick={() => navigate("/login")}>
        Already Registered? Login
      </button>

    </div>
  );
}

export default Landing;
