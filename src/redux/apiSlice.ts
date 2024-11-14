import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {Order} from "@/types.ts";

const API_BASE_URL = "http://localhost:3000/v1";

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getOrders: builder.query<{ data: Order[]; total: number }, { page: number; limit: number }>({
      query: ({ page, limit }) => `/orders?limit=${limit}&offset=${(page - 1) * limit}`,
    }),
    searchOrdersByCustomerName: builder.query<{ data: Order[]; total: number }, { name: string; page: number; limit: number }>({
      query: ({ name, page, limit }) => `/orders/search?name=${name}&limit=${limit}&offset=${(page - 1) * limit}`,
    }),
  }),
});

export const { useGetOrdersQuery, useSearchOrdersByCustomerNameQuery } = ordersApi;
