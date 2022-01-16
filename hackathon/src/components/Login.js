import React, { useRef, useState } from "react"
import { Form, Button, Card } from "react-bootstrap"
import { useAuth } from "../context/AuthContext"
import { Link} from "react-router-dom"

export default function Login() {
  const emailRef = useRef()
  const pwRef = useRef()
  const { login } = useAuth()
  const [setError] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      await login(emailRef.current.value, pwRef.current.value)
    } catch {
      setError("Failed to log in")
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={pwRef} required />
            </Form.Group>
            <Button className="w-100" type="submit">Log In</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}
