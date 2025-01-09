import React from 'react';
import { useState } from 'react';
import ProductList from './ProductList';
function Filters(props) {
    const [lth,setLTH] = useState(false);
    const [htl,setHTL] = useState(false);
    return (
        <>
        <div className='container'>
            <div className='row'>
                <div className="col-3 col-sm-4 col-md-2 col-xl-1">
                    <div className="row">
                        <div className="col-12">
                            <ul>
                                <li><input type="radio" 
                                   checked={lth}
                                     name="price" id="" onClick={()=>{
                                    setLTH(true)
                                    setHTL(false)
                                    }
                                } />Low to High</li>
                                <li><input type="radio" 
                                 checked={htl}
                                name="price" id="" onClick={()=>{
                                    setHTL(true)
                                    setLTH(false)
                                    }
                                }/>High to Low</li> 
                            </ul>
                        </div>
                        <div className="col-12">
                            
                            </div>
                    </div>
                </div>
                <div className="col-9">
                   { lth ? ( <ProductList lth />) : ( <ProductList htl />) }
                </div>
            </div>
        </div>
        </>
    );
}

export default Filters;