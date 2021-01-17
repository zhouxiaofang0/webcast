<template>
    <div class="wrapBox vistorControl vistorvideo pageBox">
        <div class="col_position flex_clum">
            <headerBox :liveHide='liveHide'></headerBox>

            <div class="controlTab col_position smContent_noTB" style="z-index:8;">
                <div class="flexBox justify_between_stretch video_shareBox">
                    <div class="video_shareBox_l video_shareBox_phHide">
                        <router-link class="langBtn active" :to="{path:'/'}">EN</router-link>
                        <router-link class="langBtn" :to="{path:'/'}">廣</router-link>
                        <router-link class="langBtn" :to="{path:'/'}">普</router-link>
                    </div>
                    <div class="video_shareBox_l toggleSlideLang">
                        <p><span class="langBtn active" @click="IsshowSlide=!IsshowSlide">EN</span><i class="fa fa-caret-down"></i></p>
                        <div class="slideLangInfo" :class="{'showSlide':IsshowSlide}">
                            <router-link class="langBtn active" :to="{path:'/'}">EN</router-link>
                            <router-link class="langBtn" :to="{path:'/'}">廣</router-link>
                            <router-link class="langBtn" :to="{path:'/'}">普</router-link>
                        </div>
                    </div>

                    <div class="video_shareBox_r">
                        <div class="flexBox thumbsUp">
                            <p class="text_right ipad_hide">Page {{currentIndex+1}} of {{controlItemListLength}}</p>
                            <p>
                                <span @click="isThumC=!isThumC"><i class="fa fa-thumbs-up" :class="{'active':isThumC}"></i>120</span>
                                <span><i class="fa fa-share"></i>Share</span>
                            </p>
                        </div>
                         
                    </div>
                </div>
                
            </div>
            <div class="controlListMain smContent_noTB">
                <div class="col_position flex_clum">
                    <div class="controlListTOP">
                        <div class="box" ref="box">
                            <div class="left">
                                <div class="comControl_r">
                                    <div class="controlList_scroll scroll-content">
                                        <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper">
                                            <div class="companyList col_position">
                                                <img :src="thumbigSrcImg" @click="popupVisitorShow('fangda')"/>
                                            </div>
                                        </v-touch>
                                    </div>
                                </div>
                            </div>
                            <div class="resize" title="收缩侧边栏">⋮</div>
                            <div class="mid">
                                <div class="videoBoxmain">
                                    <div class="controlList_scroll scroll-content">
                                        <video ref='mediaVideo' muted autoplay="autoplay" poster="../../assets/images/video_prow.jpg" controls="controls">
                                            <source src="../../assets/video/aboutanta-05.mp4" type="video/ogg" />
                                            <source src="../../assets/video/aboutanta-05.mp4" type="video/mp4" />
                                        </video>
                                    </div>
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
    name:'visitorVideo',
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
            textarea: '',
            isThumC:'',//是否点赞
            IsshowSlide:'',//方言下拉
            upDown:false,
        }
    },
    mounted(){
        this.firstThumFun();
        bus.$on('popUpHidden',this.popupVisitorHidden);
        this.dragControllerDiv();

    },
    methods:{
        //设置默认值
        firstThumFun(){
            this.controlItemList[this.currentIndex].isCurrent=true;
            this.thumbigSrcImg=this.controlItemList[this.currentIndex].imgSrc; 
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
        },
        dragControllerDiv() {
            var resize = document.getElementsByClassName('resize');
            var left = document.getElementsByClassName('left');
            var mid = document.getElementsByClassName('mid');
            var box = document.getElementsByClassName('box');
            for (let i = 0; i < resize.length; i++) {
                // 鼠标按下事件
                resize[i].onmousedown = function (e) {
                    //颜色改变提醒
                    resize[i].style.background = '#818181';
                    var startX = e.clientX;
                    resize[i].left = resize[i].offsetLeft;
                    // 鼠标拖动事件
                    document.onmousemove = function (e) {
                        var endX = e.clientX;
                        var moveLen = resize[i].left + (endX - startX); // （endx-startx）=移动的距离。resize[i].left+移动的距离=左边区域最后的宽度
                        var maxT = box[i].clientWidth - resize[i].offsetWidth; // 容器宽度 - 左边区域的宽度 = 右边区域的宽度

                        if (moveLen < 32) moveLen = 32; // 左边区域的最小宽度为32px
                        if (moveLen > maxT - 150) moveLen = maxT - 150; //右边区域最小宽度为150px

                        resize[i].style.left = moveLen; // 设置左侧区域的宽度

                        for (let j = 0; j < left.length; j++) {
                            left[j].style.width = moveLen + 'px';
                            mid[j].style.width = (box[i].clientWidth - moveLen - 10) + 'px';
                        }
                    };
                    // 鼠标松开事件
                    document.onmouseup = function (evt) {
                        //颜色恢复
                        resize[i].style.background = '#d6d6d6';
                        document.onmousemove = null;
                        document.onmouseup = null;
                        resize[i].releaseCapture && resize[i].releaseCapture(); //当你不在需要继续获得鼠标消息就要应该调用ReleaseCapture()释放掉
                    };
                    resize[i].setCapture && resize[i].setCapture(); //该函数在属于当前线程的指定窗口里设置鼠标捕获
                    return false;
                };
            }
        },

    }
}
</script>
<style lang="scss" scoped>
.vistorControl{background:#ebeaea;}
.controlListMain{
    position: relative;
    background: #f5f5f5; padding-right: 10px;
}
.controlListTOP{position: relative;flex:1; padding-top: 20px; padding-bottom: 20px;padding-right: 10px;overflow: hidden;}
.controlListTOP .controlList_scroll{height: 100%;}
.controlListBot{position: relative; height: auto; background: #ebeaea; }
.controlListBot span.upDown{width: 20px; height: 20px; line-height: 20px; border-radius: 50%; background: #cacaca; color: #fff; text-align: center; cursor: pointer; top: -10px;}
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
.controlListBot.hideBox span.upDown{top: -20px;}
.controlListBot.hideBox .controlList_scroll{
    height: 0px;
}
.controlListBot .controlList_scroll{position: relative;height: 120px;transition:all 0.8s;
	 -webkit-transition:all 0.8s;
	 -moz-transition:all 0.8s;
	 -ms-transition:all 0.8s;}

.companyList{position: relative; height: 100%; cursor: pointer;display: flex;
    align-items: center;}
.comControl_r{padding-right:20px; position: relative; width: 100%; height: 100%;}
 .videoBoxmain{padding-left: 20px; padding-right: 10px; width: 100%; height: 100%;}
.controlList_scroll{position: relative;height: 100%;display: flex; flex-wrap: wrap;
    align-items: center;
    video{width: 100%;}
    .wrapper{position: relative; width: 100%;}
}
.videoMSG{
    position: relative;
    width: 100%;
    height: auto;
    margin-top: 25px;
    background: #fff;
    padding: 20px;

    .el-textarea{
        width: 100%;
        border-bottom: 1px solid #d9d9d9;
       
    }
}
.controlListMain{
        /* 拖拽相关样式 */
    /*包围div样式*/
    .box {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
    }
    /*左侧div样式*/
    .left {
        width: calc(50% - 10px);  /*左侧初始化宽度*/   
        height: 100%;
        float: left;
    }
    /*拖拽区div样式*/
    .resize {
        cursor: col-resize;
        float: left;
        position: relative;
        top: 45%;
        background-color: #d6d6d6;
        border-radius: 5px;
        margin-top: -10px;
        width: 10px;
        height: 50px;
        background-size: cover;
        background-position: center;
        /*z-index: 99999;*/
        font-size: 32px;
        color: white;
    }
    /*拖拽区鼠标悬停样式*/
    .resize:hover {
        color: #444444;
    }
    /*右侧div'样式*/
    .mid {
        float: left;
        width: 50%;   /*右侧初始化宽度*/
        height: 100%;
    }


}
.sendBox{position: relative; display: flex; justify-content: flex-end;padding-top:10px;
    i{
        color: #e30613;
        font-size: 24px;
        cursor: pointer;
    }
}

</style>