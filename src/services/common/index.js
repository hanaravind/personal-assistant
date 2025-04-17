import axios from "axios";
import { getCookie } from "cookies-next";
import { API_URL } from "../../config";

export const requestCommonService = async (payload) => {
    const defaultHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const requestHeaders = { ...payload.headers, ...defaultHeaders };
  
    const requestUrl = `${API_URL}${payload.url}`;
  
    if (getCookie("accessToken")) {
      const token = getCookie("accessToken");
      requestHeaders.Authorization = `Bearer ${token}`;
    }
  
    if (payload.method === "get") {
      return await axios[payload.method](requestUrl, requestHeaders);
    }
  
    return await axios[payload.method](requestUrl, payload.data, {
      headers: requestHeaders,
    });
  };