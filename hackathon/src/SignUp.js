import React, {useRef, useState} from 'react'
import {Form, Button, Card} from "react-bootstrap"
import {useAuth} from '../context/AuthContext'

export default function Signup(){
    const emailRef = useRef()
    const pwRef = useRef()
    const pwconfirmRef = useRef()
    const {signup} = useAuth()
    const[error, setError]=useState('')

    async function handleSubmit(e){
        e.preventDefault()

        if(pwRef.current.value!==pwconfirmRef.current.value){
            return setError('Passwords do not match')
        }
        try{
            setError('')
            await signup(emailRef.current.value, pwRef.current.value)
    } catch {
        setError('')
    }
    } 

    return(
        <>
       <Card>
           <Card.Body>
            <h2>Sign Up</h2>
            <Form>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={pwRef} required />
                </Form.Group>
                <Form.Group id="password-confirm">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" ref={pwconfirmRef} required />
                </Form.Group>
            </Form> <br/>
            <Button className="w-100" type="submit">Sign Up</Button>
            </Card.Body>       
       </Card>
        <div>
            Already have an account? <Link to="/Login">Log In</Link>
        </div>
         </>
    )
}
