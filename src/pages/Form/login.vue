<style lang="less">
@import "../Ui/ui.less";
</style>
<template>
    <div>
        <el-card class="card-box">
            <div slot="header" class="clearfix">
                <h2>行内块表单</h2>
            </div>
            <div class="text item">
                <el-form :inline="true"  class="demo-form-inline">
                    <el-form-item >
                        <el-input  placeholder="用户名"></el-input>
                    </el-form-item>
                    <el-form-item >
                        <el-input  placeholder="用户密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>

        <el-card class="card-box">
            <div slot="header" class="clearfix">
                <h2>登录水平表单</h2>
            </div>
            <div class="text item">
                <el-row style="width:300px">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                        <el-form-item prop="name">
                            <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
                        </el-form-item>
                        <el-form-item  prop="password">
                            <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="handleLogin('ruleForm')">登录</el-button>
                        </el-form-item>
                        </el-form>
                </el-row>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        password: ""
      },
      rules: {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },

  methods: {
    handleLogin(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("登录成功");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

