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
                <el-button type="primary" @click="handleOpen('success')">success</el-button>
                <el-button type="primary" @click="handleOpen('warning')">warning</el-button>
                <el-button type="primary" @click="handleOpen('info')">info</el-button>
                <el-button type="primary" @click="handleOpen('error')">error</el-button>
            </div>
       </el-card>

       <el-card class="box-card">
           <div slot="header" class="clearfix">
               <h2>通知提醒框</h2>
           </div>
           <div class="text item">
                <el-button type="primary" @click="handleOpen('success','top-left')">左上</el-button>
                <el-button type="primary" @click="handleOpen('warning','top-right')">右上</el-button>
                <el-button type="primary" @click="handleOpen('info','bottom-right')">右下</el-button>
                <el-button type="primary" @click="handleOpen('error','bottom-left')">左下</el-button>
           </div>
       </el-card>
    </div>
</template>
<script>
export default {
  methods: {
    handleOpen(type, position) {
      if (position) {
        this.$notify[type]({
          title: "vue",
          message: "简单的通知框",
          position: position
        });
      } else {
        this.$notify[type]({
          title: "vue",
          message: "简单的通知框"
        });
      }
    }
  }
};
</script>

