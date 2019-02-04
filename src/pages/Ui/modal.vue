<style lang="less">
@import "./ui.less";
</style>

<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h2>基本模态框</h2>
            </div>
            <div class="text item">
                <el-button type="primary" @click="handleOpen('showModal1')">open</el-button>
                <el-button type="primary" @click="handleOpen('showModal2')">自定义页脚</el-button>
                <el-button type="primary" @click="handleOpen('showModal3')">顶部20px</el-button>
                <el-button type="primary" @click="handleOpen('showModal4')">水平垂直</el-button>
            </div>
        </el-card>

        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h2>信息确认框</h2>
            </div>
            <div class="text item">

                 <el-button type="primary" @click="handleConfrim('confrim')">confrim</el-button>
                 <el-button type="primary" @click="handleConfrim('info')">info</el-button>
                 <el-button type="primary" @click="handleConfrim('success')">success</el-button>
                 <el-button type="primary" @click="handleConfrim('warning')">warning</el-button>
                 <el-button type="primary" @click="handleConfrim('error')">error</el-button>
            </div>
        </el-card>


        <el-row>
            <el-dialog
                title="VUE"
                :visible.sync="showModal1"
                width="30%"
                >
                <span>欢迎学习VUE高级后台管理系统</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="showModal1 = false">取 消</el-button>
                    <el-button type="primary" @click="showModal1 = false">确 定</el-button>
                </span>
            </el-dialog>
            <el-dialog
                title="VUE"
                :visible.sync="showModal2"
                width="30%"
                >
                <span>欢迎学习VUE高级后台管理系统</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="showModal2 = false">删 除</el-button>
                    <el-button type="primary" @click="showModal2 = false">不 删 除</el-button>
                </span>
            </el-dialog>
            <el-dialog
                title="VUE"
                :visible.sync="showModal3"
                width="30%"
                top="20px"
                >
                <span>欢迎学习VUE高级后台管理系统 设置顶部20px</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="showModal3 = false">取 消</el-button>
                    <el-button type="primary" @click="showModal3 = false">确 认</el-button>
                </span>
            </el-dialog>
            <el-dialog
                title="VUE"
                :visible.sync="showModal4"
                width="30%"
                center>
                <span>欢迎学习VUE高级后台管理系统居中显示</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="showModal4 = false">取 消</el-button>
                    <el-button type="primary" @click="showModal4 = false">确 定</el-button>
                </span>
            </el-dialog>
        </el-row>
        
    </div>
</template>
<script>
export default {
  data() {
    return {
      showModal1: false,
      showModal2: false,
      showModal3: false,
      showModal4: false
    };
  },
  methods: {
    handleOpen(type) {
      this[type] = true;
    },
    handleConfrim(type) {
      this.$confirm("Vue是不是很简单", "VUE", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: [type]
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "是的!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "不是"
          });
        });
    }
  }
};
</script>

