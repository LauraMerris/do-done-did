import {initializeApp} from "firebase/app";
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink, signOut } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const actionCodeSettings = {
    url: 'http://localhost:3000/confirm',
    handleCodeInApp: true,
  }

const signIn = async (email) => {
if (email=='') return;

try{
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    console.log("The link was successfully sent.");
    window.localStorage.setItem('emailForSignIn', email);
} catch(error) {
    const errorCode = error.code;
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
            window.localStorage.removeItem('emailForSignIn');
        }
    } catch (err){
        console.log(err);
    }
   

};

const getUser = () => {
    return auth.currentUser;
};

const signUserOut = () => {
    signOut(auth).then(() => {
        // do something
        console.log('sign out');
    }).catch((error) => {
        console.log(error);
    });
};

export {
    auth,
    signIn,
    signUserOut,
    confirmSignIn,
    getUser
}