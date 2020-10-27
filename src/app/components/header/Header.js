import React from "react";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  return (
    <div className="header-main">
      <HeaderSearch />
      <div className="d-flex align-items-center justify-content-between">
        <h3 className="brand mt-3">Valafortjant</h3>
        <div className="d-flex align-items-center">
          <a href="#" className="header-link">
            Om Oss
          </a>
          <a href="#" className="header-link">
            Samarbetspartners
          </a>
          <a href="#" className="header-link">
            Mer
          </a>
          <a href="#" className="header-link active">
            Anmal ditt intresse
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
