<style lang="less">
@import "../Ui/ui.less";
</style>

<template>
    <div class="bike_map">
        <el-card>
            <div> <span>共100辆车</span></div>
            <div style="height:500px" id="container"></div>
        </el-card>
    </div>
</template>
<script>
import BMap from "BMap";
import axios from "../../axios/axios.js";
export default {
  data() {
    return {
      map: ""
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios
        .Ajax({
          url: "map/blike_list"
        })
        .then(res => {
          if (res.code == 0) {
            this.renderMap(res.data);
          }
        });
    },
    renderMap(data) {
      this.map = new BMap.Map("container");
      this.addMapControl();
      this.drawBikeRoute(data.route_list);
      this.drwaServiceArea(data.service_list);
      this.drwaBike(data.bike_list);
    },
    addMapControl() {
      this.map.addControl(
        new BMap.ScaleControl({ anchor: BMAP_ANCHOR_TOP_RIGHT })
      );
      this.map.addControl(
        new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_RIGHT })
      );
    },
    drawBikeRoute(routeList) {
      let start = {};
      let end = "";
      if (routeList.length > 0) {
        // 起点
        start = routeList[0].split(",");
        let startPoint = new BMap.Point(start[0], start[1]);
        let startIcon = new window.BMap.Icon(
          "https://api.map.baidu.com/images/subway/start-bak.png",
          new BMap.Size(36, 42),
          {
            imageSize: new window.BMap.Size(36, 42),
            anchor: new window.BMap.Size(18, 42)
          }
        );
        let startMarker = new window.BMap.Marker(startPoint, {
          icon: startIcon
        });
        this.map.addOverlay(startMarker);

        // 终点
        end = routeList[routeList.length - 1].split(",");
        let endPoint = new BMap.Point(end[0], end[1]);
        let endIcon = new BMap.Icon(
          "https://api.map.baidu.com/images/subway/end-bak.png",
          new BMap.Size(36, 42),
          {
            imageSize: new BMap.Size(36, 42),
            anchor: new window.BMap.Size(18, 42)
          }
        );
        let endMarker = new BMap.Marker(endPoint, {
          icon: endIcon
        });
        this.map.addOverlay(endMarker);

        // 连线
        let trackPoint = [];
        for (var i = 0; i < routeList.length; i++) {
          let point = routeList[i].split(",");
          trackPoint.push(new BMap.Point(point[0], point[1]));
        }
        let polyline = new BMap.Polyline(trackPoint, {
          strokeColor: "blue",
          strokeWeight: 3,
          strokeOpacity: 1
        });
        this.map.addOverlay(polyline); //增加折线
        this.map.centerAndZoom(endPoint, 11);
      }
    },
    drwaServiceArea(serviceList) {
      let trackPoint = [];
      for (var i = 0; i < serviceList.length; i++) {
        let point = serviceList[i];
        trackPoint.push(new BMap.Point(point.lon, point.lat));
      }
      let polygon = new BMap.Polygon(trackPoint, {
        strokeColor: "red",
        strokeWeight: 4,
        strokeOpacity: 1,
        fillColor: "#fff",
        fillOpacity: 0.1
      });
      this.map.addOverlay(polygon);
    },
    drwaBike(bikeList) {
      bikeList.forEach(item => {
        let point = item.split(",");
        let p = new BMap.Point(point[0], point[1]);
        let icon = new BMap.Icon("/static/bike.jpg", new BMap.Size(36, 42), {
          imageSize: new BMap.Size(36, 42),
          anchor: new window.BMap.Size(18, 42)
        });
        let bikeMarker = new BMap.Marker(p, { icon: icon });
        this.map.addOverlay(bikeMarker);
      });
    }
  }
};
</script>

