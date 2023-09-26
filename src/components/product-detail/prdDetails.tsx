import React from "react";
import VN3 from "../../assets/images/VIÊN NÉN OXI/3.png";
import VN5 from "../../assets/images/VIÊN NÉN OXI/5.png";
import SC19 from "../../assets/images/Screenshot 2023-09-26 161719.png";
import SC44 from "../../assets/images/Screenshot 2023-09-26 161844.png";
import SC54 from "../../assets/images/Screenshot 2023-09-26 161854.png";
import SC04 from "../../assets/images/Screenshot 2023-09-26 161904.png";
import SC12 from "../../assets/images/Screenshot 2023-09-26 161912.png";
import VN7 from "../../assets/images/VIÊN NÉN OXI/7.png";

const ProductDetails: React.FC = () => {
  return (
    <div
      className="product-detail"
      style={{
        width: "100%",
        margin: "auto",
        marginTop: "15px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
        backgroundColor: "white",
        lineHeight: "1.8",
        padding: "20px 0",
      }}
    >
      <div className="ttsp">
        <h2>Thông tin sản phẩm</h2>
        <p>+ Viên sủi oxy chuyên gia tẩy rửa đa năng</p>
        <p>
          _ Viên sủi tẩy rửa đa năng công nghệ mới của Nhật Bản. Chuyên dùng để
          tẩy rửa cốc chén, bát đĩa lâu ngày bị ố cặn, mà các chất tẩy rửa bình
          thường không thể tẩy sạch. Và điều khiến viên sủi oxy công nghệ Nhật
          Bản rất được ưa chuộng là vì nó tẩy sạch các cặn ố mà không cần phải
          tác động, cọ rửa như những chất tẩy thông thường. Qua đó không làm
          hỏng bề mặt của vật dụng cần tẩy rửa, thích hợp với những đồ dùng có
          giá trị cao.
        </p>
        <p>
          + Ngoài tẩy rửa các cặn ố cứng đầu, viên sủi oxy còn phát huy rất tốt
          tác dụng của mình khi được dùng để tẩy ố bẩn ở quần áo, giày dép mà
          không làm hỏng chúng,
        </p>
        <p>
          + Máy giặt lâu ngày có mùi khó chịu, giặt quần áo không sạch, bạn cũng
          có thể dùng viên tẩy rửa oxy để sử lý, viên sủi sẽ đánh bay các cặn
          bẩn bên trong máy giạt, và tiêu diệt vi khuẩn có hại lên đến 99,9%.
        </p>
        <p>
          *** Nhờ sử dụng công nghệ phản ứng ôxi hoàn toàn mới lên viên nén tẩy
          rửa đa năng này không sử dụng các chất tẩy rửa mạnh như những sản phẩm
          thông thường, qua đó không gây hại cho con người và đồ vật.
        </p>
      </div>

      <div className="images">
        <img
          src={VN3}
          alt=""
          style={{ width: "100%", objectFit: "cover", padding: "0 16px" }}
        />
        <img
          src={VN5}
          alt=""
          style={{ width: "100%", objectFit: "cover", padding: "0 16px" }}
        />
        <p
          style={{
            color: "red",
            fontSize: "28px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          *** Chỉ cần thả 5 đến 6 viên máy giặt nhà bạn sẽ sạch hoàn toàn cặn
          bẩn và vi khuẩn có hại lên đến 99,9%
        </p>
        <img
          src={SC19}
          alt=""
          style={{ width: "100%", objectFit: "cover", padding: "0 16px" }}
        />
        <p
          style={{
            color: "red",
            fontSize: "28px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          *** Tẩy quần áo bị ố, mốc mà không làm hư hại vải
        </p>
        <img
          src={SC44}
          alt=""
          style={{ width: "100%", objectFit: "cover", padding: "0 16px" }}
        />
        <img
          src={SC54}
          alt=""
          style={{ width: "100%", objectFit: "cover", padding: "0 16px" }}
        />
        <img
          src={SC04}
          alt=""
          style={{ width: "100%", objectFit: "cover", padding: "0 16px" }}
        />
        <p
          style={{
            color: "red",
            fontSize: "28px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          *** Tẩy sạch giày dép mà không cần cọ chà
        </p>
        <img
          src={SC12}
          alt=""
          style={{ width: "100%", objectFit: "cover", padding: "0 16px" }}
        />
        <p
          style={{
            color: "red",
            fontSize: "28px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          *** Công thức đặc biệt, không dùng chất tẩy nồng độ cao an toàn cho
          vật dụng và da tay
        </p>
        <img
          src={VN7}
          alt=""
          style={{ width: "100%", objectFit: "cover", padding: "0 16px" }}
        />
      </div>
      <div
        style={{
          textTransform: "uppercase",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            color: "red",
            fontSize: "18px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Là sản phẩm tẩy rửa đa năng bán chạy nhất năm
        </p>
        <p
          style={{
            color: "rgba(23, 107, 70, 1)",
            fontSize: "18px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Đặt ngay để nhận ưu đãi
        </p>
        <button className="btn-submit">
          <a href="#myForm" style={{ textDecoration: "none", color: "white" }}>
            MUA NGAY
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
