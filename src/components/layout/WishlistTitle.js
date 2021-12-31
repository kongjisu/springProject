import React from 'react';

function WishlistTitle() {
  return (
    <div class="page-title-area pt-150 pb-55">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="page-titel-detalis  ">
              <div class="section-title">
                <h2>Wishlist</h2>
              </div>
              <div class="page-bc">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li
                      class="breadcrumb-item position-relative active"
                      aria-current="page"
                    >
                      <a href="my_wishlist.html">Wishlist</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishlistTitle;
