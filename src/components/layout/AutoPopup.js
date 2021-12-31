import React from 'react';

function AutoPopup() {
  return (
    <div
      id="autopopup-option"
      className="auto_popup position-fixed pt-100 pb-115"
    >
      <div id="close-button" className="position-absolute">
        <button className="bg-transparent">X</button>
      </div>
      <h3 className=" pb-15">Get Discount 30% Off</h3>
      <p>
        Get 20% discount with notified about the latest news and updates. No
        spam, we promise!
      </p>
      <form action="" className="subscribe-area text-center pt-20">
        <input type="email" placeholder="YOUR EMAIL" />
        <button>Subscribe</button>
      </form>
      <div className="checkbox text-center pt-35  position-relative">
        <label for="checkbox">
          <input type="checkbox" id="checkbox" />
          Don’st show this popup again
        </label>
      </div>
    </div>
  );
}

export default AutoPopup;
