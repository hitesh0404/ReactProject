import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {RouterProvider} from 'react-router-dom';
import Route from './Components/Route';
function App() {
  return (
   <>
   <RouterProvider router={Route()} />
   {/* <Navbar />
   <Home /> */}
    </>
  );
}

export default App;
