<style lang="less">
@import "../Ui/ui.less";
</style>
<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h2>头部固定</h2>
            </div>
            <div>
                 <el-table :data="tableData" height="400" border  style="width: 100%">
                    <el-table-column prop="id" label="ID"> </el-table-column>
                    <el-table-column label="性别">
                        <template slot-scope="scope">
                            <span v-if="scope.row.sex == 0">男</span>
                            <span v-else-if="scope.row.sex == 1">女</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="age" label="年龄"></el-table-column>
                    <el-table-column prop="time" label="时间"></el-table-column>
                    <el-table-column prop="birtday" label="生日"></el-table-column>
                </el-table>
            </div>
        </el-card>
        
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h2>左侧固定</h2>
            </div>
            <div>
                <el-table :data="tableData"  border  style="width: 100%">
                    <el-table-column prop="id" label="ID" width="100" fixed> </el-table-column>
                    <el-table-column label="性别"  width="280">
                        <template slot-scope="scope">
                            <span v-if="scope.row.sex == 0">男</span>
                            <span v-else-if="scope.row.sex == 1">女</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="280"></el-table-column>
                    <el-table-column prop="age" label="年龄" width="280"></el-table-column>
                    <el-table-column prop="time" label="时间" width="280"></el-table-column>
                    <el-table-column prop="birtday" label="生日" width="100" fixed="right"></el-table-column>
                </el-table>
            </div>
        </el-card>

        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h2>表格排序</h2>
            </div>
            <div>
                <el-table :data="tableData"  border  style="width: 100%">
                    <el-table-column prop="id" label="ID" width="100" fixed> </el-table-column>
                    <el-table-column label="性别"  width="280">
                        <template slot-scope="scope">
                            <span v-if="scope.row.sex == 0">男</span>
                            <span v-else-if="scope.row.sex == 1">女</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="name" sortable label="姓名" width="280"></el-table-column>
                    <el-table-column prop="age" sortable label="年龄" width="280"></el-table-column>
                    <el-table-column prop="time" label="时间" width="280"></el-table-column>
                    <el-table-column prop="birtday" sortable label="生日" width="100" fixed="right"></el-table-column>
                </el-table>
            </div>
        </el-card>

         <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h2> 操作表格 </h2>
            </div>
            <div>
                <el-table :data="tableData2"  border  style="width: 100%">
                    <el-table-column prop="id" label="ID"> </el-table-column>
                    <el-table-column label="性别">
                        <template slot-scope="scope">
                            <span v-if="scope.row.sex == 0">男</span>
                            <span v-else-if="scope.row.sex == 1">女</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="name"  label="姓名"></el-table-column>
                    <el-table-column prop="handle" label="操作">
                        <template slot-scope="scope">
                            <div  v-if="scope.row.handle == 1">
                                <el-badge type="success" is-dot class="item"></el-badge>
                                <span class="item_span">成功</span>
                            </div>
                            <div v-if="scope.row.handle == 2">
                                <el-badge  type="warning" is-dot class="item"></el-badge>
                                <span class="item_span">警告</span>
                            </div>
                             <div v-if="scope.row.handle == 3">
                                <el-badge  type="danger" is-dot class="item"></el-badge>
                                <span class="item_span">失败</span>
                            </div>
                             <div  v-if="scope.row.handle == 4">
                                <el-badge type="info" is-dot class="item"></el-badge>
                                <span class="item_span">默认</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="age"  label="年龄"></el-table-column>
                    <el-table-column prop="time" label="时间"></el-table-column>
                    <el-table-column prop="birtday" label="生日"></el-table-column>
                </el-table>
            </div>
        </el-card>
    </div>
</template>

<script>
import axios from "../../axios/axios.js";
export default {
  data() {
    return {
      tableData: [],
      tableData2: []
    };
  },
  created() {
    this.loadData();
    this.handleData();
  },
  methods: {
    loadData() {
      axios.Ajax({ url: "table/highList" }).then(res => {
        if (res.code == "0") {
          this.tableData = res.data;
        }
      });
    },
    handleData() {
      axios.Ajax({ url: "table/handlelist" }).then(res => {
        if (res.code == "0") {
          this.tableData2 = res.data;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.item {
  padding-top:5%;
}
.item_span{
    margin-left:30%;
}
</style>
