<template>
    <div class="wrapBox" :class="{'hiddenBox':dialogRegisteVisible}">
        <div class="flexBox_colum_ipad justify_between_stretch">
             <div class="col_50 col_ipad_100 registrationBox contarin">
                <div class="flex_clum justify_between_stretch">
                    <div class="LogoBox ipad_hide"><router-link  :to="{path:'/'}" class="loginA"><img  src="../assets/images/logo.png"/></router-link></div>
                    <div class="scroll-content homeLefth">   
                        <div class="regiseDown" v-if="!loginVisible">
                            <h1 class="pad_bot30">{{$t('home.Registration')}}</h1>
                            <div class="eventBox">
                                <p>{{$t('home.eventBox.SMtitle')}}</p>
                                <p><span class="eventTit"><i class="el-icon-date"></i>{{$t('home.eventBox.Datatitle')}}</span> <span>{{$t('home.eventBox.DataInfo')}}</span></p>
                                <p><span class="eventTit"><i class="el-icon-alarm-clock"></i>{{$t('home.eventBox.Timetitle')}}</span> <span>{{$t('home.eventBox.TimeInfo')}}</span></p>
                                <p><span class="eventTit"><i class="el-icon-location font20"></i>{{$t('home.eventBox.VenueTitle')}}</span> <span>{{$t('home.eventBox.VenueInfo')}}<br/>{{$t('home.eventBox.VenueInfo1')}}</span></p>
                            </div>

                            <h2 class="text_upper regist_btn" @click="dialogRegisteVisible = true">{{$t('home.Registration')}}</h2>

                            <div class="downBox flex_w justify_between_stretch">
                                <router-link class="col_ph_100" :to="{path:'/'}"><i class="el-icon-download"></i>{{$t('home.downBox.Powerpoint')}}</router-link>
                                <router-link class="col_ph_100" :to="{path:'/'}"><i class="el-icon-download"></i>{{$t('home.downBox.PressRelease')}}</router-link>
                                <router-link class="col_ph_100" :to="{path:'/'}"><i class="el-icon-download"></i>{{$t('home.downBox.Announcement')}}</router-link>
                                <router-link class="col_ph_100" :to="{path:'/'}"><i class="el-icon-download"></i>{{$t('home.downBox.Script')}}</router-link>
                            </div>
                        </div>

                        <div class="LoginCompon" v-if="loginVisible">
                             <h1 class="pad_bot30">{{$t('login.title')}}</h1>
                             <login :dialogRegisteVisible='dialogRegisteVisible'></login>
                        </div>
                    </div>

                    <footerBox></footerBox>
                </div>
                
             </div>
             <div class="col_50 col_ipad_100 antaBackground">
                 <div class="com_Abso headerlang">
                     <langBox></langBox>
                 </div>
                 <div class="LogoBox ipad_show">
                      <router-link :to="{path:'/'}" class="loginA ph_hide"><img  src="../assets/images/logo.png"/></router-link>
                      <router-link :to="{path:'/'}" class="loginA ph_show"><img  src="../assets/images/logo_ph.png"/></router-link>
                 </div>
                 <div class="com_Abso trans_xy homgImg"><img src="../assets/images/homgImg.jpg"/> </div>
                 <div class="com_Abso homeFoot">
                     <p class="text_center"><span>{{$t('home.homeFoot1')}}</span><span>{{$t('home.homeFoot2')}}</span></p>
                 </div>
             </div>
        </div>

        <div class="dialogRegiste contarin" :class="{'dialogRegisteVisible':dialogRegisteVisible}">
            <div class="flexBox justify_between_stretch pad_bot50">
                <h2 class="text_upper color_w">{{$t('register.title')}}</h2>
                <span class="RegisteClose" @click="dialogRegisteVisible = false"><i class="el-icon-close"></i></span>
            </div>
            <div class="scroll-content regisiteScroll">
                <registe :loginVisible='loginVisible'></registe>
            </div>
        </div>
    </div>
</template>
<script>
import {bus} from '../utils/bus'
import footerBox from '../components/common/footerBox.vue';
import langBox from '../components/common/langBox.vue';
import registe from '../components/registe/index.vue';
import login from '../components/login/index.vue';
export default {
    name:'home',
    data(){
        return{
            dialogRegisteVisible:false,
            loginVisible:false,
        }
    },
    components:{footerBox,langBox,registe,login},
    mounted(){
        bus.$on('loginfun',this.loginVisiblefun);
        bus.$on('registefun',this.registeVisiblefun);
    },
    destroyed(){
        bus.$off("loginfun");
        bus.$off("registefun");
    },
    methods:{
       loginVisiblefun(bool){
           this.dialogRegisteVisible=!bool;
           this.loginVisible = bool;
       },
       registeVisiblefun(bool){
           this.dialogRegisteVisible=bool;
           this.loginVisible = !bool;
       }
    }
}
</script>
<style lang="scss" scoped>
.flexBox_colum_ipad{
    height: 100vh;

    .homeLefth{position: relative;height:auto; flex:1;}
    .registrationBox{
        background: #f5f5f5;
        // height: 100%; 
    }
    .antaBackground{
        background:url("../assets/images/anta-background.jpg") center no-repeat;
        background-size: cover;
        height: 100%;
    }

    .eventBox{
        position: relative;
        padding: 40px;
        background: #fff;
        line-height: 1.6;
        p{
            position: relative;
            padding-bottom: 10px;display: flex;

            span:last-child{flex:1;}
            span.eventTit{width: 100px;display: inline-block;}
            span.eventTit i{margin-right: 10px;font-size:18px;}
            span.eventTit i.font20{font-size: 20px;}
        }

        
    }

    

    
}
.downBox{position: relative; margin-top: 35px;}
.downBox a{width: 48%;padding:0px 30px;height: 60px;line-height: 60px; text-align: left; border-radius: 50px;
display: block;border:1px solid #e30613;color: #e30613;margin-top: 20px;}
.downBox a i{display: inline-block; margin-right: 10px;}
a{display: block; position: relative;}
.LogoBox{position: relative; height:200px;}

.homgImg{width: 100%; height: auto;}

.homeFoot{width: 100%; padding: 30px 0px; background: rgba(0,0,0,0.5); bottom: 0px;color: #fff;}

.dialogRegiste{
    position: fixed;
    width: 50%;
    height: 100vh;
    top: 0px;
    left: 0px;
    padding-right: 10px;
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
        transition: all 1.2s;
    -moz-transition: all 1.2s;
    -webkit-transition: all 1.2s;
    -o-transition: all 1.2s;
    background: rgba(0,0,0,0.8);
}
.dialogRegisteVisible{
  transform: translateX(0);
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    z-index: 6;
}

.regisiteScroll{position: relative; width: 100%;height: 85%;}

span.RegisteClose{position: relative;padding-right:13%;color: #fff; font-size:30px; cursor: pointer;}

.regist_btn{margin-top: 20px;}
.LoginCompon{margin-top: 10%;}
@media (max-width:1440px){
	.LogoBox{height: 150px;}
}
</style>