<template>
    <div id="login">
        <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px"  class="demo-ruleForm">
            <div class="flexBox flexBox_mar justify_between_stretch loginInfo">
                <el-form-item class="col_100">
                    <div class="loginIcon loginIconuse"></div>
                    <el-input class="loginInput" type="text" v-model="ruleForm.username" placeholder="Username"></el-input>
                 </el-form-item>
            </div>
            <div class="flexBox flexBox_mar justify_between_stretch loginInfo">
                <el-form-item class="col_100">
                    <div class="loginIcon loginIconpass"></div>
                    <el-input class="loginInput" type="password" v-model="ruleForm.password" placeholder="Password"></el-input>
                 </el-form-item>
            </div>

            <div class="flexBox justify_between_stretch regFix">
                <el-form-item class="col_100">
                    <h2 class="text_upper btnBox login_btn" @click="loginToPage">{{$t('login.title')}}</h2>
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
    props:['dialogRegisteVisible'],
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
        },

        loginToPage(){
            this.$router.push({
                // path: `/viewmessage/${this.names[index]}`,
                // 使用下列方法方法跳转路由，就不会出现点击tab后再次跳转的bug
                name: 'videoIntro',
                // params: { name: this.names[index] }
                
            })
        }
    }
}
</script>
<style lang="scss" scoped>

.flexBox_mar{margin-bottom: 25px;}
.or_martb{margin:10px 0px; font-size: 20px;}

.loginIcon{
    position: relative;
    height: 60px;
    display: inline-block;
    width:80px;
}
.loginIconuse{
   background: url("../../assets/images/user.png") center no-repeat;
    background-size:30px auto;
}
.loginIconpass{
    background: url("../../assets/images/pass.png") center no-repeat;
    background-size:30px auto;
}
.loginInput{
    position: relative;
    display: inline-block;
    flex:1;
}

.btnBox{
        height: 60px;
        line-height: 60px;
        width: 100%;
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