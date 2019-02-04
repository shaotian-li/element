
<style lang="less">
@import "./index.less";
</style>
<template>
    <div>
        <div class="logo">
            <h1>Vue MS</h1>
        </div>
        <el-menu
            default-active="1"
            router
            class="el-menu-vertical-demo"
            background-color="#001529"
            text-color="#fff"
            style="border-right:1px solid #001529"
            active-text-color="#ffd04b">
            <template v-for="(item,index) in this.$router.options.routes" v-if="!item.hidden">
                <el-menu-item v-if="item.leaf && item.children.length >0" :index="item.children[0].path">
                    <span slot="title">{{item.name}}</span>
                </el-menu-item>
                <el-submenu :index="index + '' " v-if="!item.leaf">
                    <template slot="title">
                        <span>{{item.name}}</span>
                    </template>
                    <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path">
                        <span>{{child.name}}</span>
                    </el-menu-item>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>
<script>
export default {
  created() {
  },
  methods: {
   
  }
};
</script>
