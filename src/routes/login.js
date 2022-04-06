
// these are v8 compat imports because of using the firebase UI
/* import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css'; */


// Your web app's Firebase configuration
/* const firebaseConfig = {
apiKey: process.env.REACT_APP_API_KEY,
authDomain: process.env.REACT_APP_AUTH_DOMAIN,
projectId: process.env.REACT_APP_PROJECT_ID,
storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
appId: process.env.REACT_APP_APP_ID
}; */

// Initialize Firebase and auth
// This is the old v8 code in order to be able to use firebase ui
/* firebase.initializeApp(firebaseConfig);

var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
    signInSuccessUrl: '/home',
    signInFlow: 'redirect',
    signInOptions: [
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
      }
    ],
    tosUrl: '',
    privacyPolicyUrl: '',
}

if (ui.isPendingRedirect()){
  ui.start('#firebaseui-auth-container', uiConfig);
} */

import { useEffect, useState } from "react";
import {auth, signIn, signOut, confirmSignIn, getUser } from "../firebase";

const Login = () => {

  const [email, setEmail] = useState('');


  return (
    <div className="Skeleton">
      <header className="">
      </header>
      <div className="Skeleton__content">
        <h1>
          Do Done Did
        </h1>
        <div className="Login">
          <label htmlFor="Login__email">Email</label>
          <input placeholder="youremail@test.com" id="Login__email" className="Login__email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <button className="Login__button" onClick={() => signIn(email)}>Log in</button>
          <div className="Login__message"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;