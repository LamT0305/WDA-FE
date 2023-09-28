import React, { useEffect, useState } from "react";
import ConfirmIcon from "../../../assets/images/icons8-check-50.png";
import DeleleIcon from "../../../assets/images/icons8-delete-48.png";
import useOrder from "../../../hooks/useOrder";
import { extractDate } from "../../../utils/utility";
import "../../admin/news/style.css"

const Confirm: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { orders, totalPages, getAllOrdersConfirmed } = useOrder();

  useEffect(() => {
    getAllOrdersConfirmed(currentPage);
  }, [currentPage]);
  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pagesToShow = 10; // Number of pages to show at once
    const pages = Array.from({ length: 15 }, (_, index) => index + 1);

    if (totalPages <= pagesToShow) {
      return pages.map((page) => (
        <p
          key={page}
          onClick={() => handlePageClick(page)}
          className={`paginate-button${page === currentPage ? "-active" : ""}`}
        >
          {page}
        </p>
      ));
    } else {
      // Calculate the range of pages to show based on the current page
      const startPage = Math.max(currentPage - Math.floor(pagesToShow / 2), 1);
      const endPage = Math.min(startPage + pagesToShow - 1, totalPages);

      const pageButtons = [];

      // Add "Previous" button
      if (currentPage > 1) {
        pageButtons.push(
          <p
            key="previous"
            className="previous"
            onClick={() => handlePageClick(currentPage - 1)}
          >
            Previous
          </p>
        );
      }

      // Add page numbers with ellipsis
      for (let page = startPage; page <= endPage; page++) {
        pageButtons.push(
          <p
            key={page}
            onClick={() => handlePageClick(page)}
            className={`paginate-button${
              page === currentPage ? "-active" : ""
            }`}
          >
            {page}
          </p>
        );
      }

      // Add "Next" button
      if (currentPage < totalPages) {
        pageButtons.push(
          <p
            key="next"
            className="next"
            onClick={() => handlePageClick(currentPage + 1)}
          >
            Next
          </p>
        );
      }

      return pageButtons;
    }
  };
  return (
    <div className="container manage-body">
      <div className="tbhead">
        <ul className="manage-table">
          <li className="header-tb">Tên sản phẩm</li>
          <li className="header-tb">Tên khách hàng</li>
          <li className="header-tb">Số điện thoại</li>
          <li className="header-tb" style={{ width: 300 }}>
            Địa chỉ
          </li>
          <li className="header-tb">Số Lượng</li>
          <li className="header-tb">Ngày đặt</li>
          <li className="header-tb">Xác nhận vận chuyển</li>
        </ul>
      </div>
      <div className="tbbody">
        <div className="tbbody">
          {orders.map((item) => (
            <div key={item._id}>
              <ul className="manage-table">
                <li className="body-item">{item.product}</li>
                <li className="body-item">{item.customerName}</li>
                <li className="body-item">{item.phone}</li>
                <li className="body-item" style={{ width: 300 }}>
                  {item.address}
                </li>

                <li className="body-item">{item.quantity}</li>
                <li className="body-item">{extractDate(item.createdAt)}</li>
                <li
                  className="body-item"
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <button
                    className="icon"
                    // onClick={() => handleConfirm(item._id)}
                  >
                    <img
                      src={ConfirmIcon}
                      alt=""
                      style={{ width: 32, height: 32, objectFit: "cover" }}
                    />
                  </button>
                  <button
                    className="icon"
                    // onClick={() => handleConfirmDelete(item._id)}
                  >
                    <img
                      src={DeleleIcon}
                      alt=""
                      style={{ width: 32, height: 32, objectFit: "cover" }}
                    />
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="paginate">{renderPagination()}</div>
    </div>
  );
};

export default Confirm;
