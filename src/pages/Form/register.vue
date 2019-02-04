<template>
    <div>
        <el-card class="card-box">
            <div slot="header" class="clearfix">
                <h2>注册表单</h2>
            </div>
            <div class="text item">
                <el-row style="width:500px;">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="用户名:" prop="name">
                            <el-input v-model="ruleForm.name" placeholder="请输入用户名" />
                        </el-form-item>
                        <el-form-item label="密码:" prop="password">
                            <el-input v-model="ruleForm.password" type="password" placeholder="请输入密码" />
                        </el-form-item>
                        <el-form-item label="性别:" prop="gender">
                            <el-radio v-model="ruleForm.gender" label="1">男</el-radio>
                            <el-radio v-model="ruleForm.gender" label="2">女</el-radio>
                        </el-form-item>
                        <el-form-item label="年龄:" prop="age">
                             <el-input-number v-model="ruleForm.age" controls-position="right"  :min="18" :max="60" />
                        </el-form-item>
                        <el-form-item label="当前状态:">
                            <el-select v-model="ruleForm.state" placeholder="当前状态" style="width:400px;">
                                <el-option label="咸鱼一条" value="1"></el-option>
                                <el-option label="风华浪子" value="2"></el-option>
                                <el-option label="创业者" value="3"></el-option>
                                <el-option label="百度精英" value="4"></el-option>
                                <el-option label="北大才鸟一人" value="5"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="爱好:">
                            <el-select v-model="ruleForm.hobby" multiple  placeholder="请选择爱好" style="width:400px;">
                                <el-option label="打游戏" value="1" />
                                <el-option label="打篮球" value="2" />
                                <el-option label="爬山" value="3" />
                                <el-option label="游泳" value="4" />
                                <el-option label="跑步" value="5" />
                                <el-option label="骑行" value="6" />
                                <el-option label="踢足球" value="7" />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="是否已婚:">
                            <el-switch v-model="ruleForm.married"></el-switch>
                        </el-form-item>
                        <el-form-item label="生日:" prop="birthday">
                            <el-date-picker type="datetime" placeholder="选择日期" v-model="ruleForm.birthday" style="width: 100%;" />
                        </el-form-item>
                        <el-form-item label="联系地址:" prop="site">
                            <el-input type="textarea" v-model="ruleForm.site"></el-input>
                        </el-form-item>
                        <el-form-item label="早起时间:">
                            <el-time-picker v-model="ruleForm.time" :picker-options="{ selectableRange: '00:00:00 - 20:30:00' }" placeholder="任意时间点">
                            </el-time-picker>
                        </el-form-item>
                        <el-form-item label="头像">
                            <el-upload
                                action="https://jsonplaceholder.typicode.com/posts/"
                                list-type="picture-card">
                                <i class="el-icon-plus"></i>
                            </el-upload>
                            <el-dialog :visible.sync="dialogVisible">
                                <img width="100%" :src="ruleForm.userUrl" alt="">
                            </el-dialog>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
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
        password: "",
        gender: "1",
        age: "",
        state: "2",
        hobby: ["2", "3", "4"],
        married: true,
        birthday:'',
        site:'上海市杨浦区五角场',
        time:'',
        userUrl:''
      },
      dialogVisible: false,
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 4, max: 8, message: "长度在 4 到 8 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "长度在 6 到 12 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

