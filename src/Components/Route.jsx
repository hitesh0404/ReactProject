import { createBrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import ProductList from './ProductList';
export default function Route() {

  return createBrowserRouter([

    { path: '/',
        element: (<>   <Navbar />  <Home />  </>),
      },
    { path: '/product-list',
        element: (<>   <Navbar />  <ProductList />  </>),
      },
    
  ]);
}