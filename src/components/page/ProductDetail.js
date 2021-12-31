import React from 'react';
import { Link } from 'react-router-dom';
import ProductDetailContents from '../layout/ProductDeatailContents';

function ProductDetail() {
  return (
    <>
      <div class="page-title-area pt-150 pb-55">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="page-titel-detalis  ">
                <div class="section-title">
                  <h2>Shop Details</h2>
                </div>
                <div class="page-bc">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li
                        class="breadcrumb-item position-relative active"
                        aria-current="page"
                      >
                        <a href="shop_grid_right_sidebar.html">Shop List</a>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductDetailContents />

      <div class="description-area pt-65">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="description-tab ">
                <nav>
                  <div
                    class="nav nav-tabs justify-content-center"
                    id="approach-tab"
                    role="tablist"
                  >
                    <a
                      class="nav-item active mr-75"
                      id="nav-description-tab"
                      data-toggle="tab"
                      href="#nav-description"
                      role="tab"
                      aria-controls="nav-description"
                      aria-selected="true"
                    >
                      Description
                    </a>
                    <a
                      class="nav-item mr-75"
                      id="nav-comment-tab"
                      data-toggle="tab"
                      href="#nav-comment"
                      role="tab"
                      aria-controls="nav-comment"
                      aria-selected="false"
                    >
                      Addtional info
                    </a>
                    <a
                      class="nav-item"
                      id="nav-review-tab"
                      data-toggle="tab"
                      href="#nav-review"
                      role="tab"
                      aria-controls="nav-review"
                      aria-selected="false"
                    >
                      Reviews (2)
                    </a>
                  </div>
                </nav>
                <div class="tab-content mt-55 ml-100" id="nav-tabContent">
                  <div
                    class="tab-pane active "
                    id="nav-description"
                    role="tabpanel"
                    aria-labelledby="nav-description-tab"
                  >
                    <div class="row">
                      <div class="col-xl-8 col-lg-8 col-md-8">
                        <div class="description-text position-relative">
                          <p class="mb-25">
                            어머 이건 사야해..! 어머 이건 사야해..! 어머 이건
                            사야해..!어머 이건 사야해..! 어머 이건 사야해..!
                            어머 이건 사야해..! na
                          </p>
                          <p>
                            어머 이건 사야해..! 어머 이건 사야해..! 어머 이건
                            사야해..!
                          </p>
                        </div>
                      </div>
                      <div class="col-xl-4 col-lg-4 col-md-4 pl-md-0 pr-md-0">
                        <div class="description-size pt-5">
                          <h6>SIZE & FIT</h6>
                          <ul>
                            <li>Our Model wears a UK 8/ EU 36/ Us 4</li>
                            <li>Model is 170/ 5’7” Tall</li>
                            <li>
                              Shoulder seam to hem measures appox 58”/ 147 cm in
                              lengh
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane"
                    id="nav-comment"
                    role="tabpanel"
                    aria-labelledby="nav-comment-tab"
                  >
                    <div class="row">
                      <div class="col-xl-8 col-lg-8 col-md-8">
                        <div class="description-text position-relative">
                          <p class="mb-25">
                            어머 이건 사야해..! 어머 이건 사야해..! 어머 이건
                            사야해..! lacinia ultrices. 어머 이건 사야해..! 어머
                            이건 사야해..! 어머 이건 사야해..! na
                          </p>
                          <p>
                            어머 이건 사야해..! 어머 이건 사야해..! 어머 이건
                            사야해..!{' '}
                          </p>
                        </div>
                      </div>
                      <div class="col-xl-4 col-lg-4 col-md-4 pl-md-0 pr-md-0">
                        <div class="description-size pt-5">
                          <h6>SIZE & FIT</h6>
                          <ul>
                            <li>Our Model wears a UK 8/ EU 36/ Us 4</li>
                            <li>Model is 170/ 5’7” Tall</li>
                            <li>
                              Shoulder seam to hem measures appox 58”/ 147 cm in
                              lengh
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-review"
                    role="tabpanel"
                    aria-labelledby="nav-review-tab"
                  >
                    <div class="row">
                      <div class="col-xl-8 col-lg-8 col-md-8 position-relative">
                        <div class="description-text position-relative">
                          <p class="mb-25">
                            어머 이건 사야해..! 어머 이건 사야해..! 어머 이건
                            사야해..! 어머 이건 사야해..! 어머 이건 사야해..!{' '}
                          </p>
                          <p>
                            어머 이건 사야해..! 어머 이건 사야해..! 어머 이건
                            사야해..! 어머 이건 사야해..! .
                          </p>
                        </div>
                      </div>
                      <div class="col-xl-4 col-lg-4 col-md-4 pl-md-0 pr-md-0">
                        <div class="description-size pt-5">
                          <h6>SIZE & FIT</h6>
                          <ul>
                            <li>Our Model wears a UK 8/ EU 36/ Us 4</li>
                            <li>Model is 170/ 5’7” Tall</li>
                            <li>
                              Shoulder seam to hem measures appox 58”/ 147 cm in
                              lengh
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
