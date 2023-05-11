const mock = require("mockjs");
const category = ["A", "B", "C", "D", "E"];

// for (let i = 0; i < 3; i++) {
//   category.push(mock.Random.first(["A", "B", "C", "D", "E"]));
// }

const data = {
  category,
  value: category.map(() => ({
    name: mock.Random.pick(category),
    "value|1-100": 100,
    itemStyle: {
      color: mock.Random.pick(["red", "blue", "green"]),
    },
  })),
};
// const data = {
//   // category是一个1-10的字符数组
//   category: mock.Ra,
//   // value是一个1-10个元素的数组,每个元素都包含name、value和itemStyle属性
//   value: [
//     {
//       // name的值来自category数组
//       name: mock.Random.pick("category"),
//       // value是一个1-100的数字
//       "value|1-100": 100,
//       itemStyle: {
//         // color是一个字符串,从一个数组中随机选取
//         color: mock.Random.pick(["red", "blue", "green"]),
//       },
//     },
//   ],
// };
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
];
