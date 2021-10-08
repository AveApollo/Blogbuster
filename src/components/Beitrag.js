import React, {useState, Redirect} from 'react'
import '../style/tailwind.css';
import '../style/main.css';
import { useAuth } from '../context/AuthContext.js';
import {Link, useHistory} from "react-router-dom"
import firebase from "../firebase.js"
import { long } from 'webidl-conversions';
import home from '../pictures/Home.png';
import beitrag from '../pictures/Beitrag.png';
import profil from '../pictures/profil.jpg';
import logo from '../pictures/Logo.png';

import handleLogout from './Dashboard.js'


const db = firebase.firestore()


function post() {
   alert("Erfolgreich gesendet!")
}

export default function Beitrag() {
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [loading, setLoading] = useState(false)
    
    const {currentUser, logout } = useAuth()
    const {currentBattery, setCurrentBattery} = useState('')

    const {cLat, sCLat} = useState('')
    const {cLong, sCLong} = useState('')

    const handleOnChangeTitle= e => {
        setNewTitle(e.target.value);
    };

    const handleOnChange = e => {
        setNewMessage(e.target.value);
    };

    const handleOnSubmit = e => {
        e.preventDefault();

        
        var currentdate = new Date();
        var datetime = 
                currentdate.getHours() + ":"  
                + currentdate.getMinutes() + "  /  "
                + currentdate.getDate() + "."
                + (currentdate.getMonth()+1)  + "." 
                + currentdate.getFullYear()
    
        if (db) {
        
                db.collection('messages').add({
                title: newTitle,
                text: newMessage,
                email: currentUser.email,
                createdAt: Date.now(),
                time: datetime

            })
        }
        const canVibrate = navigator.vibrate
        if (canVibrate) navigator.vibrate(600)
        post();
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

        <div class="align-middle pb-24" id="Beitrag">
            <form onSubmit={handleOnSubmit}>
            <div class="grid grid-cols-1 gap-4 justify-items-center">
            <div >
            <span class="text-gray-700">Titel</span>
            <input onChange={handleOnChangeTitle}class="shadow appearance-none border rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="titel" type="text" autocomplete="off" placeholder="Titel" value={newTitle}></input>
            </div>
            <div >
            <span class="text-gray-700">Text</span>
            <textarea onChange={handleOnChange} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="20" autocomplete="off" placeholder="Text" value={newMessage}></textarea>
            </div>
            <div >
            <button disabled={loading} class="bg-black hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded" type="submit">
            Post
            </button>
            </div>
            </div>
            </form>
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
