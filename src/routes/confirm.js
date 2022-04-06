import {useEffect, useState} from 'react';
import {confirmSignIn, getUser } from "../firebase";
import UserContext from '../userContext';

const Confirm = () => {

    const [welcomeMessage, setWelcomeMessage] = useState('Checking your status');

    useEffect(() => {
        // sign in the user if they landed here after email sign in
        confirmSignIn(window.location.href)
            .then((result) => {
                console.log('signed in');
                setWelcomeMessage('signed in')
            })
            .catch(error => console.log(error))
    },[])
    
    return (
        <div className="Skeleton">
            <header className="">
            </header>
            <div className="Skeleton__content">
                <h1>
                    Do Done Did
                </h1>
                <div>
                    <p>{welcomeMessage}</p>
                    <UserContext.Consumer>
                        {(user) => (
                            <span>Hello {user.uid}</span>
                        )}                    
                    </UserContext.Consumer>
                </div>
            </div>
        </div>
    )
}

export default Confirm;