import React from 'react';

function ProductList(props) {
    const data = fetch('https://fakestoreapi.com/products/1')
    .then(res=>res.json())
    .then(json=>json)
    
    return (
        <div>
            <h1>All Product List</h1>
            <p>{data}</p>
        </div>
    );
}

export default ProductList;