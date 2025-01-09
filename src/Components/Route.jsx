import { createBrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
// import ProductList from './ProductList';
import Filters from './Filters';
export default function Route() {
  return createBrowserRouter([

    { path: '/',
        element: (<>   <Navbar />  <Home />  </>),
      },
    { path: '/product-list',
        element: (<>   <Navbar /> <Filters />   </>),
      },
    
  ]);
}