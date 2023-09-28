import React, { useEffect, useState } from "react";
import "./style.css";
import useOrder from "../../../hooks/useOrder";
import { extractDate } from "../../../utils/utility";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import ConfirmIcon from "../../../assets/images/icons8-check-50.png";
import DeleleIcon from "../../../assets/images/icons8-delete-48.png";

const Manage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    orders,
    handleDelete,
    totalPages,
    handleConfirmOrder,
    sortOrderByDate,
    sortOrderByQuantity,
  } = useOrder();
  useEffect(() => {
    sortOrderByDate(currentPage, "-1");
  }, [currentPage]);

  //filter by dropdown

  const handleChangeDropdown = (val: any) => {
    if (val === "Mới nhất") {
      sortOrderByDate(currentPage, "-1");
    } else if (val === "Cũ nhất") {
      sortOrderByDate(currentPage, "1");
    } else if (val === "Số lượng tăng") {
      sortOrderByQuantity(currentPage, "1");
    } else if (val === "Số Lượng giảm") {
      sortOrderByQuantity(currentPage, "-1");
    }
  };

  //confirm actions
  const handleConfirm = (id: string) => {
    const result = window.confirm("Xác nhận đơn hàng?");

    if (result) {
      handleConfirmOrder(id);
      // Handle the action when "OK" (true) is clicked
      alert("Đã xác nhận");
    } else {
      // Handle the action when "Cancel" (false) is clicked
      alert("Huỷ bỏ");
    }
  };

  const handleConfirmDelete = (id: string) => {
    const result = window.confirm("Xác nhận xoá đơn hàng?");

    if (result) {
      handleDelete(id);
      alert("Xoá đơn hàng thành công");
    } else {
      alert("Huỷ bỏ");
    }
  };
  //paginate

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const options = ["Mới nhất", "Cũ nhất", "Số lượng tăng", "Số Lượng giảm"];
  const defaultOption = options[0];
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
      <div className="filter">
        <p>Sắp xếp theo:</p>
        <Dropdown
          className="dropdown-menu"
          options={options}
          onChange={(val) => handleChangeDropdown(val.value)}
          value={defaultOption}
          placeholder="Select an option"
        />
      </div>
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
          <li className="header-tb">Xác nhận đơn</li>
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
                    onClick={() => handleConfirm(item._id)}
                  >
                    <img
                      src={ConfirmIcon}
                      alt=""
                      style={{ width: 32, height: 32, objectFit: "cover" }}
                    />
                  </button>
                  <button
                    className="icon"
                    onClick={() => handleConfirmDelete(item._id)}
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

export default Manage;
