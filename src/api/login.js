import axios from "@/utils/request";

export function getsms(data) {
  return axios.request({
    method: "post",
    url: "/user/12345",
    data
  });
}
