import React, { useEffect, useState } from 'react';

function ProductList(props) {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [isError,setIsError] = useState(false);
  console.log(props);
  async function  doSomething() {
    setIsLoading(true);
   await fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(json => setData(json)) 
      .catch(err => setIsError('Error fetching data:'+ err)); // Catch errors
    setIsLoading(false);
   
  }

  useEffect(() => {
    doSomething();  
   
  }, [count,]);  

  if(isLoading)
    return (<div >
      <div
        class="d-flex justify-content-center align-items-center"
      >
        <div
          className="spinner-border text-primary spinner-border-sm"
          role="status"
          style={{height:"100px", width:"100px", borderWidth :"20px",marginTop:"30%"}}
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      Loading...</div>)

  if(isError)
    return (<div>{isError}</div>)

  return (
    <div>
    <h1>All Product List (Count: {count})</h1>
    <button 
      type="button" 
      onClick={() => {
        setCount(prevCount => prevCount + 3);  // Increase count by 3 in one update
      }}
    >
      Click here to increase
    </button>
    
      <div className='col-12'>
        <div className="row">
          {data.map((product, index) => (
            <div className='col-3'>
            <div className="card text-white bg-primary">
              <img className="card-img-top" src={product.image} alt="Title" />
              <div className="card-body">
                <h4 className="card-title" style={{color:"black"}} >{product.title}</h4>
                <p className="card-text">{product.description.split(' ').slice(0,10)+'...'}</p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
