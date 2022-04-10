
import { useState } from "react";
import { signIn } from "../firebase";

const Login = () => {

  const [email, setEmail] = useState('');


  return (
      <div className="SignIn">
              <div class="SignIn__title">
                  Do Did Done.
              </div>
              <div class="SignIn__content">
                <div class="Popup">
                  <h2 class="Popup__title">Sign in to start recording your wins.</h2>
                  <div class="Popup__content">
                    <div className="Popup__action">
                      <div class="Login">
                        {/*<h2 class="Login__title">
                          
                        </h2>*/}
                        <label htmlFor="Login__email" class="Login__label">Email</label>
                        <input type="email" placeholder="j.kirk@enterprise.com" id="Login__email" className="Login__email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <button className="Login__button" onClick={() => signIn(email)}>Sign in</button>
                      </div>
                    </div>
                    <div class="Popup__info">
                      <div>
                        <p>1. Enter your email address</p>
                        <p>2. We'll send you a unique link to sign in</p>
                        <p>3. That's all - no password needed.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
  );
}

export default Login;