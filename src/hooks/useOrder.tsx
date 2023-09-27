import axios from "axios";

const useOrder = () => {
  const createOrder = async (form: any) => {
    try {
      const res = await axios.post(
        "https://wda-services.onrender.com/api/v1/order",
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data.status === "success") {
        alert("Đặt hàng thành công");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    createOrder,
  };
};

export default useOrder;
