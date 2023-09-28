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
            <div className="col mb-3" style={{ lineHeight: 1.8 }}>
              <h5>Thông tin liên hệ</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <p
                    style={{ fontSize: 14 }}
                    className="nav-link p-0 text-muted"
                  >
                    Địa chỉ:{"Cơ sở 1: Số 14 Trần vỹ, Cầu Giấy, Hà Nội"}
                  </p>
                  <p
                    style={{ fontSize: 14 }}
                    className="nav-link p-0 text-muted"
                  >
                    Địa chỉ:
                    {
                      "Cơ sở 2: 122 Phạm Văn Đồng, Phường 1, Gò Vấp, Thành Phố Hồ Chí Minh"
                    }
                  </p>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Hotline: 0822352890  - 0822361890
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <p
                    style={{ fontSize: 14 }}
                    className="nav-link p-0 text-muted"
                  >
                    Email: giadungquynhanh220@gmail.com
                  </p>
                </li>
              </ul>
            </div>

            <div className="col mb-3" style={{ lineHeight: 1.8 }}>
              <h5>Dịch vụ khách hàng</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a
                    style={{ fontSize: 14 }}
                    href="#"
                    className="nav-link p-0 text-muted"
                  >
                    Chính sách vận chuyển
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    style={{ fontSize: 14 }}
                    href="#"
                    className="nav-link p-0 text-muted"
                  >
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
