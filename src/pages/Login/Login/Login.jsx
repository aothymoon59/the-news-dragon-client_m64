import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/category/0";

  console.log("login page location", location);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    setError("");
    setSuccess("");

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setSuccess("successfully login");
        setError("");
        console.log(loggedUser);
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((err) => {
        console.log(err.message);
        setSuccess("");
        setError(err.message);
      });
  };
  return (
    <Container className="w-25 mx-auto">
      <h3>Please Login</h3>
      <Form onSubmit={handleSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Don't Have An Account ?<Link to="/register">Register</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
      <p className="text-success">{success}</p>
      <p className="text-danger">{error}</p>
    </Container>
  );
};

export default Login;
