<template>
  <div class="mainbox">
    <div class="colum">
      <detail-panel class="bar" v-for="(item, index) in leftTitle" :key="index">
        <template v-slot:title>
          <div>
            {{ item }}
          </div>
        </template>
        <template v-slot:chart>
          <e-charts
            :id-name="leftId[index]"
            :options="leftOption[index]"
            :style="{ width: '100%', height: '3rem' }"
          ></e-charts>
        </template>
      </detail-panel>
    </div>
    <div class="colum">
      <number-panel></number-panel>
      <map-panel></map-panel>
    </div>
    <div class="colum">
      <detail-panel
        class="bar"
        v-for="(item, index) in rightTitle"
        :key="index"
      >
        <template v-slot:title>
          <div>{{ item }}</div>
        </template>
        <template v-slot:chart>
          <e-charts
            :id-name="rightId[index]"
            :options="rightOption[index]"
            :style="{ width: '100%', height: '3rem' }"
          ></e-charts>
        </template>
      </detail-panel>
    </div>
  </div>
</template>

<script>
import DetailPanel from "components/DetailPanel.vue";
import NumberPanel from "components/NumberPanel.vue";
import MapPanel from "components/MapPanel.vue";
import ECharts from "components/ECharts.vue";


import * as echarts from "echarts";

export default {
  name: "SectionContent",
  components: {
    DetailPanel,
    NumberPanel,
    MapPanel,
    ECharts,
  },
  data() {
    return {
      // myColor: ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
      isSwitch: [false, true, false],
      leftTitle: ["柱状图-就业行业", "折线图-人员变化", "饼状图-年龄分布"],
      rightTitle: ["柱状图-技能掌握", "折线图-播放量", "饼形图-地区分布"],
      leftOption: [
        {
          color: ["#2f89cf"],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            },
          },
          grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            containLabel: true,
          },
          xAxis: [
            {
              type: "category",
              data: [
                "旅游行业",
                "教育培训",
                "游戏行业",
                "医疗行业",
                "电商行业",
                "社交行业",
                "金融行业",
              ],
              axisTick: {
                alignWithLabel: true,
              },
              // 修改刻度标签
              axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: "7px",
              },
              axisLine: {
                show: false,
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12px",
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: "rgba(255,255,255,.1)",
                },
              },
              splitLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.1)",
                },
              },
            },
          ],
          series: [
            {
              name: "数量",
              type: "bar",
              barWidth: "35%",
              data: [200, 300, 300, 900, 1500, 1200, 600],
              itemStyle: {
                borderRadius: 3,
              },
            },
          ],
        },
        {
          // 修改折线颜色
          color: ["#00f2f1", "#ed3f35"],
          tooltip: {
            trigger: "axis",
          },
          legend: {
            textStyle: {
              color: "#4c9bfd", // 图例文字颜色
              fontSize: 10,
            },
            right: "10%", // 距离右边10%
          },
          grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true, // 显示边框
            borderColor: "#012f4a", // 边框颜色
            containLabel: true, // 包含刻度文字在内
          },
          toolbox: {
            feature: {
              saveAsImage: {},
            },
          },
          xAxis: {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月",
            ],
            axisTick: {
              show: false, // 去除刻度线
            },
            axisLabel: {
              color: "#4c9bfd", // 文本颜色
            },
            axisLine: {
              show: false, // 去除轴线
            },
            boundaryGap: false, // 去除轴内间距
          },
          yAxis: {
            type: "value",
            axisTick: {
              show: false, // 去除刻度
            },
            axisLabel: {
              color: "#4c9bfd", // 文字颜色
            },
            splitLine: {
              lineStyle: {
                color: "#012f4a", // 分割线颜色
              },
            },
          },
          series: [
            {
              name: "新增粉丝",
              data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
              type: "line",
              // 折线修饰为圆滑
              smooth: true,
              // lineStyle: {
              //   width: 1
              // }
            },
            {
              name: "新增游客",
              data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
              type: "line",
              smooth: true,
            },
          ],
        },
        {
          color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"],
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
          },
          legend: {
            bottom: "0%",
            // 修改小图标大小
            itemWidth: 10,
            itemHeight: 10,
            // data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
            // 修改图例文字为12px
            textStyle: {
              color: "rgba(255,255,255,.5)",
              fontSize: "10",
            },
          },
          series: [
            {
              name: "年龄分布",
              type: "pie",
              // 设置饼形图在容器中的位置
              center: ["50%", "45%"],
              // 修改饼形图大小，第一个值修改内圆半径，第二个值修改外圆半径
              radius: ["40%", "60%"],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: "center",
              },
              labelLine: {
                show: false,
              },
              data: [
                { value: 1, name: "20岁以下" },
                { value: 4, name: "20-29岁" },
                { value: 2, name: "30-39岁" },
                { value: 2, name: "40-49岁" },
                { value: 1, name: "50岁以上" },
              ],
            },
          ],
        },
      ],
      leftId: ["industry", "people", "age"],
      rightOption: [
        {
          grid: {
            top: "10%",
            left: "22%",
            bottom: "10%",
          },
          xAxis: {
            // 不显示x轴相关信息
            show: false,
          },
          // 不显示y轴线条和相关刻度
          yAxis: [
            {
              type: "category",
              data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
              axisLine: {
                show: false,
              },
              axisTick: {
                // 不显示刻度
                show: false,
              },
              // 刻度标签设置为白色
              axisLabel: {
                fontSize: 8,
                color: "#fff",
              },
              // 是否翻转坐标轴
              inverse: true,
            },
            {
              show: true,
              data: [702, 350, 610, 793, 664],
              // 不显示y轴的线
              axisLine: {
                show: false,
              },
              // 不显示刻度
              axisTick: {
                show: false,
              },
              axisLabel: {
                fontSize: 8,
                color: "#fff",
              },
              // 是否翻转坐标轴
              inverse: true,
            },
          ],
          series: [
            {
              // 修改第一条柱子
              // name: "2011年",
              name: "条",
              type: "bar",
              data: [70, 34, 60, 78, 69],
              yAxisIndex: 0,
              // 修改圆角
              itemStyle: {
                borderRadius: 20,
                color: function (params) {
                  // params为当前series的数据对象
                  var myColor = [
                    "#1089E7",
                    "#F57474",
                    "#56D0E3",
                    "#F8B448",
                    "#8B78F6",
                  ];
                  return myColor[params.dataIndex];
                },
              },
              // 修改柱子间的距离
              barCategoryGap: 50,
              // 柱子宽度
              barWidth: 10,
              label: {
                show: true,
                // 图形内显示
                position: "inside",
                // 文字显示格式,{a}系列名，{b}数据名，{c}数据值
                formatter: "{c}%",
                fontSize: 8,
                color: "#fff",
              },
            },
            {
              // name: "2012年"
              name: "框",
              type: "bar",
              barCategoryGap: 50,
              barWidth: 15,
              itemStyle: {
                color: "none",
                borderColor: "#00c1de",
                borderWidth: 3,
                borderRadius: 15,
              },
              data: [100, 100, 100, 100, 100],
              yAxisIndex: 1,
            },
          ],
        },
        {
          tooltip: {
            trigger: "axis",
          },
          legend: {
            top: "0%",
            // data: ["邮件营销", "联盟广告"],
            textStyle: {
              color: "rgba(255,255,255,.5)",
              fontSize: "10",
            },
          },
          grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true,
          },
          xAxis: [
            {
              type: "category",
              boundaryGap: false,
              data: [
                "01",
                "02",
                "03",
                "04",
                "05",
                "06",
                "07",
                "08",
                "09",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "26",
                "28",
                "29",
                "30",
              ],
              axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: 12,
              },
              axisLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.2)",
                },
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              axisTick: { show: false },
              axisLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.1)",
                },
              },
              axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: 12,
              },
              // 修改分割线的颜色
              splitLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.1)",
                },
              },
            },
          ],
          series: [
            {
              name: "播放量",
              type: "line",
              // 填充颜色设置
              areaStyle: {
                // 渐变
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(1, 132, 213, 0.4)", // 渐变色的起始颜色
                      // color: "red"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(1, 132, 213, 0.1)", // 渐变线的结束颜色
                      // color: "green"
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)",
              },
              // 设置拐点
              symbol: "circle",
              symbolSize: 8,
              // 开始不显示，鼠标经过显示
              showSymbol: false,
              // 设置拐点的颜色及边框
              itemStyle: {
                color: "#0184d5",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12,
              },
              data: [
                30,
                40,
                30,
                40,
                30,
                40,
                30,
                60,
                20,
                40,
                30,
                40,
                30,
                40,
                30,
                40,
                30,
                60,
                20,
                40,
                30,
                40,
                30,
                40,
                30,
                40,
                20,
                60,
                50,
                40,
              ],
              smooth: true,
              // 修改线条样式
              lineStyle: {
                color: "#0184d5",
                width: 1,
              },
            },
            {
              name: "转发量",
              type: "line",
              areaStyle: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(0, 216, 135, 0.4)",
                    },
                    {
                      offset: 0.8,
                      color: "rgba(0, 216, 135, 0.1)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)",
              },
              // 设置拐点
              symbol: "circle",
              symbolSize: 8,
              // 开始不显示，鼠标经过显示
              showSymbol: false,
              // 设置拐点的颜色及边框
              itemStyle: {
                color: "#00d887",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12,
              },
              data: [
                130,
                10,
                20,
                40,
                30,
                40,
                80,
                60,
                20,
                40,
                90,
                40,
                20,
                140,
                30,
                40,
                130,
                20,
                20,
                40,
                80,
                70,
                30,
                40,
                30,
                120,
                20,
                99,
                50,
                20,
              ],
              smooth: true,
              // 修改线条样式
              lineStyle: {
                color: "#00d887",
                width: 1,
              },
            },
          ],
        },
        {
          color: [
            "#006cff",
            "#60cda0",
            "#ed8884",
            "#ff9f7f",
            "#0096ff",
            "#9fe6b8",
            "#32c5e9",
            "#1d9dff",
          ],
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)",
          },
          legend: {
            bottom: "0%",
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
              color: "rgba(255,255,255,.5)",
              fontSize: "8",
            },
          },
          series: [
            {
              name: "地区分布",
              type: "pie",
              radius: ["10%", "70%"],
              center: ["50%", "50%"],
              roseType: "radius",
              // 图形的文字标签
              label: {
                fontSize: 8,
              },
              // 链接图形和文字的线条
              labelLine: {
                // length 链接图形的线条
                length: 6,
                // length2 链接文字的线条
                length2: 8,
              },
              data: [
                { value: 20, name: "云南" , label: {color: "#006cff"}},
                { value: 26, name: "北京", label: {color: "#60cda0"} },
                { value: 24, name: "山东", label: {color: "#ed8884"}},
                { value: 25, name: "河北", label: {color: "#ff9f7f"}},
                { value: 20, name: "江苏", label: {color: "#0096ff"}},
                { value: 25, name: "浙江", label: {color: "#9fe6b8"}},
                { value: 30, name: "四川", label: {color: "#32c5e9"}},
                { value: 42, name: "湖北", label: {color: "#1d9dff"}},
              ],
            },
          ],
        },
      ],
      rightId: ["skill", "viewership", "area"],
    };
  },
};
</script>

<style scoped>
.mainbox {
  display: flex;
  min-width: 1024px;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0.125rem 0.125rem 0;
}
.colum {
  flex: 3;
}
.colum:nth-child(2) {
  flex: 5;
  margin: 0 0.125rem 0.1875rem;
}

.leftTitle a {
  color: #fff;
  text-decoration: none;
  margin: 0 0.125rem;
}
</style>