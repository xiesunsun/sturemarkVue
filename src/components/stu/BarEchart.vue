<template>
    <div id="myEcharts" style="width: 100%; height: 100%"></div>
</div></template>
<script>
export default {
    props: {
        tabledata: {
            type: Object,
            default: {}
        },

    },
    mounted() {
        console.log(this.tabledata) //由于数据传输的异步性质，首先并不会显示到mounted的时候，所以需要进行检测
    },
    watch: {
        tabledata(newvalue, oldvalue) {

            this.initchart()

        },

    },
    methods: {
        initchart() {
            let chart = this.$echarts.init(document.getElementById("myEcharts"), "light");
            // 颠倒x轴y轴的位置进行相应的图标的横坐标方向进行实施
            chart.setOption({

                yAxis: {
                    type: "category",
                    data: this.tabledata.category, //目录项 是一个字符串数组就ok
                    axisLine: {
                        show: true,
                    },
                    splitLine: {
                        show: false,
                    },
                    axisLabel: {
                        textStyle: {
                            fontSize: 7,
                            fontWeight: 'bold',
                            fontStyle: 'italic'
                        }
                    },
                },
                xAxis: {
                    type: "value",
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                    splitLine: {
                        show: false,
                    },
                },
                series: [
                    {
                        type: "bar",
                        data: this.tabledata.value,  //相应的数据内容 一个数组 数组项是 字典 as follows
                        barCategoryGap: "0",
                        label: {
                            show: true,

                        },
                    },
                ],
                darkMode: false,
                borderColor: "transparent",
                tooltip: {
                    trigger: 'item'
                },
                grid: {
                    left: '0%',
                    top: '0%',
                    right: '0',
                    bottom: '1%',
                    containLabel: true
                },


            });
            // window.onresize = function () {
            //     chart.resize()
            // };
            window.addEventListener("resize", () => {
                chart.resize();
            });
        }
    }

}
</script>