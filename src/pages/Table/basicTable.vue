<style lang="less">
@import "../Ui/ui.less";
</style>

<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h2>基本表格</h2>
            </div>
            <div>
                <el-table border :data="tableData" style="width: 100%">
                    <el-table-column prop="id" label ="ID" width="180"></el-table-column>
                    <el-table-column prop="date" label="日期" ></el-table-column>
                    <el-table-column prop="name" label="姓名" ></el-table-column>
                    <el-table-column prop="address" label="地址"> </el-table-column>
                </el-table>  
            </div>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h2>动态数据渲染表格</h2>
            </div>
            <div>
                <el-table border :data="tableData2" style="width: 100%">
                    <el-table-column prop="id" label ="ID" width="180"></el-table-column>
                    <el-table-column prop="name" label="姓名" ></el-table-column>    
                    <el-table-column label="性别" >
                        <template slot-scope="scope">
                            <span v-if="scope.row.sex ==1">女</span>
                            <span v-else-if="scope.row.sex ==0">男</span>
                        </template>
                    </el-table-column>    
                    <el-table-column prop="age" label="年龄" ></el-table-column>    
                    <el-table-column prop="birtday" label="生日" ></el-table-column>    
                    <el-table-column prop="time" label="早起时间" ></el-table-column>    
                </el-table>
            </div>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h2>单选表格</h2>
            </div>
            <div>
                <el-table border :data="tableData2" style="width: 100%">
                     <el-table-column label="" width="65">
                        <template scope="scope">
                            <el-radio :label="scope.row.id" v-model="templateRadio" @change.native="getTemplateRow(scope.$index,scope.row)">&nbsp</el-radio>
                        </template>
                    </el-table-column>

                    <el-table-column prop="id" label ="ID" width="180"></el-table-column>
                    <el-table-column prop="name" label="姓名" ></el-table-column>    
                    <el-table-column label="性别" >
                        <template slot-scope="scope">
                            <span v-if="scope.row.sex ==1">女</span>
                            <span v-else-if="scope.row.sex ==0">男</span>
                        </template>
                    </el-table-column>    
                    <el-table-column prop="age" label="年龄" ></el-table-column>    
                    <el-table-column prop="birtday" label="生日" ></el-table-column>    
                    <el-table-column prop="time" label="早起时间" ></el-table-column>    
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
      tableData: [
        {
          id: 0,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 1,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          id: 2,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          id: 3,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      tableData2: [],
      templateRadio:''
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios
        .Ajax({
          url: "table/list"
        })
        .then(res => {
          if (res.code == "0") {
            this.tableData2 = res.data;
          }
        });
    },
    getTemplateRow(index,row){
        console.log(index,row);
    }
  }
};
</script>

