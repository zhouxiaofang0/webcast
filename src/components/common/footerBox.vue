<template>
    <div class="footerBox">
         <div class="footDiv"><router-link  :to="{path:'/'}" class="foot_btn"><img src="../../assets/images/powered.png"/></router-link></div>
    </div>
</template>
<script>
export default {
    name:'headerBox',
}
</script>
<style scoped>
.footerBox{position: relative;width: 100%; height:100px; overflow: hidden;display: flex;
    align-items: flex-end;
    justify-content: center;}
a.foot_btn{position: relative; width: 162px; margin: 0px auto;display: block;}
</style>