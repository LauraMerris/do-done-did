import {initializeApp} from "firebase/app";
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink, signOut, onAuthStateChanged, getAdditionalUserInfo } from "firebase/auth";
import { getDatabase, connectDatabaseEmulator } from "firebase/database";
import { createContext, useContext, useEffect,useState } from "react";
import UserContext from "./userContext";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    //databaseURL: "https://dodonedid-57696-default-rtdb.europe-west1.firebasedatabase.app",
    databaseURL: `http://localhost:9000?ns=${process.env.REACT_APP_PROJECT_ID}`,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getDatabase();

if (window.location.hostname === "localhost"){
    connectDatabaseEmulator(db, "localhost", 9000);
}

const actionCodeSettings = {
    url: 'http://localhost:3000/confirm',
    handleCodeInApp: true,
}

const signIn = async (email) => {
    if (email==='') return;

    try{
        await sendSignInLinkToEmail(auth, email, actionCodeSettings);
        console.log("The link was successfully sent.");
        window.localStorage.setItem('emailForSignIn', email);
    } catch(error) {
        const errorMessage = error.message;
        console.log(errorMessage);
        //throw error here
    }
};

const confirmSignIn = async (url) => {

    try{
        if (isSignInWithEmailLink(auth, url)){
            let email = window.localStorage.getItem('emailForSignIn');

            if (!email){
                // confirmation happened on a different device - prompt
                email = window.prompt('Please provide your email for confirmation');
            }

            const result = await signInWithEmailLink(auth, email, url);
            const { isNewUser } = getAdditionalUserInfo(result);
            window.localStorage.removeItem('emailForSignIn');

            return isNewUser;
        }
    } catch (err){
        console.log(err);
        throw new Error(err);
    }
};

const signUserOut = () => {
    signOut(auth).then(() => {
        console.log('signed out');
    }).catch((error) => {
        console.log(error);
    });
};

const authContext = createContext();

const AuthProvider = ({children}) => {
    const [authedUser, setAuthedUser] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, setAuthedUser, setError);
        return unsubscribe;
    
    },[]);

    return <authContext.Provider value={authedUser}>{children}</authContext.Provider>
} 

const useAuthState = () => {
    return useContext(authContext);
}


export {
    auth,
    signIn,
    signUserOut,
    confirmSignIn,
    AuthProvider,
    useAuthState,
    db
}