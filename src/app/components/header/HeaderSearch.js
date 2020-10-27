import React from "react";
import ArrowDown from "../svg-icons/ArrowDown";
import CartIcon from "../svg-icons/CartIcon";

const HeaderSearch = () => {
  return (
    <div className="d-flex align-items-center justify-content-between header-search">
      <div className="d-flex align-items-center">
        <div className="text-green">info@valafortjant.se</div>
        <div className="text-green ml-3">076 303 63 26</div>
      </div>
      <div className="d-flex align-items-center">
        <div className="header-account_circle">
          <img src="/images/icons/user.png" alt="account" />
        </div>
        <div className="header-arrow-icon mx-3">
          <ArrowDown />
        </div>
        <div className="header-cart-icon">
          <CartIcon />
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
