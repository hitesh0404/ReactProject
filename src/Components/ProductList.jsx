import React, { useEffect, useState } from 'react';

function ProductList(props) {
  let { lth, htl } = props; // Destructure the props passed for filtering
  const [count, setCount] = useState(4); // Initial count for the first set of products
  const [data, setData] = useState([]); // Only one state variable for products
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    setIsLoading(true);
    if(data.length<=1){
    try {
      const res = await fetch('https://fakestoreapi.com/products/');
      setProducts(await res.json());
    } catch (err) {
      setIsError('Error fetching data: ' + err);
    }
  }
      setData(products.slice(0, count)); // Display only 'count' number of products
      if (lth) {
        data.sort((a, b) => a.price - b.price);     
      } else if (htl) {
        data.sort((a, b) => b.price - a.price);    
      }      
      setIsLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, [data,count, lth, htl]);  // Re-fetch when count, lth, or htl changes

  if (isLoading)
    return (
      <div>
        <div className="d-flex justify-content-center align-items-center">
          <div
            className="spinner-border text-primary spinner-border-sm"
            role="status"
            style={{ height: '100px', width: '100px', borderWidth: '20px', marginTop: '30%' }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        Loading...
      </div>
    );

  if (isError) return <div>{isError}</div>;

  return (
    <div>
      <h1>Product List (Count: {count})</h1>

      <div className="col-12">
        <div className="row">
          {data.map((product, index) => (
            <div className="col-3" key={index}>
              <div className="card text-white bg-primary">
                <img className="card-img-top" src={product.image} alt="Title" />
                <div className="card-body">
                  <h4 className="card-title" style={{ color: 'black' }}>
                    {product.title}
                  </h4>
                  <p className="card-text">{product.description.split(' ').slice(0, 10).join(' ')}...</p>
                  <p className="card-text">Price: ${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => {
          if(count<=(products.length-4))               
          setCount((prevCount) => prevCount + 4); 
          else 
            if(count<products.length)
              setCount((products.length)) 
        }}
      >
        Load More
      </button>
    </div>
  );
}

export default ProductList;
