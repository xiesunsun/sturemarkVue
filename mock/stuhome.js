const mock = require("mockjs");
const category = ["A", "B", "C", "D", "E"];
const data = {
  category,
  value: category.map(() => ({
    name: mock.Random.pick(category),
    "value|1-100": 100,
    itemStyle: {
      color: mock.Random.pick(["pink", "blue", "yellow", "brown"]),
    },
  })),
};

//生成line-echart数据
const lineData = {
  legend: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
  xData: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  series: [
    {
      name: "Email",
      type: "line",
      stack: "Total",
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "Union Ads",
      type: "line",
      stack: "Total",
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: "Video Ads",
      type: "line",
      stack: "Total",
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: "Direct",
      type: "line",
      stack: "Total",
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: "Search Engine",
      type: "line",
      stack: "Total",
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    },
  ],
};
//生成Radar-echart数据
const radarData = {
  legend: ["Allocated Budget", "Actual Spending"],
  indicator: [
    { name: "Sales", max: 6500 },
    { name: "Administration", max: 16000 },
    { name: "Information Technology", max: 30000 },
    { name: "Customer Support", max: 38000 },
    { name: "Development", max: 52000 },
    { name: "Marketing", max: 25000 },
  ],
  series: [
    {
      value: [4200, 3000, 20000, 35000, 50000, 18000],
      name: "Allocated Budget",
    },
    {
      value: [5000, 14000, 28000, 26000, 42000, 21000],
      name: "Actual Spending",
    },
  ],
};
module.exports = [
  {
    url: "/stuhome/getStuEchart",
    type: "get",
    response: (_) => {
      return {
        code: 20000,
        data: {
          category: data.category,
          value: data.value,
        },
        // month_num: 50,
        // month_reply_num: 45,
        // total_num: 130,
        // total_reply_num: 110,
      };
    },
  },
  {
    url: "/stuhome/getStuLinechart",
    type: "get",
    response: (_) => {
      return {
        code: 20000,
        data: {
          legend: lineData.legend,
          xData: lineData.xData,
          series: lineData.series,
        },
        // month_num: 50,
        // month_reply_num: 45,
        // total_num: 130,
        // total_reply_num: 110,
      };
    },
  },
  {
    url: "/stuhome/getStuRadarchart",
    type: "get",
    response: (_) => {
      return {
        code: 20000,
        data: {
          legend: radarData.legend,
          indicator: radarData.indicator,
          series: radarData.series,
        },
        // month_num: 50,
        // month_reply_num: 45,
        // total_num: 130,
        // total_reply_num: 110,
      };
    },
  },
];
