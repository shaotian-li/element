
<style lang="less">
@import "./ui.less";
</style>

<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h2>通知提醒框</h2>
            </div>
            <div class="text item">
                <el-button  type="primary" @click="handleOpen('success')">success</el-button>
                <el-button  type="primary" @click="handleOpen('warning')">warning</el-button>
                <el-button  type="primary" @click="handleOpen('info')">info</el-button>
                <el-button  type="primary" @click="handleOpen('error')">error</el-button>
            </div>
       </el-card>
    </div>
</template>

<script>
export default {
  methods: {
    handleOpen(type) {
      this.$message({
        showClose: true,
        message: "恭喜你，VUE简单技术学的还可以",
        type: [type]
      });
    }
  }
};
</script>

