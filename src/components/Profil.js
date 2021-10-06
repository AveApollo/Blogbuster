import React from 'react'
import {useAuth} from '../context/AuthContext.js'
import { Link, useHistory } from "react-router-dom"
import '../style/main.css';
import ProfilUi from "./ProfilUi"
import firebase from "../firebase.js"
import Home from "./Home.js"

import home from '../pictures/Home.png';
import beitrag from '../pictures/Beitrag.png';
import profil from '../pictures/profil.jpg';
import logo from '../pictures/Logo.png';

export default function Dashboard() {
const {currentUser, logout } = useAuth()
const history = useHistory()
const db = firebase.firestore()

    async function handleLogout() {
        await logout()
        history.push('/login')
    }

    return (
        <div>
        <div id="header" class="grid grid-cols-3 gap-4 border-b-2 pb-2 border-black items-center justify-center ">
        <div >
        <button id="centerheader" variant="Link" onClick={handleLogout} class="bg-black hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-full">
        Log Out
        </button>
        </div>
        <img id="centerheader" src={logo} ></img>
        <h1 id="centerheader" class="text-black">Account: {currentUser.email}</h1>
        </div>

        <div class="flex pt-5 items-center justify-center">
        <ProfilUi user={currentUser} db={db} />
        </div>

        <div id="footer" class="grid grid-cols-3 gap-4">
            <a href="/">
            <img id="center" src={home} ></img>
            </a>
            <a href="/beitrag">
            <img id="center" src={beitrag} ></img>
            </a>
            <a href="/profil">
            <img id="center" src={profil} ></img>
            </a>
            
        </div>
        
        </div>
        
    )
}

//<button variant="Link" onClick={handleLogout}>Log Out</button>
//<strong>Email</strong> {currentUser.email}