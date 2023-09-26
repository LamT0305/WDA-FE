import "../../App.css";
import React from "react";
import Logo from "../../assets/images/logo.jpg";

const Footer: React.FC = () => {
  return (
    <section className="footer">
      <div className="container">
        <footer>
          <div className="logo-footer">
            <img
              src={Logo}
              alt=""
              className="img-fluid"
              width="50px"
              style={{ marginRight: "10px" }}
            />
            <a className="navbar-brand" href="#" style={{ color: "white" }}>
              Gia dụng Quỳnh Anh
            </a>
          </div>
          <div className="wrapper">
            <div className="col mb-3">
              <h5>Thông tin liên hệ</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Địa chỉ:{" "}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Hotline:
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Email:
                  </a>
                </li>
              </ul>
            </div>

            <div className="col mb-3">
              <h5>Dịch vụ khách hàng</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Chính sách vận chuyển
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Chính sách bảo mật
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
