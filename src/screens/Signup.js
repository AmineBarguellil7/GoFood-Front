import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const response =await fetch("http://localhost:4000/api/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),
    });
    const json=await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid credentials")
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
    <NavBar />
      <div className="container">
        <form className="row g-3" onSubmit={HandleSubmit}>
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={credentials.name}
              onChange={onChange}
            />
          </div>
          <div className="col-6">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="geolocation" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              name="geolocation"
              value={credentials.geolocation}
              onChange={onChange}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-success">
              Sign up
            </button>
            <Link to="/Login" className="m-3 btn btn-danger">
              Already a user
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
