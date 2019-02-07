<style lang="less">
@import "../Ui/ui.less";
</style>

<template>
    <div class="user">
        <el-card>
            <el-button type="primary" icon="el-icon-plus">创建员工</el-button>
            <el-button icon="el-icon-edit">修改员工</el-button>
            <el-button>员工详情</el-button>
            <el-button icon="el-icon-delete" style="color:red">删除员工</el-button>
        </el-card>
        <div class="content_warp">
            <el-table :data="tableData"  :header-cell-style="HeaderCellStyle" border style="width: 100%">
                <el-table-column label="" width="65">
                    <template scope="scope">
                        <el-radio :label="scope.row.id" v-model="templateRadio" @change.native="getTemplateRow(scope.$index,scope.row)">&nbsp;</el-radio>
                    </template>
                </el-table-column>
                <el-table-column prop="id" label="ID" width="40"></el-table-column>
                <el-table-column prop="user_name" label="用户名" width="100"> </el-table-column>
                <el-table-column label="性别" width="70"> 
                    <template slot-scope="scope">
                        <span v-if="scope.row.sex == 1">女</span>
                        <span v-if="scope.row.sex == 2">男</span>
                    </template>
                </el-table-column>
                <el-table-column prop="distance" label="状态">
                    <template slot-scope="scope">
                        <span v-if="scope.row.state == 1">咸鱼一条</span>
                        <span v-if="scope.row.state == 2">风华浪子</span>
                        <span v-if="scope.row.state == 3">北大才子一枚</span>
                        <span v-if="scope.row.state == 4">百度FE</span>
                        <span v-if="scope.row.state == 5">创业者</span>
                    </template>    
                </el-table-column>
                <el-table-column label="爱好" width="100"> 
                    <template slot-scope="scope">
                        <span v-if="scope.row.interest == 1">游泳</span>
                        <span v-if="scope.row.interest == 2">打游戏</span>
                        <span v-if="scope.row.interest == 3">打篮球</span>
                        <span v-if="scope.row.interest == 4">踢足球</span>
                        <span v-if="scope.row.interest == 5">跑步</span>
                        <span v-if="scope.row.interest == 6">爬山</span>
                        <span v-if="scope.row.interest == 7">骑行</span>
                    </template>
                </el-table-column>
                <el-table-column label="婚姻" width="100">
                    <template slot-scope="scope">
                        <span v-if="scope.row.isMarried == 1">未婚</span>
                        <span v-if="scope.row.isMarried == 2">已婚</span>
                    </template>
                </el-table-column>
                <el-table-column prop="birthday" label="生日"> </el-table-column>
                <el-table-column prop="address" label="联系地址"> </el-table-column>
                <el-table-column prop="time" label="早起时间" > </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import axios from "../../axios/axios.js";
export default {
  data() {
    return {
      tableData: [],
      templateRadio: "",
      HeaderCellStyle: {
        textAlign: "center"
      }
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios
        .Ajax({
          url: "user/list"
        })
        .then(res => {
          if (res.code == "0") {
            this.tableData = res.data;
          }
        });
    },
    getTemplateRow(index, row) {
      console.log(index, row);
    }
  }
};
</script>

