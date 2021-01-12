<template>
    <div id="Login">
        <div id="nav">
            <el-row>
                <el-button v-for="(item,id) in loginTxt" :key="id" :class="{'nav_active' : item.is_active}" @click="navFun(id)">{{item.text}}</el-button>
            </el-row>
        </div>

        <div id="toggleMain">
            <div class="login_box" v-if="loginTxt[0].is_active == true">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item prop="email" class="form_item">
                        <label>邮箱  </label>
                        <el-input type="email" v-model="ruleForm.email" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item prop="pass" class="form_item">
                        <label>密码</label>
                        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item prop="code" class="form_item">
                        <label>验证码</label>
                        <el-row :gutter="10">
                            <el-col :span="15">
                                <el-input v-model.number="ruleForm.code" maxlength="6" minlength="6"></el-input>
                            </el-col>
                            <el-col :span="6">
                                <el-button type="success">获取验证码</el-button>
                            </el-col>
                        </el-row>
                        
                    </el-form-item>
                    
                    
                    <el-form-item class="form_item">
                        <el-button type="danger" @click="submitForm('ruleForm')">登陆</el-button>
                    </el-form-item>
                </el-form>
            </div>

            <div class="registe_box" v-if="loginTxt[1].is_active == true">
                <registe></registe>
            </div>
        </div>

        
    </div>
</template>

<script>
import registe from "../../components/Registe/registe.vue";
import {stripscript ,EmailValidate ,PassValidate ,CodeValidate} from "@/utils/validate"
export default {
    name:"Login",
    components:{registe},
    data() {

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

      return {
        loginTxt:[
            {text:"登陆" , is_active:true, path:"/login"},
            {text:"注册" , is_active:false, path:"/registe"},
        ],
        ruleForm: {
          email:'',
          pass: '',
          code: ''
        },
        rules: {
          email: [
            { validator: validateEmail, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
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
      navFun(nav_i){
          this.loginTxt.forEach((i) => {
              i.is_active = false;
          })   

          this.loginTxt[nav_i].is_active = true;
      }
    }
}
</script>

<style lang="scss" scoped>

#Login{
    position: relative;
    width: 320px;
    height: auto;
    margin: 0px auto;
    margin-top: 100px;;

    #nav{
        position: relative;
        text-align: center;

        .el-button{
            background: none;
            border:none;
            color: #fff;
        }
        .el-button:hover,
        .el-button.nav_active{background: #2f4255;}
    }
    #toggleMain{
        position: relative;
        margin-top: 10px;
    }
}
</style>