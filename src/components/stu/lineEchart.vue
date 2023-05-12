<template>
    <div id="echartsdom" style="width: 100%; height: 100%"></div>
</template>
<script >

export default {
    //获取line-data
    props: {
        lineData: {
            type: Object,
            default: {

            }
        }
    },

    watch: {
        lineData(newvalue, oldvalue) {
            console.log(newvalue, oldvalue),
                this.initchart()
        }
    },
    methods: {
        initchart() {
            let chart = this.$echarts.init(document.getElementById("echartsdom"));
            let option = {
                title: {
                    text: 'Stu-Quality'
                },
                tooltip: {
                    trigger: 'axis',
                },
                legend: {
                    data: this.lineData.legend //var
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: this.lineData.xData //var
                },
                yAxis: {
                    type: 'value'
                },
                series: this.lineData.series //var

            };
            console.log("Linechart", this.lineData.series)
            chart.setOption(option)

            window.addEventListener("resize", () => {
                chart.resize();
            });

        }
    }
}
</script>