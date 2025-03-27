import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const API_BASE = "https://server-node-eef9.onrender.com";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    agreeTerms: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      console.log("Sending Data:", formData);
      
      const response = await fetch(`${API_BASE}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      console.log("Server Response:", data);
  
      if (!response.ok) throw new Error(data.error || "Registration failed ❌");
  
      toast.success("✅ Registration Successful!");
      setFormData({ username: "", email: "", password: "", address: "", phone: "", agreeTerms: false });
    } catch (error) {
      console.error("Error in Registration:", error);
      toast.error(error.message || "Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="register-container">
      <div className="register">
        <form className="form-block" autoComplete="off" onSubmit={handleSubmit}>
          <center>
            <h5 className="titilereg">
              SignUp <br />
              <span className="actext">Welcome to SteadyDuskApp</span>
            </h5>
          </center>
          <div>
            <input
              className="form-item"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
              required
            />
          </div>

          <div>
            <input
              className="form-item"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
          </div>

          <div>
            <input
              className="form-item"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
          </div>

          <div>
            <input
              className="form-item"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
              required
            />
          </div>

          <div>
            <input
              className="form-item"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone Number"
              required
            />
          </div>

          <button className="sub" type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>

          <div>
            <Toaster position="top-right" reverseOrder={false} />
          </div>

          <div className="policy">
            By clicking Sign up you agree to our
            <a href=""> Terms of Use</a> and <a href="">Privacy policy.</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
