<style lang="less">
@import "./ui.less";
</style>


<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h2>基本按钮</h2>
            </div>
            <div class="text item">
                <el-button>默认按钮</el-button>
                <el-button type="primary">主要按钮</el-button>
                <el-button type="success">成功按钮</el-button>
                <el-button type="info">信息按钮</el-button>
                <el-button type="warning">警告按钮</el-button>
                <el-button type="danger">危险按钮</el-button>
            </div>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h2>图形按钮</h2>
            </div>
            <div class="text item">
                <el-button  icon="el-icon-edit">修改</el-button>
                <el-button  icon="el-icon-plus">添加</el-button>
                <el-button  icon="el-icon-share">链接</el-button>
                <el-button  icon="el-icon-delete">删除</el-button>
                <el-button icon="el-icon-search" circle></el-button>
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
                <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
            </div>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h2>禁用按钮</h2>
            </div>
            <div class="text item">
                <el-button disabled>默认按钮</el-button>
                <el-button type="primary" disabled>主要按钮</el-button>
                <el-button type="success" disabled>成功按钮</el-button>
                <el-button type="info" disabled>信息按钮</el-button>
                <el-button type="warning" disabled>警告按钮</el-button>
                <el-button type="danger" disabled>危险按钮</el-button>
            </div>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h2>loading按钮</h2>
            </div>
            <div class="text item">
                <el-button type="primary" :loading="loading">确认</el-button>
                <el-button type="primary" :loading="loading" circle></el-button>
                <el-button :loading="loading">点击加载</el-button>
                <el-button :loading="loading" circle></el-button>
                <el-button type="primary" @click="handleCloseLoading">关闭</el-button>
            </div>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h2>按钮组</h2>
            </div>
            <div class="text item">
                <el-button-group>
                    <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
                    <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                </el-button-group>
            </div>
        </el-card>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h2>尺寸按钮</h2>
            </div>
            <div class="text item">
                <el-radio-group v-model="size" style="marginRight:10px;">
                    <el-radio label="">大</el-radio>
                    <el-radio label="medium">中</el-radio>
                    <el-radio label="small">小</el-radio>
                    <el-radio label="mini">超小</el-radio>
                </el-radio-group>
                <el-button :size="size">Vue</el-button>
                <el-button type="primary" :size="size" >Vue</el-button>
                <el-button type="success" :size="size" >Vue</el-button>
                <el-button type="warning" :size="size" >Vue</el-button>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading:true,
            size:'mini'
        }
    },
    methods: {
        handleCloseLoading(){
            this.loading = false;e
        }
    },
};
</script>
