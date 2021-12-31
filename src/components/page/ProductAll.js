import React, { useState } from 'react';
import axios from 'axios';
import CollectionItem from '../ui/CollectionItem';
import { useEffect } from 'react/cjs/react.development';

function ProductAll() {
  const [allItem, setAllItem] = useState();
  useEffect(() => {
    axios
      .get('http://localhost:8080/product/getAll')
      .then((res) => setAllItem(res.data));
  }, []);

  console.log(allItem);

  return (
    <>
      <div className="new-arrival shop-grid pt-110 ">
        <div className="container">
          <div className="col-xl-12 pb-50">
            <div className="toolbar-navi d-inline-block "></div>
            <nav
              className="construction-pagination float-right"
              aria-label="Page navigation example"
            >
              <ul className="pagination justify-content-center">
                <li className="page-item active">
                  <a className="page-link" href="index.html">
                    1
                  </a>
                  <span>page</span>
                </li>
              </ul>
            </nav>
          </div>
          <div class="arrival-product new-arrival-2 position-relative pt-45">
            <div class="row">
              {allItem &&
                allItem.map((item) => (
                  <CollectionItem key={item.id} item={item}/>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductAll;
