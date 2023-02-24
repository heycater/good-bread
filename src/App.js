import React from "react";
import "./App.css";
import Cart from "./Cart";

function App() {
  return (
    <a
      href='https://thebreadgivers.com/'
      target="_top"
      className={`shop__button__goodbread_app goodbread__widget_placement__bottom`}
    >
      <div className="goodbread__widget_cta">
        <div className="goodbread__widget_cart">
          <Cart />
        </div>
        <div className="goodbread__widget_button-text">
          Order here!
        </div>
      </div>
    </a>
  );
}

export default App;
