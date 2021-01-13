<template>
  <div class="headerBox flexBox">
        <a @click="changeLanguage($t('language.lang1'))">{{$t('language.lang1')}}</a> 
        <span class="cricle"></span>
        <a @click="changeLanguage($t('language.lang2'))">{{$t('language.lang2')}} </a>
  </div>
</template>

<script>
export default {
    name:'headerBox',
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
.headerBox{
  position: relative;
  padding: 18px 20px 18px 25px;
  background: #e30613;
  color: #fff;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;;

  span.cricle{
      position: relative;display: block;width: 5px;height: 5px;background: #fff;border-radius: 50%;
      margin: 0px 10px; margin-top: 6%;
  }
}
</style>