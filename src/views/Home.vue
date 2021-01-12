<template>
    <div class="wrapBox">
        <div class="flexBox_colum_ipad justify_between_stretch">
             <div class="col_50 col_ipad_100 registrationBox">
                 <router-link  :to="{path:'/login'}" class="loginA"><img  src="../assets/images/logo.png"/></router-link>
                 <h1 class="pad_bot30">{{$t('home.Registration')}}</h1>
                 <div class="eventBox">
                     <p>{{$t('home.eventBox.SMtitle')}}</p>
                     <p><span class="eventTit"><i class="fa fa-calendar"></i>{{$t('home.eventBox.Datatitle')}}</span> <span>{{$t('home.eventBox.DataInfo')}}</span></p>
                     <p><span class="eventTit"><i class="fa fa-clock-o"></i>{{$t('home.eventBox.Timetitle')}}</span> <span>{{$t('home.eventBox.TimeInfo')}}</span></p>
                     <p><span class="eventTit"><i class="fa fa-map-marker font20"></i>{{$t('home.eventBox.VenueTitle')}}</span> <span>{{$t('home.eventBox.VenueInfo')}}<br/>{{$t('home.eventBox.VenueInfo1')}}</span></p>
                 </div>

                 <h2 class="text_upper regist_btn">{{$t('home.Registration')}}</h2>
             </div>
             <div class="col_50 col_ipad_100 antaBackground">
                 
                 <div>
                    <a @click="changeLanguage($t('language.lang1'))">{{$t('language.lang1')}}</a> 
                    <a @click="changeLanguage($t('language.lang2'))">{{$t('language.lang2')}} </a>
                 </div>
             </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Home',
    data:{
        return:{}
    },
    methods:{
        changeLanguage(lang){
            console.log(lang);
            if(lang=="简体"){
                this.$i18n.locale='sc';   //设置中英文模式
            }else if(lang=="繁体"){
                this.$i18n.locale='tc'; //设置中英文模式
            }else if(lang=="EN"){
                this.$i18n.locale='en'; 
            }else{
                his.$i18n.locale='en';
            }
            localStorage.setItem('languageSet',this.$i18n.locale)   //将用户设置存储到localStorage以便用户下次打开时使用此设置
        },
    }
}
</script>
<style lang="scss" scoped>
.flexBox_colum_ipad{
    height: auto;
    min-height: 100vh;
    .registrationBox{
        background: #f5f5f5;
        height: 100%;
        padding: 80px 160px 35px 160px;
    }
    .antaBackground{
        background: chartreuse;
        height: 100%;
    }

    .eventBox{
        position: relative;
        padding: 40px;
        background: #fff;
        line-height: 1.6;
        p{padding-bottom: 10px;display: flex;}

        span.last-child{flex:1;}
        span.eventTit{width: 100px;display: inline-block;}
        span.eventTit i{margin-right: 10px;font-size:18px;}
        span.eventTit i.font20{font-size: 20px;}
    }

    

    .regist_btn{
        padding: 20px;
        width: 100%;
        height: auto;
        position: relative;
        border-radius: 50px;
        background: #e30613;
        color: #fff;
        text-align: center;
        margin-top:20px;
    }
}

a{display: block; position: relative;}
a.loginA{margin-bottom: 5rem;}
</style>