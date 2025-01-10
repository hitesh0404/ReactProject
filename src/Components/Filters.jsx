import React, { useState } from 'react';
import ProductList from './ProductList';

function Filters() {
  const [lth, setLTH] = useState(false);
  const [htl, setHTL] = useState(false);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <ul>
              <li>
                <input
                  type="radio"
                  checked={lth}
                  name="price"
                  onClick={() => {
                    setLTH(true);
                    setHTL(false);
                  }}
                />
                Low to High
              </li>
              <li>
                <input
                  type="radio"
                  checked={htl}
                  name="price"
                  onClick={() => {
                    setHTL(true);
                    setLTH(false);
                  }}
                />
                High to Low
              </li>
            </ul>
          </div>

          <div className="col-9">
            <ProductList lth={lth} htl={htl} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Filters;
