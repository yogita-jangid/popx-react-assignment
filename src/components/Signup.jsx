import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="form-container">
      <h1 className="signup-title">
        Create your <br />
        PopX account
      </h1>

      <label>Full Name</label>
      <input placeholder="Marry Doe" />

      <label>Phone Number</label>
      <input placeholder="Marry Doe" />

      <label>Email Address</label>
      <input placeholder="Marry Doe" />

      <label>Password</label>
      <input type="password" placeholder="Marry Doe" />

      <label>Company Name</label>
      <input placeholder="Marry Doe" />

      <p className="agency-text">Are you an Agency?</p>

      <div className="radio-row">
         <label className="radio-label">
           <input type="radio" name="agency" />
           <span>Yes</span>
         </label>

         <label className="radio-label">
           <input type="radio" name="agency" />
           <span>No</span>
         </label>
     </div>


      <button className="primary-btn" onClick={() => navigate("/profile")}>
        Create Account
      </button>
    </div>
  );
}

export default Signup;

