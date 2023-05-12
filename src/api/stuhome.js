import request from "@/utils/request";

export function getStuEchart() {
  return request({
    url: "/stuhome/getStuEchart",
    method: "get",
  });
}

export function getStuLinechart() {
  return request({
    url: "/stuhome/getStuLinechart",
    method: "get",
  });
}
export function getStuRadarchart() {
  return request({
    url: "/stuhome/getStuRadarchart",
    method: "get",
  });
}
