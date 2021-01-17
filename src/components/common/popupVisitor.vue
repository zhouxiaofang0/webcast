<template>
    <div class="wrapBox">
         <div class="mask-layer">
             <div class="mask-layer-black" @click="ClosePop"></div>   
             <div class="mask-layer-container-operate">               
                    <span class="mask-out mask_plusbtn" @click="ZoomOut"><i class="fa fa-search-plus"></i></span>           
                    <span class="mask-in mask_plusbtn" @click="ZoomIn"><i class="fa fa-search-minus"></i></span>                 
                    <span class="mask-close mask_plusbtn" @click="ClosePop">×</span>           
            </div>

             <span class="mask-prev mask_btn com_Abso trans_y" @click="PrevClick"><i class="fa fa-angle-left"></i></span> 
             <div class="mask-layer-container">  
                <div class="mask-layer-imgbox auto-img-center">     
                    <div class="maskIMGBOx trans_y">
                        <p class="vistorControlTit text_center"><span>{{$t('vistorControl.headerTit.title1')}}</span><span>{{$t('vistorControl.headerTit.title2')}}</span></p>
                        <div class="zoomHhidden"><img :src="CurrentImg" alt="" /></div>
                        <p class="text_center padtop10">page{{CurrentKey+1}}/{{ImgListlen}}</p>
                    </div>
                </div>   
            </div>
            <span class="mask-next mask_btn com_Abso trans_y" @click="NextClick"><i class="fa fa-angle-right"></i></span> 
        </div>
    </div>
</template>
<script>
import {bus} from '../../utils/bus'
export default {
    name:'popupVisitor',
    mounted(){
        bus.$on("popUpImg",this.thumListClick1);
    },
    destroyed(){
        bus.$off("popUpImg");
    },
    data(){
        return{
            CurrentImg:'',
            CurrentKey:'',
            ImgListData:[],
            ImgListlen:'',
            zoom_n:1,
        }
    },
    methods:{
        thumListClick1(popdataList){
            this.CurrentKey=popdataList.key;
            this.ImgListData=popdataList.arrPic;
            this.ImgListlen=popdataList.arrPic.length;
            this.ShowImgFun(this.CurrentKey);

        },
        ShowImgFun(key){
            this.CurrentImg=this.ImgListData[key];
        },
        PrevClick(){
            this.CurrentKey--;
            if (this.CurrentKey == -1) {
                this.CurrentKey = this.ImgListlen-1;
            }

            this.ShowImgFun(this.CurrentKey);
        },
        NextClick(){
            this.CurrentKey++;
            if (this.CurrentKey == this.ImgListlen) {
                this.CurrentKey = 0;
            }
            this.ShowImgFun(this.CurrentKey);
        },
        ZoomOut(){
            this.zoom_n += 0.1;
            $(".mask-layer-imgbox img").css({
                "transform": "scale(" + this.zoom_n + ")",
                "-moz-transform": "scale(" + this.zoom_n + ")",
                "-ms-transform": "scale(" + this.zoom_n + ")",
                "-o-transform": "scale(" + this.zoom_n + ")",
                "-webkit-transform": "scale(" + this.zoom_n + ")"
            });
        },
        ZoomIn(){
            this.zoom_n -= 0.1;
            this.zoom_n = this.zoom_n <= 0.1 ? 0.1 : this.zoom_n;
            $(".mask-layer-imgbox img").css({
                "transform": "scale(" + this.zoom_n + ")",
                "-moz-transform": "scale(" + this.zoom_n + ")",
                "-ms-transform": "scale(" + this.zoom_n + ")",
                "-o-transform": "scale(" + this.zoom_n + ")",
                "-webkit-transform": "scale(" + this.zoom_n + ")"
            });
        },
        ClosePop(){
            bus.$emit('popUpHidden',false);
        },
    }
}
</script>
<style lang="scss" scoped>
.mask-layer {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2020;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.mask-layer > div {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.mask-layer-black {
    width: 100%;
    height: 100%;
    background: #000;
    opacity: .85;
    position: absolute;
    top: 0;
    left: 0;
}
.mask-layer-container {
    width: 80%;
    height: 90%;
    position: absolute;
    margin: 0 auto;
    z-index:6;
    padding: 0 10px;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.mask-layer-container-operate {
    position: absolute;
    width: auto;
    height: auto;
    right: 40px;
    top: 10%;
        display: flex;
    align-items: center;
    z-index: 8;
}

.mask-layer-imgbox {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
}

.mask-layer-imgbox > .maskIMGBOx {
    position: absolute;
        width: 100%;
        height: 100%;
}

.mask-layer-imgboxp > .maskIMGBOx > img {
    display: inline-block;
}
.maskIMGBOx p{color: #fff; padding-bottom: 10px;}
.maskIMGBOx p.padtop10{padding-bottom:0px;padding-top: 10px;}
.mask_plusbtn{
    color: #ffffff; cursor: pointer; font-size:22px;  margin: 0px 10px;
}
.mask-close.mask_plusbtn{font-size: 46px;}
.mask_btn{font-size:65px; color: #ffffff; cursor: pointer;}
.mask-prev{left: 40px;}
.mask-next{right: 40px;}

.zoomHhidden{position: relative; width: 100%; height: 85%; overflow: hidden;align-items: center;
    display: flex;}
</style>