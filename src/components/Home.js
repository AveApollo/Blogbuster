import React, {useState, useEffect} from 'react'
import {useAuth} from '../context/AuthContext.js'
import '../style/tailwind.css';
import '../style/main.css';


const Home = ({user = null, db = null}) => {
    const {currentUser, logout } = useAuth()
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (db) {
            const unsubscribe = db.collection('messages').orderBy('createdAt', 'desc').limit(100).onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => ({
                    ... doc.data(),
                    id: doc.id,
                }))

                setMessages(data);
            })

            return unsubscribe;
        }

    }, [db]);

    return(
        <div>
            <div class="grid grid-cols-1 gap-4 pb-28">
                {messages.map(messages => (


                <div class="bg-white rounded-lg p-6 w-104 border-2 border-black">
                    <div class="flex items-center space-x-6 mb-4">
                         <div>
                          <p class="text-xl text-gray-700 font-normal mb-1">{messages.title}</p>
                          <p class="text-base text-yellow-400 font-normal">{messages.email}</p>
                     </div>
                    </div>
                <div id="wordbreak">
             <p id="flex" class="text-black leading-loose font-normal text-base">{messages.text}</p>
             <p id="timefont">{messages.time}</p>
                </div>
                </div>
                    
                ))
                 }
            </div>
        </div>
    )
}

export default Home;