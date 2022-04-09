
import { useState } from "react";
import { signIn } from "../firebase";

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