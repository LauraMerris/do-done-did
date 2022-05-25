import './App.css';
import { 
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Intro from './routes/intro';
import Home from './routes/home';
import Login from './routes/login';
import Test from './routes/databasetest';
import { AuthProvider } from './firebase';
import Confirm from './routes/confirm';
import RequireAuth from './components/RequireAuth';


function App() {

  //const [user, setUser] = useState();
  //const [isLoading, setIsLoading] = useState(true);

  /*
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
  */
// user logged in check here
/*
  if (isLoading){
    return (
      <div>Currently Loading ...</div>
    )
  }
*/
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
          <Route path="/" element ={<Intro />} />
          <Route path="login" element={<Login/>} />
          <Route path="confirm" element={<Confirm/>} />
          <Route path="home" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="test" element={<Test/>} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
