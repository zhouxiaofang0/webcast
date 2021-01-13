<template>
    <div id="login">
        <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px"  class="demo-ruleForm">
            <div class="flexBox flexBox_mar justify_between_stretch regFix">
                <el-form-item class="col_100">
                    <el-input class="user" type="text" v-model="ruleForm.username" placeholder="Username"></el-input>
                 </el-form-item>
            </div>
            <div class="flexBox flexBox_mar justify_between_stretch regFix">
                <el-form-item class="col_100">
                    <el-input type="password" v-model="ruleForm.password" placeholder="Password"></el-input>
                 </el-form-item>
            </div>

            <div class="flexBox justify_between_stretch regFix">
                <el-form-item class="col_100">
                    <h2 class="text_upper btnBox login_btn">{{$t('login.title')}}</h2>
                 </el-form-item>
            </div>
            <h2 class="text_upper text_center or_martb">or</h2>
            <div class="flexBox justify_between_stretch regFix">
                <el-form-item class="col_100">
                    <h2 class="text_upper btnBox regist_btn" @click="loginToRegist">{{$t('register.title')}}</h2>
                 </el-form-item>
            </div>
        </el-form>
    </div>
</template>
<script>
import {bus} from '../../utils/bus'
export default {
    name:'login',
    prop:['dialogRegisteVisible'],
    data(){
        return{
            ruleForm:{
                username:'',
                password:'',
            },

        }
    },
    methods:{
        loginToRegist(){
          this.dialogRegisteVisible = true;
          bus.$emit('registefun',this.dialogRegisteVisible);
        }
    }
}
</script>
<style lang="scss" scoped>
.flexBox_mar{margin-bottom: 25px;}
.or_martb{margin:10px 0px; font-size: 20px;}
.user .el-input__inner{
    background: url("../../assets/images/user.png") left center no-repeat;
    background-size:20px auto;
}
.btnBox{
        padding: 20px;
        width: 100%;
        height: auto;
        position: relative;
        border-radius: 50px;
        color: #fff;
        text-align: center;
        cursor: pointer;
    }
.login_btn{
    background: #e30613;
}
.regist_btn{
        background:#ffad2b;
    }
</style>