// components/Signup.js

import React, { useState } from "react";
import axios from "axios";
import "../styles/login.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        username,
        password,
      });
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="main">
      <h1 className="text-lg font-extrabold">Sign Up</h1>
      <form onSubmit={onSubmit}>
        <input
          className="username"
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={onChange}
          required
        />
        <input
          className="pass"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
          minLength="6"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
