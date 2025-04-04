import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { LogInAPI } from "./LogInApi";
 

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    mobile: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      Swal.fire("Error", "Passwords do not match!", "error");
      return;
    }

    try {
      const response = await axios.post(LogInAPI, {
        email: formData.email,
        password: formData.password,
        mobile: formData.mobile
      });
      if (response.status === 201) {
        Swal.fire({
          title: "Success",
          text: "Registration successful! Redirecting to login...",
          icon: "success",
          timer: 2000,
          showConfirmButton: false
        }).then(() => {
          navigate("/login");
        });
        setFormData({ email: "", password: "", confirmPassword: "", mobile: "" });
      }
    } catch (error) {
      Swal.fire("Error", "Registration failed!", "error");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-5 text-center">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
