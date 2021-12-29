import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header_search">
        <input type="text" class="header_searchInput"></input>
        {/*Logo*/}
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span class="header_optionLineOne">Hello Mithran</span>
          <span class="header_optionLineTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span class="header_optionLineOne">Returns</span>
          <span class="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span class="header_optionLineOne">Your</span>
          <span class="header_optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
