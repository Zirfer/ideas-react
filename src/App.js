import { lazy, useState } from 'react';
import './App.css';

const Login = lazy(() => import('./components/Login'));
const Home = lazy(() => import('./components/Home'));

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <div>
      {
        isAuthenticated ? <Home /> : <Login />
      }
    </div>
  );
}

export default App;
