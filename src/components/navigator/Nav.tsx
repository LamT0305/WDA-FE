import React from "react";
import Logo from "../../assets/images/logo.jpg";
import "../../App.css"

const Nav: React.FC = () => {
  return (
    <section className="navigation">
      <div className="container-fluid">
        <div className="logo">
          <img src={Logo} alt="Logo" className="img-fluid" />
          <a className="navbar-brand" href="#">
            Gia dụng Quỳnh Anh
          </a>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
              Trang chủ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Giới thiệu
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Tin tức
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Thương hiệu
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Liên hệ
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Nav;
