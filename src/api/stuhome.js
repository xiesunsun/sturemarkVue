import request from "@/utils/request";

export function getStuEchart() {
  return request({
    url: "/stuhome/getStuEchart",
    method: "get",
  });
}
