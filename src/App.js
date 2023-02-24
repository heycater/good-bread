import React from "react";
import "./App.css";

function App() {
  return (
    <a
      href='https://thebreadgivers.com/'
      target="_top"
      className={`shop__button__goodbread_app goodbread__widget_placement__bottom`}
    >
      <div className="goodbread__widget_cta">
        <div className="goodbread__widget_cart">
          <img src="logo.png"/>
        </div>
        <div className="goodbread__widget_button-text">
          <img src="logo.png"/>
          <div className="goodbread__cta_caption">
            heycater! is helping Good Bread feed people in need in Ukraine <a href="google.com"> learn more.</a>
            <button> Donate via Paypal </button>
          </div>
        </div>
      </div>
    </a>
  );
}

export default App;
