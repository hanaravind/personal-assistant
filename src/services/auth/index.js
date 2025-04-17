import axios from "axios";
import { API_URL } from "../../config";

export const requestAuthService = async (payload) => {
    const defaultHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const requestHeaders = { ...payload.headers, ...defaultHeaders };
  
    const requestUrl = `${API_URL}${payload.url}`;
  
    if (payload.method === "get") {
      return await axios[payload.method](requestUrl, requestHeaders);
    }
    return await axios[payload.method](requestUrl, payload.data, requestHeaders);
  };