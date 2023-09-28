import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/store";
import { RootState } from "../redux/store";
import {
  SET_LOADING,
  SET_ORDERS,
  SET_TOTALPAGES,
  HANDLE_DELETEORDER,
  HANDLE_UPDATEORDER,
  SET_ORDERSCONFIRMED,
} from "../redux/slice/OrderSlice";
import axiosInstance from "../utils/axios";
import { DELETE_API, GET_API, POST_API, PUT_API } from "../utils/api";
import axios from "axios";

const useOrder = () => {
  const dispatch = useDispatch();
  const { isLoading, orders, totalPages } = useAppSelector(
    (state: RootState) => state.order
  );

  const createOrder = async (form: any) => {
    dispatch(SET_LOADING(true));
    try {

      const jsonData = JSON.stringify(form);

      const res = await axios.post(
        "https://wda-services.onrender.com/api/v1/order",
        jsonData,
        { headers: { "Content-Type": "application/json" } }
      );
      if (res.data.status === "success") {
        alert("Đặt hàng thành công");
      }

      dispatch(SET_LOADING(false));
    } catch (error) {
      console.log(error);
      dispatch(SET_LOADING(false));
    }
  };

  const handleDelete = async (id: string) => {
    dispatch(SET_LOADING(true));
    try {
      const res = await axiosInstance.delete(DELETE_API(id).deleteOrder);

      if (res.data.status === "success") {
        dispatch(HANDLE_DELETEORDER(id));
      }
      dispatch(SET_LOADING(false));
    } catch (error) {
      dispatch(SET_LOADING(false));
      alert("Lỗi trong quá trình xoá");
    }
  };

  const handleConfirmOrder = async (id: string) => {
    dispatch(SET_LOADING(true));
    try {
      const form = new FormData();
      form.append("status", "confirmed");
      const res = await axiosInstance.put(PUT_API(id).updateStatus, form);

      if (res.data.status === "success") {
        dispatch(HANDLE_UPDATEORDER(id));
      }
      dispatch(SET_LOADING(false));
    } catch (error) {
      dispatch(SET_LOADING(false));
      alert("Lỗi trong quá trình xoá");
    }
  };

  const sortOrderByDate = async (page: any, sort: any) => {
    dispatch(SET_LOADING(true));
    try {
      const res = await axiosInstance.get(
        GET_API(page, sort, "").sortOrderbyDate
      );

      if (res.data.status === "success") {
        dispatch(SET_ORDERS(res.data.orders));
        dispatch(SET_TOTALPAGES(res.data.totalPages));
      }
    } catch (error) {
      dispatch(SET_LOADING(false));
      alert("Lỗi hệ thống trong quá trình xử lý");
    }
  };

  const sortOrderByQuantity = async (page: any, quantity: any) => {
    dispatch(SET_LOADING(true));
    try {
      const res = await axiosInstance.get(
        GET_API(page, "", quantity).sortOrderbyQuantity
      );

      if (res.data.status === "success") {
        dispatch(SET_ORDERS(res.data.orders));
        dispatch(SET_TOTALPAGES(res.data.totalPages));
      }
    } catch (error) {
      dispatch(SET_LOADING(false));
      alert("Lỗi hệ thống trong quá trình xử lý");
    }
  };

  const getAllOrdersConfirmed = async (page: any) => {
    dispatch(SET_LOADING(true));
    try {
      const res = await axiosInstance.get(
        GET_API(page, "", "").getOrdersConfirmed
      );

      if (res.data.status === "success") {
        dispatch(SET_ORDERSCONFIRMED(res.data.orders));
        dispatch(SET_TOTALPAGES(res.data.totalPages));
      }
      dispatch(SET_LOADING(false));
    } catch (error) {
      dispatch(SET_LOADING(false));
      alert("An error occurred");
    }
  };
  return {
    createOrder,
    isLoading,
    totalPages,
    orders,
    handleDelete,
    handleConfirmOrder,
    sortOrderByDate,
    sortOrderByQuantity,
    getAllOrdersConfirmed,
  };
};

export default useOrder;
