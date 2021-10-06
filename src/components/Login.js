import React, {useRef, useState} from 'react'
import '../style/tailwind.css';
import '../style/main.css';
import logo from '../pictures/Logo.png';
import { useAuth } from '../context/AuthContext.js';
import {Link, useHistory} from "react-router-dom"

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
          }
        catch (error) { 
        setError("Failed to login")
        }
      
          setLoading(false)
        
    }

    return (
    <div id="SignUpCardMail">
    <div>
        <img src={logo} width={300} heigth={300} />
        <form onSubmit={handleSubmit} class="w-full max-w-sm">
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="grid-email">
              E-Mail
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="grid-email" type="email" ref={emailRef}/>
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="grid-passwort">
              Password
            </label>
          </div>
          <div class="md:w-2/3">
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="grid-passwort" type="password" ref={passwordRef}/>
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button disabled={loading} class="bg-black hover:bg-white hover:outline-black focus:outline-none hover:text-black text-white font-light py-2 px-4 rounded" type="submit">
              Log In
            </button>
          </div>
        </div>
      </form>
      <Link to="/signup">Registrieren</Link>
    </div>
    </div>
        
    )
    
}
