import React from "react";
import CS1 from "../../assets/images/smartphone-chup-selfie-16-mp-gia-49-trieu-dong-tai-viet-nam-505f29.jpg";
import CS2 from "../../assets/images/teacher-home-learning-vietnamese-and-everything-about-vietnam-with-native-vietnamese-speaker-hobart.jpg";
import CS3 from "../../assets/images/community_667_1496392676.jpg";
import "../../App.css";

const CommentSection: React.FC = () => {
  return (
    <section className="comment">
      <div className="comment-body">
        <h2
          style={{
            color: "rgba(88, 87, 87, 1)",
            fontSize: "32px",
            fontWeight: "bold",
          }}
        >
          Tất cả bình luận
        </h2>
        <div
          className="filter"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              color: "rgba(60, 60, 60, 1.000)",
              fontSize: "16px",
              fontWeight: 600,
              lineHeight: 1,
              textAlign: "left",
            }}
          >
            456 Bình luận
          </p>
          <div className="options">
            <label
              htmlFor="fruit"
              style={{
                color: "rgba(60, 60, 60, 1.000)",
                fontSize: "16px",
                textAlign: "left",
              }}
            >
              Sắp xếp theo
            </label>
            <select id="fruit" name="fruit">
              <option value="apple">Mới nhất</option>
              <option value="banana">Tất cả</option>
              <option value="cherry">Phù hợp nhất</option>
            </select>
          </div>
        </div>
        <hr style={{ opacity: 0.5 }} />
      </div>

      <div className="user-cmt">
        <ul>
          <li className="user-list">
            <div className="avt">
              <img src={CS1} alt="" />
            </div>
            <div className="cmt">
              <p className="user-name">Vy Trần</p>
              <p>⭐⭐⭐⭐⭐</p>
              <p>
                Dùng tốt lắm nhé shop, mấy bộ ấm chén nhà mình bây giờ không còn
                mấy công cọ rửa như trước nữa, cứ thả vào thau nước, vứt 2 viên
                vào là sạch bóng
              </p>
              <div className="react-time">
                <p
                  style={{
                    color: "rgba(67, 102, 176, 1.000)",
                    fontSize: "14px",
                  }}
                >
                  <span className="icon-before">Thích - Phản hồi </span>3 giờ
                  trước
                </p>
              </div>
            </div>
          </li>
          <li className="user-list">
            <div className="avt">
              <img src={CS2} alt="" />
            </div>
            <div className="cmt">
              <p className="user-name"> Kim Thảo verus</p>
              <p>⭐⭐⭐⭐⭐</p>
              <p>
                Mới nhận hôm qua, tẩy cái máy giặt, hết hôi hẳn , dùng ngon hơn
                cả mấy loại được quảng cáo là chuyên cho máy giặt hay mua.
              </p>
              <div className="react-time">
                <p
                  style={{
                    color: "rgba(67, 102, 176, 1.000)",
                    fontSize: "14px",
                  }}
                >
                  <span className="icon-before">Thích - Phản hồi </span>5 giờ
                  trước
                </p>
              </div>
            </div>
          </li>
          <li className="user-list">
            <div className="avt">
              <img src={CS3} alt="" />
            </div>
            <div className="cmt">
              <p className="user-name">Chu Thị Liên</p>
              <p>⭐⭐⭐⭐⭐</p>
              <p>
                Trước toàn mua mấy cái chay thuốc tẩy về tẩy quần áo, giờ có mấy
                viên này nhàn hẳn, mà không bị hại tay như mấy chai thuốc kia,
                đã thế còn không để lại mùi khó chịu, uy tín nhé shop
              </p>
              <div className="react-time">
                <p
                  style={{
                    color: "rgba(67, 102, 176, 1.000)",
                    fontSize: "14px",
                  }}
                >
                  <span className="icon-before">Thích - Phản hồi </span>8 giờ
                  trước
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CommentSection;
