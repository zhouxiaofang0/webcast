<template>
    <div class="header smContent">
            <div class="flexBox justify_between_center z_indexU">
                <div class="login">
                    <router-link :to="{path:'/'}" class="loginA ipad_hide videologo"><img  src="../../assets/images/logo.png"/></router-link>
                    <router-link :to="{path:'/'}" class="loginA ipad_show videologo"><img  src="../../assets/images/logo_ph2.png"/></router-link>
                </div>
                <div class="ph_hide">
                    <div class="flexBox headerCenter">
                        <img src="../../assets/images/live_img.png" class="live_img" v-if='liveHide'/>
                        <p class="vistorControlTit"><span>{{$t('vistorControl.headerTit.title1')}}</span><span>{{$t('vistorControl.headerTit.title2')}}</span></p>
                    </div>
                    
                </div>
                <div class="userLang">
                    <div class="userPhoto">
                        <p class="ipad_show"><span class="icon" @click="helloBool=!helloBool"><img src="../../assets/images/user1.png"/></span></p>
                        <p class="ipad_hide"><span class="icon"><img src="../../assets/images/user1.png"/></span></p>
                        <span v-if="helloBool" class="helloName">Hello. Mr. Ringo Chan</span>
                    </div>
                    <div class="headerlang">
                        <langBox></langBox>
                    </div>
                </div>
            
            </div>

            <div class="ph_show headerCBOX">
                <div class="flexBox headerCenter">
                    <img src="../../assets/images/live_img.png" class="live_img" v-if='liveHide'/>
                    <p class="vistorControlTit"><span>{{$t('vistorControl.headerTit.title1')}}</span><span>{{$t('vistorControl.headerTit.title2')}}</span></p>
                </div>
            </div>
    </div>
</template>
<script>
import langBox from '../../components/common/langBox.vue';
export default {
    name:'headerBox',
    props:["liveHide"],
    components:{langBox},
    data(){
        return{
            helloBool:true,
        }
    },
    created(){
       
    },
    methods:{
   
    }

}
</script>
<style lang="scss" scoped>
.userLang{display: flex;}
img.live_img{width: 35px; margin-right: 10px;}
.headerCenter{align-items: flex-start;}
</style>