import {useEffect, useState} from 'react';
import {confirmSignIn} from "../firebase";
import { useNavigate } from 'react-router-dom';

const Confirm = () => {

    const [message, setMessage] = useState('Checking your status...');
    const navigate = useNavigate();

    useEffect(() => {
        // sign in the user if they landed here after email sign in
        confirmSignIn(window.location.href)
            .then((isNewUser) => {             
                if (!isNewUser){
                    navigate("/home");
                }
                setMessage("You're signed in. Welcome - here are some onboarding instructions.")
            })
            .catch(error => {
                console.log(error);
                setMessage("Sorry, something went wrong. Please try logging in again.")
            })
    },[]);
    
    return (
        <div className="Skeleton">
            <header className="">
            </header>
            <div className="Skeleton__content">
                <h1>
                    Do Done Did
                </h1>
                <div>
                    <p>{message}</p>
                </div>
            </div>
        </div>
    )
}

export default Confirm;