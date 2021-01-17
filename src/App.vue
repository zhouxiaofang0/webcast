<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang='scss'>
body{background: #f5f5f5;}
#app{ margin:0px; padding:0px;}


//登陆 注册样式
.form_item {
  .el-form-item__content{
    margin-left: 0px!important;

    label{color: #fff;}

    .el-button--danger{
        width: 100%;
    }
  }
}

</style>