import request from "../config/request";

export const fetchData = query => {
  return request({
    url: `/table.json`,
    method: "get",
    params: query
  });
};
