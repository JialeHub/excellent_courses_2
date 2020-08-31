<template>
  <div id="home">
    <div class="banner"
         :style="`position: relative;height: 600px;background: rgb(246, 249, 251) url(imgSrc) no-repeat center;`"
    >
      <div style="font-family: MicrosoftYaHei,sans-serif;font-size: 50px;font-stretch: normal;color: #ffffff;padding-top: 8%;padding-left: 18%;letter-spacing: 5px;">嵌入式系统原理与开发</div>
      <div style="font-family: MicrosoftYaHeiLight,monospace;font-size: 24px;color: #ffffff;padding-left: 18%;padding-top: 2%;letter-spacing: 3px;">PRINCIPLE AND DEVELOPMENT OF EMBEDDED SYSTEM</div>
      <div style="width: 300px;height: 4px;background-color: #ffffff;border-radius: 2px;margin-left: 18%;margin-top: 4%;"></div>
      <div><button type="button" class="btn btn-light" style="color: #1089f0;width: 156px;border-radius: 29px;margin-left: 18%;margin-top:5%">进入学习 > > </button></div>
    </div>
    <div class="intro" style="display: flex;margin-left: 18%;margin-top: 8%;margin-bottom: 10%">
      <div>
        <img style="width: 420px;height: 400px;"
             src="../../assets/img/home/intro.png">
      </div>
      <div style="margin-left: 5%">
        <div style="margin-top: 7%;letter-spacing: 2px;color: #46b4f0;font-size: 22px;">COURSE INTRODUCTION</div><br/>
        <div style="color: #333333;font-size: 32px;">课程简介</div><br/>
        <div style="width: 611px;color: #808080;font-size: 18px;letter-spacing: 1px;line-height: 29px;margin-top:6%;">嵌入式即嵌入式系统，IEEE（美国电气和电子工程师协会）对其定义是用于控制、监视或者辅助操作机器和设备的装置，是一种专用的计算机系统；国内普遍认同的嵌入式系统定义是以应用为中心，以计算机技术为基础，软硬件可裁剪，适应应用系统对功能、可靠性、成本、体积、功耗等严格要求的专用计算机系统；从应用对象上加以定义来说，嵌入式系统是软件和硬件的综合体，还可以涵盖机械等附属装置。</div>
      </div>
    </div>
    <div class="leader" style="width: 1270px;height: 650px;background-color: #f5f5f5;margin-bottom: 6%;display: flex">
      <div style="margin-left: 24%;padding-top: 6%">
        <div style="margin-top: 7%;letter-spacing: 2px;color: #46b4f0;font-size: 22px;">PROGRAM LEADER</div><br/>
        <div style="color: #333333;font-size: 32px;">课程负责人</div><br/>
        <div style="width: 611px;color: #808080;font-size: 18px;letter-spacing: 1px;line-height: 29px;margin-top:6%;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
      </div>
      <img style="width: 400px;height: 500px;background-color: #aaaaaa;border: solid 10px #ffffff;margin-top: 6%;margin-left: 4%"
        src="../../assets/img/home/leader.png">
    </div>
    <div class="review text-center" style="margin-top: 4%;">
      <div style="font-size: 22px;letter-spacing: 2px;color: #1089f0;opacity: 0.69;">COURSE REVIEW</div>
      <div  class="justify-content-center align-items-center" style="display: flex;margin-top: 2%">
        <div style="margin-right: 2%;width: 160px;height: 2px;background-color: #1089f0;opacity: 0.48;"></div>
        <div style="margin-right: 2%;font-size: 32px;letter-spacing: 3px;color: #333333;">课程回顾</div>
        <div style="width: 160px;height: 2px;background-color: #1089f0;border-radius: 1px;opacity: 0.48;"></div>
      </div>
      <div class="ThreeCard" style="display:flex;justify-content: center;margin-bottom: 6%;margin-top: 2%">
        <div class="card border-light" style="width: 300px;background-color: #f5f5f5;border-radius: 10px;margin: 1%;cursor: pointer">
          <router-link to="/courseware">
            <img src="../../assets/img/home/courseware.png" class="card-img-top">
            <div class="card-body">
                <p class="card-text" style="color: #3c3c3c">教学课件</p>
            </div>
          </router-link>
        </div>
        <div class="card border-light" style="width: 300px;background-color: #f5f5f5;border-radius: 10px;margin: 1%;cursor: pointer">
          <router-link to="/video">
            <img src="../../assets/img/home/video.png" class="card-img-top">
            <div class="card-body">
              <p class="card-text" style="color: #3c3c3c">教学录像</p>
            </div>
          </router-link>
        </div>
        <div class="card border-light" style="width: 300px;background-color: #f5f5f5;border-radius: 10px;margin: 1%;cursor: pointer">
          <router-link to="/outline">
            <img src="../../assets/img/home/test.png" class="card-img-top">
            <div class="card-body">
              <p class="card-text" style="color: #3c3c3c">自测题</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '../../assets/img/home/banner.png'
import { imagesGetApi } from "../../api/modules/images";

export default {
  name: 'home',
  data () {
    return {
      imgSrc: logo
    }
  },
  mounted() {
    this.getImage();
  },
  methods: {
    getImage(){
      imagesGetApi({board:'1'}).then(result => {
        let response = result.data;
        console.log(result)
      })
    }
  }
}
</script>

<style lang="scss">
#home{
  .card:hover{
    box-shadow: 2px 4px 6px #ced6d7;
  }

}
</style>
