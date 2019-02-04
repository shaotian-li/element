<style lang="less">
@import "../Ui/ui.less";
</style>
<template>
    <div>
        <el-card class="box-card">
            <el-form :inline="true" :model="orderForm" class="demo-form-inline">
                <el-form-item label="城市:">
                    <el-select v-model="orderForm.city" style="width:120px">
                        <el-option label="全部" value=""></el-option>
                        <el-option v-for="item in cityList" :key="item.id" :label="item.name" :value="item.id"></el-option>   
                    </el-select>
                </el-form-item>
                <el-form-item label="订单时间:">
                    <el-date-picker
                        v-model="orderForm.startTime"
                        type="datetime" />
                    ~
                    <el-date-picker
                        v-model="orderForm.endTime"
                        type="datetime" />
                </el-form-item>
                <el-form-item  label="订单状态:">
                    <el-select v-model="orderForm.state" style="width:80px">
                        <el-option label="全部" value="" >全部</el-option>
                        <el-option label="进行中" value="1">进行中</el-option>
                        <el-option label="结束进程" value="2">结束进程</el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">查询</el-button>
                    <el-button @click="handleReset">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card>
            <el-button size="small" type="warning">订单详情</el-button>
            <el-button size="small" type="warning" @click="handleConfirm">结束订单</el-button>
        </el-card>
        <div class="content_warp">
            <el-table :data="tableData"  :header-cell-style="HeaderCellStyle" border style="width: 100%">
                <el-table-column label="" width="65">
                    <template scope="scope">
                        <el-radio :label="scope.row.id" v-model="templateRadio" @change.native="getTemplateRow(scope.$index,scope.row)">&nbsp;</el-radio>
                    </template>
                </el-table-column>
                <el-table-column prop="ordersn" label="订单编号" width="100"></el-table-column>
                <el-table-column prop="bike_sn" label="车辆编号" width="100"></el-table-column>
                <el-table-column prop="user_name" label="用户名" width="80"> </el-table-column>
                <el-table-column prop="mlbile" label="手机号" width="110"> </el-table-column>
                <el-table-column prop="distance" label="里程" width="60"> </el-table-column>
                <el-table-column prop="total_time" label="行驶时间" width="80"> </el-table-column>
                <el-table-column label="状态" width="70"> 
                    <template slot-scope="scope">
                        <span v-if="scope.row.status == 1">进行中</span>
                        <span v-if="scope.row.status == 2">结束</span>
                    </template>
                </el-table-column>
                <el-table-column prop="start_time" label="开始时间"> </el-table-column>
                <el-table-column prop="end_time" label="结束时间"> </el-table-column>
                <el-table-column prop="total_fee" label="订单金额" width="80"> </el-table-column>
                <el-table-column prop="user_pay" label="实付金额"  width="80"> </el-table-column>
            </el-table>
        </div>

        <div>
            <el-dialog
                title="结束订单"
                :visible.sync="orderDialog"
                width="30%"
                center>
                <ul>
                    <li>
                        <span>车辆编号:</span>
                        <span>{{singleBike_sn}}</span>
                    </li>
                      <li>
                        <span>剩余电量:</span>
                         <span>{{22}}</span>
                    </li>
                      <li>
                        <span>行程开始时间:</span>
                        <span>{{singleStart_time}}</span>
                    </li>
                      <li>
                        <span>当前位置:</span>
                        <span>{{singlepresent}}</span>
                    </li>
                </ul>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="orderDialog = false">取 消</el-button>
                    <el-button type="primary" @click="orderDialog = false">确 定</el-button>
                </span>
                </el-dialog>
        </div>
    </div>
</template>

<script>
import axios from "../../axios/axios.js";
export default {
  data() {
    return {
      orderForm: {
        city: "",
        startTime: "",
        endTime: "",
        state: ""
      },
      templateRadio: "",
      cityList: [],
      tableData: [],
      HeaderCellStyle: {
        textAlign: "center"
      },
      orderDialog: false,
      singleBike_sn: "",
      kWh: "100%",
      singleStart_time: "",
      singlepresent: "上海市外滩"
    };
  },
  created() {
    this.loadData();
    this.loadCity();
  },
  methods: {
    loadCity() {
      axios
        .Ajax({
          url: "city/list"
        })
        .then(res => {
          if (res.code == "0") {
            this.cityList = res.data;
          }
        });
    },
    loadData() {
      axios
        .Ajax({
          url: "order/list"
        })
        .then(res => {
          if (res.code == "0") {
            this.tableData = res.data;
          }
        });
    },

    handleReset() {
      Object.assign(this.orderForm, {
        city: "",
        startTime: "",
        endTime: "",
        state: ""
      });
    },
    getTemplateRow(index, row) {
      this.singleBike_sn = row.bike_sn;
      this.singleStart_time = row.start_time;
    },
    handleConfirm() {
      if (this.templateRadio == "") {
        this.$confirm("请选择一条数据", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
      } else {
        this.orderDialog = true;
      }
    }
  }
};
</script>
<style scoped>
ul li {
  margin-bottom: 24px;
}
</style>
