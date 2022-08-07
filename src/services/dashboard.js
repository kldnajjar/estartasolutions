import http from "./httpService";
import { toast } from "react-toastify";

const apiEndPoint = "/a2fbc23e-069e-4ba5-954c-cd910986f40f";

export async function getData() {
  try {
    const { data } = await http.get(`${apiEndPoint}`);
    return { data: data.result };
  } catch (error) {
    toast.error("Error while getting dashboard data");
  }
}

export default {
  getData,
};
