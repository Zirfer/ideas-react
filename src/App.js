import { lazy, useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const Login = lazy(() => import('./components/Login'));
const Home = lazy(() => import('./components/Home'));

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState()

  useEffect(() => {
    const handleLogin = async () => {
      const config = {
        url: '/back/getLogin.php',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      };
      axios.request(config)
        .then(function (res) {
          setIsAuthenticated(res.data.data)
        })
    }
    handleLogin()
  }, [])

  return (
    <div>
      {
        isAuthenticated ? <Home /> : <Login />
      }
    </div>
  );
}

export default App;
