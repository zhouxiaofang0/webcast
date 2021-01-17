<template>
    <div class="wrapBox">
        <div class="com_Abso headerlang">
            <langBox></langBox>
        </div>
        <div class="video_box col_position scroll-content">
            <div class="video_bg">
                <div class="videoPlaybox">
                    <video ref='mediaVideo' muted autoplay="autoplay" poster="../../assets/images/video_prow.jpg" controls="controls">
                         <source src="../../assets/video/aboutanta-05.mp4" type="video/ogg" />
                         <source src="../../assets/video/aboutanta-05.mp4" type="video/mp4" />
                         <!-- <source src="https://www.w3school.com.cn/i/movie.mp4" type="video/mp4" /> -->
                    </video>
                </div>
            </div>
            <div class="loginBOx">
                <router-link :to="{path:'/'}" class="loginA ph_hide videologo"><img  src="../../assets/images/logo.png"/></router-link>
                <router-link :to="{path:'/'}" class="loginA ph_show videologo"><img  src="../../assets/images/logo_ph1.png"/></router-link>
            </div>
            <div class="next_btn">
                 <h2 v-if='isNext' class="text_upper regist_btn" @click="nextpagefun()">{{$t('videoIntro.next')}}</h2>
                 <h2 v-if="!isNext" class="text_upper regist_btn" @click="nextpagefun()">{{$t('videoIntro.skip')}}</h2>
            </div>

            <div class="videoFooter"><footerBox></footerBox></div>
        </div>
        
    </div>
</template>
<script>
import langBox from '../../components/common/langBox.vue';
import footerBox from '../../components/common/footerBox.vue';
export default {
    name:'videoIntro',
    components:{langBox,footerBox},
    data(){
        return{
            isNext:false,
        }
    },
    mounted() {
        this.$refs.mediaVideo.addEventListener('ended', this.playEnded);
    },
    methods:{

        playEnded() {
            this.isNext = true;
        },

        nextpagefun(){
            this.$router.push({
                name: 'visitorControl',
            })
        },
    }
}
</script>
<style lang="scss" scoped>
.loginBOx{position: relative; width: 70%; max-width: 640px; margin: 0px auto; margin-top: 40px; margin-bottom: 50px;}
.next_btn{width: 315px;position: relative;margin: 0px auto;}
</style>