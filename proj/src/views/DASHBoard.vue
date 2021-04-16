<template>
  <div>
    <Header />
    <Footer />
    <SIDEBAR />
    <!-- <div style="float: left,width:70%, margin-left:5%"> -->
    <div class="row">
      <div class="Bar">
        <apexchart
          width="500"
          type="bar"
          :options="options"
          :series="series"
        ></apexchart>
      </div>

      <div class="graphs">
        <apexchart
          width="500"
          type="line"
          :options="options"
          :series="series"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";

import Footer from "../components/Footer";
import SIDEBAR from "../components/SIDEBAR";
import VueApexCharts from "vue-apexcharts";
import Vue from "vue";
Vue.use(VueApexCharts);

Vue.component("apexchart", VueApexCharts);

export default {
  name: "DashBoard",
  components: {
    Header,
    Footer,
    SIDEBAR,
  },
  // components: {
  //   apexcharts: VueApexcharts,
  // },

  data: function () {
    return {
      options: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  },
};
</script>

<style scoped>
.graphs {
  align-content: right;
  margin-left: 55%;
  margin-bottom: 5%;
  margin-left: 15%;
  float: right;
  float: right;
}
.Bar {
  margin-left: 15%;
}
</style>
