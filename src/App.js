import './App.css';
import { 
  BrowserRouter,
  Routes,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Intro from './routes/intro';
import Home from './routes/home';
import Login from './routes/login';
import { useState, useEffect, createContext } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Confirm from './routes/confirm';
import UserContext from './userContext'


function App() {

  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authenticatedUser) => {
      try{
        await (authenticatedUser ? setUser(authenticatedUser) : setUser(null));
        setIsLoading(false);
      } catch(error){
        console.log(`authentication error: ${error}`);
        setIsLoading(false);
      }
    });

    return unsubscribe;

  },[]);
// user logged in check here

  if (isLoading){
    return (
      <div>Currently Loading ...</div>
    )
  }

  return (
    <UserContext.Provider value={{user}}>
      <BrowserRouter>
      <Routes>
          <Route path="/" element ={<Intro />} />
            <Route path="home" element={<Home />} />
          <Route path="login" element={<Login/>} />
          <Route path="confirm" element={<Confirm/>} />

      </Routes>
    </BrowserRouter>
  </UserContext.Provider>
  );
}

export default App;
