import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // SweetAlert for notifications
import { LogInAPI } from "./LogInApi";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(LogInAPI)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          console.error("Unexpected API response:", data);
          setUsers([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setUsers([]);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = users.find((user) => user.email === email && user.password === password);

    if (!user) {
      Swal.fire("Error", "Invalid email or password!", "error");
    } else {
      Swal.fire("Success", "Login successful!", "success");
      localStorage.setItem("auth", "true"); // Store login session
      navigate("/aa"); // Redirect to home page
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card p-4">
            <h3 className="text-center">Login</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Sign In</button>
            </form>
            <div className="text-center mt-3">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
