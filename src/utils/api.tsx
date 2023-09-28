export const GET_API = (page: string, sort: string, quantity: string) => {
  return {
    getAllOrders: `/?page=${page}`,
    sortOrderbyDate: `/sorted-by-date-newest?sort=${sort}&page=${page}`,
    sortOrderbyQuantity: `/sorted-by-quantity?quantity=${quantity}&page=${page}`,
    getOrdersConfirmed: `/get-order-confirmed?page=${page}`,
  };
};

export const POST_API = () => {
  return {
    createOrder: "/",
  };
};

export const DELETE_API = (id: string) => {
  return {
    deleteOrder: `/${id}`,
  };
};

export const PUT_API = (id: string) => {
  return {
    updateStatus: `/update-status/${id}`,
  };
};
