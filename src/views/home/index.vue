<template>
  <div id="home">
    <div class="banner"
         :style="`background-image: url('${$addBaseURL(imgSrc)}');position: relative ;width: 100%;height:600px;background-repeat: no-repeat;background-position: 0px 0px;background-size:cover;`"
    >
      <div style="font-family: MicrosoftYaHei,sans-serif;font-size: 50px;font-stretch: normal;color: #ffffff;padding-top: 8%;padding-left: 18%;letter-spacing: 5px;">嵌入式系统原理与开发</div>
      <div style="font-family: MicrosoftYaHeiLight,monospace;font-size: 24px;color: #ffffff;padding-left: 18%;padding-top: 2%;letter-spacing: 3px;">PRINCIPLE AND DEVELOPMENT OF EMBEDDED SYSTEM</div>
      <div style="width: 300px;height: 4px;background-color: #ffffff;border-radius: 2px;margin-left: 18%;margin-top: 4%;"></div>
      <div><button type="button" class="btn btn-light" style="color: #1089f0;width: 156px;border-radius: 29px;margin-left: 18%;margin-top:5%" @click="toVideo">进入学习 > > </button></div>
    </div>
    <div class="intro" style="display: flex;margin-left: 18%;margin-top: 8%;margin-bottom: 10%">
      <div>
        <img style="width: 420px;height: 400px;"
             :src="$addBaseURL(courseIntro.img)">
      </div>
      <div style="margin-left: 5%">
        <div style="margin-top: 7%;letter-spacing: 2px;color: #46b4f0;font-size: 22px;">COURSE INTRODUCTION</div><br/>
        <div style="color: #333333;font-size: 32px;">课程简介</div><br/>
        <div style="width: 611px;color: #808080;font-size: 18px;letter-spacing: 1px;line-height: 29px;margin-top:6%;">{{courseIntro.text}}</div>
      </div>
    </div>
    <div class="leader" style="width: 1270px;height: 650px;background-color: #f5f5f5;margin-bottom: 6%;display: flex">
      <div style="margin-left: 24%;padding-top: 6%">
        <div style="margin-top: 7%;letter-spacing: 2px;color: #46b4f0;font-size: 22px;">PROGRAM LEADER</div><br/>
        <div style="color: #333333;font-size: 32px;">课程负责人</div><br/>
        <div style="width: 611px;color: #808080;font-size: 18px;letter-spacing: 1px;line-height: 29px;margin-top:6%;">{{teacherIntro.text}}</div>
      </div>
      <img style="width: 400px;height: 500px;background-color: #fff;border: solid 6px #ffffff;margin-top: 6%;margin-left: 4%"
          :src="$addBaseURL(teacherIntro.img)" >
    </div>
    <!--教学团队-->
    <div class="team text-center">
      <div style="font-size: 22px;letter-spacing: 2px;color: #1089f0;opacity: 0.69;">TEACHING TEAM</div>
      <div  class="justify-content-center align-items-center" style="display: flex;margin-top: 2%">
        <div style="margin-right: 2%;width: 160px;height: 2px;background-color: #1089f0;opacity: 0.48;"></div>
        <div style="margin-right: 2%;font-size: 32px;letter-spacing: 3px;color: #333333;">教学团队</div>
        <div style="width: 160px;height: 2px;background-color: #1089f0;border-radius: 1px;opacity: 0.48;"></div>
      </div>
      <div class="swiperList container" style="margin-top:40px;">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="(item,index) in ImgList" :key="index" >
            <img @click="toDetail(item.id)" :src="$addBaseURL(item.picture)" style="width: 200px;height: 200px;cursor: pointer;" >
            <div style="font-size: 20px;margin-top: 10px;">{{item.name}}</div>
            <div style="font-size: 15px;margin-top: 10px">{{item.job}}</div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
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
          <router-link to="/practice">
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
import { imagesGetApi } from "../../api/modules/images";
import {introtGetApi, teamGetApi} from "@/api/modules/intro";
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },


  name: 'home',
  data () {
    return {
      imgSrc: '',
      isLogin:true,
      teacherIntro:[],
      courseIntro:[],
      items: [],
      ImgList:[],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  mounted() {
    this.getImage();
    this.getTeacherIntro();
    this.getCourseIntro();
    this.getTeam();
    if(this.$store.getters.user.Info){
      this.isLogin = true
    }else {
      this.isLogin = false
    };
    this.items = this.ImgList
  },
  methods: {
    // 获取板块图片
    getImage(){
      imagesGetApi({board:'1'}).then(result => {
        this.imgSrc = result.data.cover

      })
    },
    // 进入学习
    toVideo(){
      if(this.isLogin == true){
        this.$router.push('/video')
      }else{
        this.$router.push('/login')
      }
    },
    //获取简介信息
    getTeacherIntro(){
      introtGetApi({intIndex:2}).then(result => {
        this.teacherIntro = result.data
      })
    },
    getCourseIntro(){
      introtGetApi({intIndex:1}).then(result => {
        this.courseIntro = result.data
      })
    },
    getTeam(){
      teamGetApi({current:1,size:999}).then(result => {
        this.ImgList = result.data.records
        // console.log(this.ImgList)
      })
    },
    // 点击教学团队进入详情
    toDetail(id){
      console.log(id)
      this.$router.push({name:'teamDetail',query:{id:id}})
    }
  }

}
</script>

<style lang="scss">
  /*@import './base.scss';*/
#home{
  .card:hover{
    box-shadow: 2px 4px 6px #ced6d7;
  }
  .banner{
    background-size: cover;
  }
}
</style>
