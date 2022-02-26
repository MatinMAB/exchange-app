import axios from "../plugins/axios";

export const getCryptos = () => {
  return axios.get("").then((res) => res.data);
};
