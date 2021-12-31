import React from 'react';

function ScrollTop() {
  return (
    <>
      <div
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        id="scrollToTop"
        className="scrollTop"
      >
        <i className="las la-arrow-up"></i>
      </div>
    </>
  );
}

export default ScrollTop;
