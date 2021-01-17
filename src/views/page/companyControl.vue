<template>
    <div class="wrapBox vistorControl pageBox">
        <div class="col_position flex_clum">
            <headerBox :liveHide='liveHide'></headerBox>

            <div class="controlTab col_position smContent">
                <p class="text_right">Page {{currentIndex+1}} of {{controlItemListLength}}</p>
            </div>
            <div class="controlListMain contarin_comControl">
                <div class="controlList_scroll scroll-content">
                    <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper contarin_comControl_r">
                        <div class="companyList col_position">
                            <img :src="thumbigSrcImg" @click="popupVisitorShow('fangda')"/>
                       </div>
                    </v-touch>
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
import {bus} from '../../utils/bus';
const controlItemList=[];
for(var i=0;i<=20; i++){
    controlItemList.push(
        {
        imgSrc:require('@/assets/images/list_img1.png'),
        text:'Page '+i,
        isCurrent:false,   //是否当前放大显示
        },{
        imgSrc:require('@/assets/images/homgImg.jpg'),
        text:'Page '+i+1,
        isCurrent:false,   //是否当前放大显示
        },{
        imgSrc:require('@/assets/images/video_prow.jpg'),
        text:'Page '+i+2,
        isCurrent:false,   //是否当前放大显示
        }
    );
}

export default {
    name:'companyControl',
    components:{footerBox,headerBox,popupVisitor},
    data(){
        return{
            controlItemList,
            controlItemListLength:'',
            thumbigSrcImg:'',  //放大图片路径
            currentIndex:0,
            popUpshow:false,
            popdataList:{},
            liveHide:true,
        }
    },
    mounted(){
        this.firstThumFun();
        bus.$on('popUpHidden',this.popupVisitorHidden);
    },
    methods:{
        //设置默认值
        firstThumFun(){
            this.controlItemList[this.currentIndex].isCurrent=true;
            this.thumbigSrcImg=this.controlItemList[this.currentIndex].imgSrc; 
            this.controlItemListLength=this.controlItemList.length;
        },
        // ShowImgFun(key){
        //     this.CurrentImg=this.ImgListData[key];
        // },
        swiperleft(){
            this.currentIndex++;
            console.log(this.currentIndex);
        },
        swiperright(){
            this.currentIndex--;
            console.log(this.currentIndex);
        },

        popupVisitorShow(bool){
            let keyID='';
            if(bool=='fangda'){
                keyID=this.currentIndex;
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
.controlListMain{
    position: relative;
    background: #f5f5f5; padding-top: 20px; padding-bottom: 20px;padding-right: 10px;
}
.companyList{position: relative; height: 100%; cursor: pointer;display: flex;
    align-items: center;}
.controlList_scroll{position: relative;height: 100%;display: flex;
    align-items: center;}
</style>