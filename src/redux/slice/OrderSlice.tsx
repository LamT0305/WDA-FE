import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initState = {
  isLoading: false,
  orders: [] as any[],
  totalPages: 0,
  orderConfirmed: [] as any[],
  totalpagesConfirmed: 0,
};

const OrderSlice = createSlice({
  name: "order",
  initialState: initState,
  reducers: {
    SET_LOADING(state, action: PayloadAction<any>) {
      state.isLoading = action.payload;
    },
    SET_ORDERS(state, action: PayloadAction<any>) {
      state.orders = action.payload;
    },
    SET_TOTALPAGES(state, action: PayloadAction<any>) {
      state.totalPages = action.payload;
    },

    HANDLE_DELETEORDER(state, action: PayloadAction<any>) {
      state.orders = state.orders.filter((e) => e._id !== action.payload);
    },

    HANDLE_UPDATEORDER(state, action: PayloadAction<any>) {
      state.orders = state.orders.filter((e) => e._id !== action.payload);
    },
    SET_ORDERSCONFIRMED(state, action: PayloadAction<any>) {
      state.orderConfirmed = action.payload;
    },
    SET_TOTALPAGESCF(state, action: PayloadAction<any>) {
      state.totalpagesConfirmed = action.payload;
    },
  },
});

const { reducer, actions } = OrderSlice;

export const {
  SET_LOADING,
  SET_ORDERS,
  SET_TOTALPAGES,
  HANDLE_DELETEORDER,
  HANDLE_UPDATEORDER,
  SET_ORDERSCONFIRMED,
  SET_TOTALPAGESCF
} = actions;

export default reducer;
