import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    console.log(name, photo, email, password);
    setError("");
    setSuccess("");
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        setSuccess("successfully registered");
        updateUserData(createdUser, name, photo);
        setError("");
        form.reset();
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.message);
        setSuccess("");
        setError(err.message);
      });
  };

  const updateUserData = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        console.log("user profile updated");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleAccepted = (e) => {
    setAccepted(e.target.checked);
  };

  return (
    <Container className="w-25 mx-auto">
      <h3>Please Resister</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Photo url here"
            required
          />
        </Form.Group>
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
            placeholder="Create password (Min. 8 Characters)"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
            title="Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleAccepted}
            type="checkbox"
            name="accept"
            label={
              <>
                Accept <Link to="/terms">Term & Conditions</Link>
              </>
            }
          />
        </Form.Group>
        <Button disabled={!accepted} variant="primary" type="submit">
          Register
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Already have an account ?<Link to="/login">Login</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
      <p className="text-success">{success}</p>
      <p className="text-danger">{error}</p>
    </Container>
  );
};

export default Register;
