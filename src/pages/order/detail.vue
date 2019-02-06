<style lang="less">
@import "./detail.less";
</style>

<template>
    <div class="detail">
        <Header style="backgroundColor:#1890ff;"></Header>
        <div class="detail_map"  id="container"></div>
        <div class="detail_items">
          <div class="item_title">基础信息</div>
          <ul class="detail_form">
            <li>
              <span class="detail_form_left">用车模式</span>
              <span class="detail_form_content" v-if="status == 1"> 服务区</span>
              <span class="detail_form_content" v-if="status == 2"> 停车点</span>
            </li>
            <li>
              <span class="detail_form_left">订单编号</span>
              <span class="detail_form_content">{{order_sn}}</span>
            </li>
            <li>
              <span class="detail_form_left">车辆编号</span>
              <span class="detail_form_content">{{bike_sn}}</span>
            </li>
            <li>
              <span class="detail_form_left">用户姓名</span>
              <span class="detail_form_content">{{user_name}}</span>
            </li>
            <li>
              <span class="detail_form_left">手机号码</span>
              <span class="detail_form_content">{{mobile}}</span>
            </li>
          </ul>
        </div>
        <div class="detail_items">
          <div class="item_title">行驶轨迹</div>
          <ul class="detail_form">
            <li>
              <span class="detail_form_left">行驶起点</span>
              <span class="detail_form_content">{{start_location}}</span>
            </li>
            <li>
              <span class="detail_form_left">行驶终点</span>
              <span class="detail_form_content">{{end_location}}</span>
            </li>
            <li>
              <span class="detail_form_left">行驶里程</span>
              <span class="detail_form_content">{{distance}}</span>
            </li>
          </ul>
        </div>
    </div>
</template>
<script>
import Header from "@/components/Header";
import axios from "../../axios/axios.js";
import BMap from "BMap";
export default {
  data() {
    return {
      status: "",
      order_sn: "",
      bike_sn: "",
      start_location: "",
      end_location: "",
      mobile: "",
      user_name: "",
      distance: "",
      map: ""
    };
  },
  components: {
    Header
  },
  created() {
    this.$set(this.$store.state, "head", false);
    this.$set(this.$store.state, "headTitle", true);
  },

  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios
        .Ajax({
          url: "order/detail"
        })
        .then(res => {
          if (res.code == "0") {
            const {
              status,
              order_sn,
              bike_sn,
              start_location,
              end_location,
              mobile,
              user_name,
              distance
            } = res.data;
            Object.assign(this, {
              status,
              order_sn,
              bike_sn,
              start_location,
              end_location,
              mobile,
              user_name,
              distance
            });
            this.distance = Math.round(this.distance / 100) / 10 + "公里";
            this.renderMap(res.data);
          }
        });
    },
    renderMap(data) {
      this.map = new window.BMap.Map("container");
      // this.map.centerAndZoom("北京", 11); // 初始化地图，设置中心点坐标和地图级别
      // 添加控件
      this.addMapContorl();
      // 绘制行驶路线
      this.drawBikeRoute(data.positon_list);
      // 绘制服务区
      this.drwaServiceArea(data.area);
    },
    // 添加控件
    addMapContorl() {
      this.map.addControl(
        new window.BMap.ScaleControl({ anchor: window.BMAP_ANCHOR_TOP_RIGHT })
      );
      this.map.addControl(
        new window.BMap.NavigationControl({
          anchor: window.BMAP_ANCHOR_TOP_RIGHT
        })
      );
    },
    // 绘制行驶路线
    drawBikeRoute(positonList) {
      let startPoint = "";
      let endPoint = "";
      if (positonList.length > 0) {
        let first = positonList[0];
        let last = positonList[positonList.length - 1];
        // 开始点
        startPoint = new window.BMap.Point(first.lon, first.lat);
        let startIcon = new window.BMap.Icon(
          "https://api.map.baidu.com/images/subway/start-bak.png",
          new window.BMap.Size(36, 42),
          {
            imageSize: new window.BMap.Size(36, 42),
            anchor: new window.BMap.Size(18, 42)
          }
        );
        let startMarker = new window.BMap.Marker(startPoint, {
          icon: startIcon
        });
        this.map.addOverlay(startMarker);
        // 结束点
        endPoint = new window.BMap.Point(last.lon, last.lat);
        let endIcon = new window.BMap.Icon(
          "https://api.map.baidu.com/images/subway/end-bak.png",
          new window.BMap.Size(36, 42),
          {
            imageSize: new window.BMap.Size(36, 42),
            anchor: new window.BMap.Size(18, 42)
          }
        );
        let endMarker = new window.BMap.Marker(endPoint, {
          icon: endIcon
        });
        this.map.addOverlay(endMarker);
        // 连线

        let trackPoint = [];
        for (var i = 0; i < positonList.length; i++) {
          let point = positonList[i];
          trackPoint.push(new window.BMap.Point(point.lon, point.lat));
        }

        var polyline = new window.BMap.Polyline(trackPoint, {
          strokeColor: "blue",
          strokeWeight: 3,
          strokeOpacity: 1
        }); // 创建折线
        this.map.addOverlay(polyline); //增加折线
        this.map.centerAndZoom(endPoint, 11);
      }
    },
    // 绘制服务区
    drwaServiceArea(area) {
      let trackPoint = [];
      for (var i = 0; i < area.length; i++) {
        let point = area[i];
        trackPoint.push(new window.BMap.Point(point.lon, point.lat));
      }
      var polygon = new window.BMap.Polygon(trackPoint, {
        strokeColor: "red",
        strokeWeight: 4,
        strokeOpacity:1,
        fillColor:'#ff8605',
        fillOpacity:0.5
      });
      this.map.addOverlay(polygon); 
    }
  }
};
</script>


