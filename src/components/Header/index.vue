<style lang="less">
@import "./index.less";
</style>

<template>
    <div class="header">
        <div class="header_top">
            <span>欢迎， 李小征</span>
            <a href="javascript:;">退出</a> 
        </div>
        <el-row class="header_bottom">
            <el-col :span="4" class="header_title">
                <span>首页</span>
            </el-col>
            <el-col :span="20" class="weather">
                <span class="weather_time">{{time}}</span>
                <span class="weather_img">
                    <img :src="dayPictureUrl" alt="">
                </span>
                <span> {{temperature}} </span>                                
                <span class="weather_detail">{{weather}}</span>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { formateDate } from "../../utils/utils.js";
import axios from "../../axios/axios.js";
export default {
  data() {
    return {
      time: "",
      weather: "",
      dayPictureUrl: "",
      temperature:''
    };
  },
  created() {
    setInterval(() => {
      this.time = formateDate(new Date());
    }, 1000);
    this.getWeatherAPIData();
  },
  methods: {
    getWeatherAPIData() {
      let city = "睢宁";
      axios
        .jsonp({
          url:
            "http://api.map.baidu.com/telematics/v3/weather?location=" +
            encodeURIComponent(city) +
            "&output=json&ak=3p49MVra6urFRGOT9s8UBWr2"
        })
        .then(res => {
          if (res.status == "success") {
            let data = res.results[0].weather_data[0];
            this.weather = data.weather;
            this.dayPictureUrl = data.dayPictureUrl;
            this.temperature = data.temperature
          }
        });
    }
  }
};
</script>
