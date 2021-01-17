<template>
    <div class="wrapBox vistorControl pageBox">
        <div class="flex_clum">
            <headerBox :liveHide='liveHide'></headerBox>

            <div class="controlTab col_position smContent">
                <div class="flex">
                    <i class="fa fa-th-list" :class="{'activeList':isActive==1}" @click="toggleActive(1)"></i>
                    <i class="fa fa-th" :class="{'activeList':isActive==2}" @click="toggleActive(2)"></i>
                </div>
            </div>

            <div class="controlListMain">
                <div class="controlList bgs1" v-if="isActive==1"> 
                    <div class="thumlistBox flex_w justify_between_stretch">
                         <div class="thumlist_left bgopcity">
                            <div class="controlList_scroll scroll-content">
                                <div class="flex_w">
                                    <div class="controlItemBox" v-for="(item,index) in controlItemList" :key='index'>
                                        <dl :class="{'active':item.isCurrent}" @click="thumListClick(index,false)">
                                            <dt><img :src="item.imgSrc"/></dt>
                                            <dd>{{item.text}}</dd>
                                        </dl>
                                    </div>
                                </div>
                             </div>
  
                        </div>
                        <div class="thumlist_right">
                             <div class="thumBigImgBox">
                                 <div class="col_position thumSRvBOx">
                                      <img class="com_Abso trans_xy" :src="thumbigSrcImg" @click="popupVisitorShow('fangda')"/>
                                 </div>
                             </div>
                        </div>
                    </div>    
                </div>
                <!-- :class="{'thumActive':isActive==2}" -->
                <div class="controlList contarin bgopcity" v-if="isActive==2">
                    <div class="controlList_scroll scroll-content">
                        <div class="flex_w contarin_r">
                            <div class="controlItemBox" v-for="(item,index) in controlItemList" :key='index'>
                                <dl :class="{'active':item.isCurrent}" id="zoomImg"  @click="thumListClick(index,true)">
                                    <dt><img :src="item.imgSrc"/></dt>
                                    <dd>{{item.text}}</dd>
                                </dl>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>

            <div class="visitorFooter col_position">
                <footerBox></footerBox>
            </div>
        </div>

        <transition name="show">
            <popupVisitor v-show="popUpshow"></popupVisitor>
        </transition>
    </div>
</template>
<script>

import headerBox from '../../components/common/headerBox.vue';
import footerBox from '../../components/common/footerBox.vue';
import popupVisitor from '../../components/common/popupVisitor.vue';
import {bus} from '../../utils/bus'
const controlItemList=[];
for(var i=0;i<=20; i++){
    controlItemList.push(
        {
        imgSrc:require('@/assets/images/list_img1.png'),
        text:'Page '+i,
        isCurrent:false,   //是否当前放大显示
        },{
        imgSrc:require('@/assets/images/homgImg.jpg'),
        text:'Page '+i,
        isCurrent:false,   //是否当前放大显示
        },{
        imgSrc:require('@/assets/images/video_prow.jpg'),
        text:'Page '+i,
        isCurrent:false,   //是否当前放大显示
        }
    );
}

export default {
    name:"visitorControl",
    components:{footerBox,headerBox,popupVisitor},
    data(){
        return{
            isActive:1,
            controlItemList,
            thumbigSrcImg:'',  //放大图片路径

            popUpshow:false,
            popdataList:{},
            CurrentKey:0,
            liveHide:false,
        }
    },
    mounted(){
        this.firstThumFun();
        bus.$on('popUpHidden',this.popupVisitorHidden);
    },
    methods:{
        //设置默认值
        firstThumFun(){
            this.controlItemList[0].isCurrent=true;
            this.thumbigSrcImg=this.controlItemList[0].imgSrc; 
        },
        toggleActive(key){
            this.isActive=key; 
        },

        thumListClick(key,bool){
            console.log(key,"keykeykey");
            for(var i=0;i<this.controlItemList.length;i++){
                this.controlItemList[i].isCurrent=false;
            }
            this.controlItemList[key].isCurrent=true;
            this.thumbigSrcImg=this.controlItemList[key].imgSrc;
            if(bool){
                this.popupVisitorShow(key);
            }else{
                this.CurrentKey=key;
            }
        },
        popupVisitorShow(bool){
            let keyID='';
            if(bool=='fangda'){
                keyID=this.CurrentKey;
            }else{
                keyID=bool;
            }

            var len = this.controlItemList.length;
            var arrPic = new Array(); //定义一个数组
            for (var i = 0; i < len; i++) {
                arrPic[i] = this.controlItemList[i].imgSrc; //将所有img路径存储到数组中
            }
            
            this.popdataList.key=keyID;
            this.popdataList.arrPic=arrPic;
            bus.$emit("popUpImg", this.popdataList);
            this.popUpshow=true;
            
        },

        popupVisitorHidden(bool){
            this.popUpshow=bool;
        }
    }
}
</script>
<style lang="scss" scoped>
.vistorControl{background:#ebeaea;}
.controlTab{padding-top: 30px; padding-bottom: 10px;}
.controlTab .flex{text-align: right;}
.controlTab .flex i{color: #c4c4c4; margin-left: 20px; font-size: 24px; cursor: pointer; padding-bottom: 4px;}
.controlTab .flex i.activeList{
  color: #e30613;
  border-bottom: 4px solid #e30613;
}


.controlList_scroll{position: relative;height: 100%;}
.controlList{padding-top: 40px;padding-bottom: 0px;position: relative; background: #f5f5f5; padding-right: 10px; height: 100%; border-top: 1px solid #d9d9d9;}
.controlList.bgs1{
    background: #e7e7e7; padding-top: 0px; padding-right: 0px;
}

.bgopcity::after{
    content:"";
    display: block;
    position: absolute;
    width: 100%;
    height:90px;
    bottom: 0px;
    left: 0px;
    background: linear-gradient(to bottom,rgba(245,245,245,0.2),#f5f5f5);
}
.bgs1  .bgopcity::after{background: linear-gradient(to bottom,rgba(231,231,231,0.2),#e7e7e7);}
.controlItemBox{position: relative; width: 14.28555%; padding: 0px 25px; margin-bottom: 50px;}
.controlItemBox dl{cursor: pointer;}
.controlItemBox dl dd{padding-top: 10px;}
.controlItemBox dl dt{border:3px solid #f5f5f5;}
.controlList.bgs1 .controlItemBox dl dt{border:3px solid #e7e7e7;}

.controlList.bgs1 .controlItemBox dl.active dt,
.controlList.bgs1 .controlItemBox dl:hover dt,
.controlItemBox dl.active dt,
.controlItemBox dl:hover dt{
    border:3px solid #d8010d!important;
}





.thumlistBox{
    height: 100%;
    .thumlist_left{
        position: relative;
        width: 350px;
        height: 100%;
        padding: 40px 10px 0px 10px;

        .controlItemBox{width: 100%!important;padding: 0px 100px 0px 40px;}
    }

    .thumlist_right{
        position: relative; flex: 1; padding-left: 30px;height: 100%;

        .thumBigImgBox{position: relative; width: 100%; height: 100%; background: #f5f5f5; padding: 35px 65px;}
        .thumSRvBOx{overflow: hidden; height: 100%; cursor: pointer;}
    }
}
</style>