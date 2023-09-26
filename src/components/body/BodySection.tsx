import React, { useState } from "react";
import "../../App.css";
import "../../style/animation.css";
import "../../style/carousel.css";
import PrImg1 from "../../assets/images/VIÊN NÉN OXI/1.png";
import PrImg2 from "../../assets/images/VIÊN NÉN OXI/2.png";
import PrImg3 from "../../assets/images/VIÊN NÉN OXI/3.png";
import PrImg4 from "../../assets/images/VIÊN NÉN OXI/4.png";
import PrImg5 from "../../assets/images/VIÊN NÉN OXI/5.png";
import PrImg6 from "../../assets/images/VIÊN NÉN OXI/6.png";
import PrImg7 from "../../assets/images/VIÊN NÉN OXI/7.png";
import deli from "../../assets/images/icons8-delivery-32.png";
import check from "../../assets/images/icons8-check-32.png";
import cart from "../../assets/images/icons8-cart-32.png";
import rate from "../../assets/images/icons8-star-rate-32.png";
import like from "../../assets/images/icons8-like-32.png";
import arrowNex from "../../assets/images/icons8-arrow-50.png";
import arrowPre from "../../assets/images/icons8-arrow-50 (1).png";
import useOrder from "../../hooks/useOrder";

const BodySection: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState("1");
  const { createOrder } = useOrder();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("customerName", name);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("quantity", quantity.toString());

    createOrder(formData);
    
    console.log(formData);
    setName("");
    setPhone("");
    setAddress("");
    setQuantity("1");
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [PrImg1, PrImg2, PrImg3, PrImg4, PrImg5, PrImg6, PrImg7];

  const updateMainImage = (index: number) => {
    setCurrentIndex(index);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="body-section">
      <div className="details">
        <div className="about-product">
          <div className="text">
            <p>VIÊN SỦI OXY TẨY RỬA ĐA NĂNG</p>
            <p style={{ color: "red" }}>CÔNG NGHỆ NHẬT BẢN</p>
            <p>AN TOÀN - HIỆU QUẢ</p>
          </div>

          <p>4.9 ⭐⭐⭐⭐⭐ | 39 Đánh giá | 2,9k Đã bán</p>
          <div className="price">
            <p
              style={{
                textDecoration: "line-through",
                fontSize: "18px",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Giá Bán: <span>250.000</span>đ
            </p>
            <p
              style={{
                color: "rgba(231, 16, 16, 1)",
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              58.000 vnđ từ 4 đơn
            </p>
          </div>
        </div>
        <div className="animation">
          <p className="text-animation">
            ( Là sản phẩm tẩy rửa được ưa chuộng và bán chạy nhất năm 2023 )
          </p>
        </div>
        <div className="product-img">
          <div className="carousel-container">
            <div className="main-image">
              <img src={images[currentIndex]} alt="Main Image" />
            </div>
            <div className="mini-list">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Mini Image ${index + 1}`}
                  onClick={() => updateMainImage(index)}
                />
              ))}
            </div>
            <button className="prev-button" onClick={prevImage}>
              <img
                src={arrowPre}
                alt=""
                style={{ width: "32px", objectFit: "cover" }}
              />
            </button>
            <button className="next-button" onClick={nextImage}>
              <img
                src={arrowNex}
                alt=""
                style={{ width: "32px", objectFit: "cover" }}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="order">
        <div className="order-details">
          <p style={{ fontSize: "24px", color: "red", fontWeight: "bold" }}>
            THÔNG TIN ĐẶT HÀNG
          </p>
          <div
            style={{
              color: "rgba(43, 39, 231, 1)",
              fontSize: "20px",
              fontWeight: "bold",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>MUA 1 HỘP 99K + 30k SHIP</p>
            <p>
              MUA 2 HỘP TẶNG <span style={{ color: "red" }}>1 HỘP 199K</span> +
              MIỄN SHIP
            </p>
            <p>
              MUA 3 HỘP TẶNG <span style={{ color: "red" }}>1 HỘP 270K</span> +
              MIỄN SHIP
            </p>
            <p>
              MUA 4 HỘP TẶNG <span style={{ color: "red" }}>2 HỘP 350K</span> +
              MIỄN SHIP
            </p>
          </div>
          <p
            style={{
              color: "rgba(156, 39, 176, 0.9)",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            MỘT HỘP CÓ 10 VIÊN
          </p>
          <p className="rubberband">Hoàn tiền 100% nếu không hiệu quả</p>
        </div>
        <form id="myForm" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            required
            placeholder="Họ và Tên"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            id="phoneNumber"
            required
            placeholder="Số điện thoại"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            id="address"
            required
            placeholder="Địa chỉ"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <select
            id="quantity"
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "5px",
              border: "none",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
            }}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            <option value="1">Mua 1 hộp 99k + 30k ship</option>
            <option value="2">Mua 2 hộp tặng 1 hộp: 199k + free ship</option>
            <option value="3">Mua 3 hộp tặng 1 hộp: 270k + free ship</option>
            <option value="4">Mua 4 hộp tặng 2 hộp: 350k + free ship</option>
          </select>

          <button type="submit" className="btn-submit">
            Đặt mua ngay
          </button>
        </form>
        <ul style={{ width: "80%", margin: "auto" }}>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <div>
              <img src={deli} alt="" className="web-icon" />
            </div>
            <p style={{ width: "80%" }}>Giao hàng toàn quốc miễn phí</p>
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <div>
              <img src={check} alt="" className="web-icon" />
            </div>
            <p style={{ width: "80%" }}>Được kiểm tra hàng</p>
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <div>
              <img src={cart} alt="" className="web-icon" />
            </div>
            <p style={{ width: "80%" }}>Nhận hàng mới phải thanh toán</p>
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <div>
              <img src={rate} alt="" className="web-icon" />
            </div>
            <p style={{ width: "80%" }}>Sản phẩm uy tín, chất lượng</p>
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <div>
              <img src={like} alt="" className="web-icon" />
            </div>
            <p style={{ width: "80%" }}>Sản phẩm mới, hạn dùng 3 năm</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BodySection;
