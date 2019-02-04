<style lang="less">
@import "../Ui/ui.less";
</style>
<template>
    <div>
        <el-card class="box-card">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="城市:">
                <el-select v-model="formInline.city" style="width:100px">
                    <el-option v-for="item in cityList" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="用车模式:">
                <el-select v-model="formInline.mode" style="width:120px">
                    <el-option label="全部" value=""></el-option>
                    <el-option label="指定停车点模式" value="1"></el-option>
                    <el-option label="禁停区模式" value="2"></el-option>
                </el-select>
            </el-form-item>
              <el-form-item label="运营模式:">
                <el-select v-model="formInline.op_mode" style="width:80px">
                    <el-option label="全部" value=""></el-option>
                    <el-option label="自营" value="1"></el-option>
                    <el-option label="加盟" value="2"></el-option>
                </el-select>
            </el-form-item>
              <el-form-item label="加盟商授权状态:">
                <el-select v-model="formInline.auth_status" style="width:100px">
                    <el-option label="全部" value=""></el-option>
                    <el-option label="已授权" value="1"></el-option>
                    <el-option label="未授权" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">查询</el-button>
                <el-button @click="handleReset">重置</el-button>
            </el-form-item>
            </el-form>
        </el-card>
        <el-card>
            <el-button type="warning" @click="handleOpen"> 开通城市</el-button>
        </el-card>
        <div class="content_warp">
            <el-table :data="tableData"  :header-cell-style="HeaderCellStyle" border style="width: 100%">
                <el-table-column prop="id" label="城市ID"></el-table-column>
                <el-table-column prop="name" label="城市名称" width="180"></el-table-column>
                <el-table-column prop="mode" label="用车模式"> 
                    <template slot-scope="scope">
                        <span v-if="scope.row.mode == 1">停车点</span>
                        <span v-else-if="scope.row.mode == 2">禁停区</span>
                    </template>
                </el-table-column>
                <el-table-column prop="op_mode" label="营销模式">
                    <template slot-scope="scope">
                        <span v-if="scope.row.op_mode == 1">自营</span>
                        <span v-else-if="scope.row.op_mode == 2">加盟</span>
                    </template>    
                </el-table-column>
                <el-table-column prop="franchisee_name" label="授权加盟商"> </el-table-column>
                <el-table-column prop="city_admins" :formatter="formatterCityAdmin" label="城市管理员"> </el-table-column>
                <el-table-column prop="open_time" label="城市开通时间" width="180"> </el-table-column>
                <el-table-column prop="update_time" label="操作时间" :formatter="formatterUpdateTime" width="180"> </el-table-column>
                <el-table-column prop="sys_user_name" label="操作人"> </el-table-column>
            </el-table>
        </div>
        <div>
            <el-dialog title="开通城市" :visible.sync="dialogFormCity" width="30%" >
                <div>
                    <el-form :model="addForm">
                        <el-form-item label="选择城市:">
                            <el-select v-model="addForm.city" style="width:100px">
                                <el-option v-for="item in cityList" :key="item.id" :label="item.name" :value="item.id"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="用车模式:">
                            <el-select v-model="addForm.mode" style="width:120px">
                                <el-option label="全部" value=""></el-option>
                                <el-option label="指定停车点模式" value="1"></el-option>
                                <el-option label="禁停区模式" value="2"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="运营模式:">
                            <el-select v-model="addForm.op_mode" style="width:80px">
                                <el-option label="全部" value=""></el-option>
                                <el-option label="自营" value="1"></el-option>
                                <el-option label="加盟" value="2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormCity = false">取 消</el-button>
                    <el-button type="primary" @click="handleFromSuccend">确 定</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>
<script>
import axios from "../../axios/axios.js";
// 时间格式化
import moment from "moment";
export default {
  data() {
    return {
      HeaderCellStyle: { textAlign: "center" },
      formInline: {
        region: "",
        mode: "",
        auth_status: "",
        op_mode: ""
      },
      cityList: [],
      tableData: [],
      dialogFormCity: false,
      addForm: {
        region: "",
        mode: "",
        op_mode: ""
      },
      labelPosition: "left"
    };
  },
  created() {
    this.loadData();
    this.loadCity();
  },
  methods: {
    loadData() {
      axios
        .Ajax({
          url: "op_city/list"
        })
        .then(res => {
          if (res.code == "0") {
            this.tableData = res.data;
          }
        });
    },
    loadCity() {
      axios
        .Ajax({
          url: "city/list"
        })
        .then(res => {
          if (res.code == "0") {
            this.cityList = res.data;
          } else {
            this.$Message.error(res.message);
          }
        });
    },
    handleReset() {
      Object.assign(this.formInline, {
        region: "",
        mode: "",
        auth_status: "",
        op_mode: ""
      });
    },
    formatterCityAdmin(row, col) {
      return row.city_admins.map(item => item.user_name).join(",");
    },
    formatterUpdateTime(row, col, cellValue) {
      return moment(new Date(cellValue - 0)).format("YYYY.MM.DD hh:mm:ss");
    },
    handleOpen() {
      this.dialogFormCity = true;
    },
    handleFromSuccend() {
      const { op_mode, mode, region } = this.addForm;
      let addArr = {
        op_mode,
        mode,
        region
      };
      axios
        .Ajax({
          url: "city/add",
          data: {
            params: addArr
          }
        })
        .then(res => {
          if (res.code == "0") {
            this.loadData();
            this.$message.success("添加成功");
            this.dialogFormCity = false;
          }
        });
    }
  }
};
</script>
