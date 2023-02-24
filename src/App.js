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
          <img alt='goodbread' src="logo.png"/>
        </div>
        <div className="goodbread__widget_button-text">
          <img alt='goodbread' src="logo.png"/>
          <div className="goodbread__cta_caption">
            <p className="goodbread__cta_caption__text">heycater! is helping Good Bread feed people in need in Ukraine</p>
            <div className="goodbread__cta_caption__action">
               <a className="goodbread__cta_caption__blog_link" href="google.com">Read blog article -></a>
              <a className="goodbread__cta_caption__action_btn" href="https://www.paypal.com/donate/?hosted_button_id=WUNX7PBP2J6GQ"> Donate via Paypal </a>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default App;
