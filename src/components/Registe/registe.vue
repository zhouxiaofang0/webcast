<template>
    <div id="registe">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item prop="email" class="form_item">
                <label>邮箱</label>
                <el-input type="email" v-model="ruleForm.email" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="pass" class="form_item">
                <label>密码</label>
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass" class="form_item">
                <label>确认密码</label>
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="code" class="form_item">
                <label>验证码</label>
                <el-row :gutter="10">
                    <el-col :span="16">
                        <el-input v-model.number="ruleForm.code" maxlength="6" minlength="6"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <el-button type="success">获取验证码</el-button>
                    </el-col>
                </el-row>
                
            </el-form-item>     
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {stripscript ,EmailValidate ,PassValidate ,CodeValidate} from "@/utils/validate"
export default {
    name:"registe",
    data() {
      //验证验证码
      var checkCode = (rule, value, callback) => {
        this.ruleForm.email = stripscript(value);
        value = this.ruleForm.email;

        if (value === '') {
            callback(new Error('验证码不能为空'));
        }else if(CodeValidate(value)){
            callback(new Error('请输入数字格式验证码'));
        }else {
          callback();
        }
 
      };
      
      //验证邮箱
      var validateEmail = (rule, value, callback) => {
        this.ruleForm.email = stripscript(value);
        value = this.ruleForm.email;
        if (value === '') {
            callback(new Error('请输入邮箱账户'));
        }else if(EmailValidate(value)){
            callback(new Error('请输入格式邮箱账户'));
        }else {
          callback();
        }
      };
      //验证密码
      var validatePass = (rule, value, callback) => {
        this.ruleForm.email = stripscript(value);
        value = this.ruleForm.email;
        
        if (value === '') {
          callback(new Error('请输入密码'));
        }else if(PassValidate(value)){
            callback(new Error('请输入数字+字母格式邮箱账户'));
        }else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      //再次输入密码
      var validatePass2 = (rule, value, callback) => {
        this.ruleForm.email = stripscript(value);
        value = this.ruleForm.email;

        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          email:'',
          pass: '',
          checkPass: '',
          code: ''
        },
        rules: {
          email: [
            { validator: validateEmail, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          code: [
            { validator: checkCode, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      
    }
}
</script>

<style lang="scss" scoped>
body{
    background: #344a5f;
}

#Login{
    position: relative;
    width: 320px;
    height: auto;
    margin: 0px auto;
    margin-top: 150px;;

    #nav{
        position: relative;
        text-align: center;

        .el-button{
            background: none;
            border:none;

            a{
                color: #fff;
            }
        }
        .el-button:hover,
        .el-button.nav_active{background: #2f4255;}
    }

    #toggleMain{
        position: relative;
        margin-top: 10px;

        .el-form-item__label{
            display: block;
            width:100%!important;
            text-align: left;
            color: #fff;
        }
        .el-form-item__content{
            margin-left: 0px!important;
        }
    }
}
</style>