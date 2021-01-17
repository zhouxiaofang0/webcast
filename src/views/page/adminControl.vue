<template>
    <div class="wrapBox vistorControl pageBox">
        <div class="col_position flex_clum">
            <headerBox :liveHide='liveHide'></headerBox>

            <div class="controlTab col_position smContent">
                <p class="text_right">Page {{CurrentKey+1}} of {{controlItemListLength}}</p>
            </div>
            <div class="controlListMain">
                <div class="col_position flex_clum">
                    <div class="controlListTOP contarin">
                        <div class="controlList_scroll scroll-content">
                            <div class="companyList col_position contarin_r">
                                <div class="slideIMgBox col_position">
                                    <span class="slide-prev slide_btn com_Abso trans_y" @click="PrevClick"><i class="fa fa-angle-left"></i></span>  
                                    <div class="slideImgCenter"><img :src="thumbigSrcImg"/></div>
                                    <span class="slide-next slide_btn com_Abso trans_y" @click="NextClick"><i class="fa fa-angle-right"></i></span> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="controlListBot" :class="{'hideBox':upDown}">
                        <span class="upDown com_Abso trans_x" @click="upDown=!upDown"><i class="fa" :class="upDown?'fa-angle-up':'fa-angle-down'"></i></span>
                        <div class="controlList_scroll scroll-content">
                            <div class="flexBox">
                                <div class="controlItemBox" v-for="(item,index) in controlItemList" :key='index'>
                                    <dl :class="{'active':item.isCurrent}" id="zoomImg"  @click="thumListClick(index)">
                                        <dd>{{item.text}}</dd>
                                        <dt><img :src="item.imgSrc"/></dt>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>

            <div class="visitorFooter col_position">
                <footerBox></footerBox>
            </div>
        </div>


    </div>
</template>
<script>
import headerBox from '../../components/common/headerBox.vue';
import footerBox from '../../components/common/footerBox.vue';
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
    name:'adminControl',
    components:{footerBox,headerBox},
    data(){
        return{
            controlItemList,
            controlItemListLength:'',
            thumbigSrcImg:'',  //放大图片路径
            CurrentKey:0,
            popUpshow:false,
            popdataList:{},
            liveHide:true,
            upDown:false,
        }
    },
    mounted(){
        this.firstThumFun();
        bus.$on('popUpHidden',this.popupVisitorHidden);
    },
    methods:{
        //设置默认值
        firstThumFun(){
            this.controlItemList[this.CurrentKey].isCurrent=true;
            this.thumbigSrcImg=this.controlItemList[this.CurrentKey].imgSrc; 
            this.controlItemListLength=this.controlItemList.length;
        },

        thumListClick(key){
            for(var i=0;i<this.controlItemList.length;i++){
                this.controlItemList[i].isCurrent=false;
            }
            this.controlItemList[key].isCurrent=true;
            this.thumbigSrcImg=this.controlItemList[key].imgSrc;
            this.CurrentKey=key;
        },
        ShowImgFun(key){
            this.thumbigSrcImg=this.controlItemList[key].imgSrc;
        },
        PrevClick(){
            this.CurrentKey--;
            if (this.CurrentKey == -1) {
                this.CurrentKey = this.controlItemListLength-1;
            }

            this.ShowImgFun(this.CurrentKey);
            this.thumListClick(this.CurrentKey);
        },
        NextClick(){
            this.CurrentKey++;
            if (this.CurrentKey == this.controlItemListLength) {
                this.CurrentKey = 0;
            }
            this.ShowImgFun(this.CurrentKey);
            this.thumListClick(this.CurrentKey)
        },

        upDownFun(){
            this.upDown=true;
        },
    }
}
</script>
<style lang="scss" scoped>
.vistorControl{background:#ebeaea;}
.controlListMain{
    position: relative;
    background: #f5f5f5; 
}
.controlListTOP{position: relative;flex:1; padding-top: 20px; padding-bottom: 20px;padding-right: 10px;overflow: hidden;}
.controlListTOP .controlList_scroll{height: 100%;}
.controlListBot{position: relative; height: auto; background: #ebeaea; }
.controlListBot span.upDown{width: 20px; height: 20px; line-height: 20px; border-radius: 50%; background: #cacaca; color: #fff; text-align: center; cursor: pointer; top: -10px;}

.companyList{position: relative; height: 100%;display: flex;
    align-items: center;}
.controlListBot.hideBox span.upDown{top: -20px;}
.controlListBot .controlList_scroll{position: relative;height: 120px;transition:all 0.8s;
	 -webkit-transition:all 0.8s;
	 -moz-transition:all 0.8s;
	 -ms-transition:all 0.8s;}
.controlListBot.hideBox .controlList_scroll{
    height: 0px;
}
.controlItemBox{position: relative; width: 300px; padding: 0px 15px; cursor: pointer;}
.controlItemBox dl{width:100px;}
.controlItemBox dl dt{border: 3px solid #e7e7e7;}
.controlItemBox dl dd{position: relative;
    background: #535353;color: #fff; text-align: center; padding: 5px; margin-bottom: 10px;
    opacity: 0;transition: all 0.3s;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
}

.controlItemBox dl dd::after{
    content:'';
    position: absolute;
    width: 0;
    height: 0;
    border-left:9px solid transparent;
    border-right: 9px solid transparent;
    border-top: 8px solid #535353;
    bottom: -8px;
    left: 50%;
    margin-left: -4px;
    opacity: 0;transition: all 0.3s;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
}
.controlItemBox dl.active dd::after,
.controlItemBox dl.active dd{opacity: 1;}

.controlItemBox dl.active dt,
.controlItemBox dl:hover dt{
    border:3px solid #d8010d!important;
}
  

.slide_btn{font-size:65px; color: #e30613; cursor: pointer;}
.slide-prev{left: 10px;}
.slide-next{right: 10px;} 
.slideImgCenter{position: relative; width: 80%; margin:0px auto;}
</style>