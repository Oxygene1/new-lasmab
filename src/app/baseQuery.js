import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { API } from "../utils/constants";

export const baseQuery = fetchBaseQuery({
  baseUrl: API.BASE_URL,
});
