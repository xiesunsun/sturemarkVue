<template>
    <div class="layout">
        <section class="top-left">

            <div class="border top-left-border">
                <div class="top-part">
                    <!-- 头像区域 -->
                    <el-avatar style="flex-shrink: 0; width: 130px; height: 130px;" :src="worker"></el-avatar>
                </div>
                <div class="line"></div>
                <div class="bottom-part">
                    <div class="name-info">
                        <!-- 姓名区域 -->
                        <span>用户:{{ name }}</span>
                    </div>
                    <div class="line"></div>
                    <div class="class-info">
                        <!-- 班级区域 -->
                        <span>班级名称:{{ classname }}</span>
                    </div>
                </div>
            </div>
        </section>
        <section class="top-right">
            <div class="border top-right-border">
                <BarEchart :tabledata="tabledata"></BarEchart>
            </div>
        </section>
        <section class="bottom-left">
            <div class="border bottom-left-border">
                line-chart
            </div>
        </section>
        <section class="bottom-right">
            <div class="border bottom-right-border">
                spider-chat
            </div>
        </section>
    </div>
</template>
<script>
import worker from "../../assets/home/lawyer.png"
import BarEchart from "@/components/stu/BarEchart.vue"
import Echarts from "@/components/stu/testbar.vue"
import { getStuEchart } from "@/api/stuhome"

export default {
    computed: {
        name() {
            return this.$store.state.name
        },
        classname() {
            return this.$store.state.classname
        }
    },
    data() {
        return {
            worker: worker,
            tabledata: {
                catagoty: null,
                value: null
            },

        }
    },
    created() {
        //BAR-chart的数据获取功能
        getStuEchart().then(response => {
            this.tabledata = {
                catagory: response.data["category"],
                value: response.data["value"]
            }
        },
            //line-chart的数据获取功能

            //radar-chart的数据获取功能
        )


    },
    components: {
        BarEchart,
        Echarts,

    }
}



</script>
<style scoped>
.layout {
    position: relative;
    height: 100vh;
}

.border {
    position: absolute;
    border: 2px solid #f00;
}

.top-left-border {
    top: 0;
    left: 0;
    width: 15%;
    height: 30%;
}

.top-right-border {
    top: 0;
    right: 0;
    width: 85%;
    height: 30%;
}

.bottom-left-border {
    bottom: 0;
    left: 0;
    width: 50%;
    height: 70%;
}

.bottom-right-border {
    bottom: 0;
    right: 0;
    width: 50%;
    height: 70%;
}

.top-left,
.top-right,
.bottom-left,
.bottom-right {
    position: absolute;
    left: 2px;
    right: 2px;
    top: 2px;
    bottom: 2px;
    display: flex;
    flex-direction: column;
}

.line {
    border-bottom: 1px solid red;
    /* 添加红线 */
}

.top-part,
.bottom-part {
    flex: 1;
}

.name-info,
.class-info {
    flex-grow: 1;
    min-height: 40px;
    padding: 5px 0;
}

span {
    font-family: '宋体';
    font-size: 16px;
    font-weight: bold;
    color: #333;
}
</style>