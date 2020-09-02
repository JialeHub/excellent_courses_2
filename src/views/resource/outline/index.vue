<template>
  <div>
    <div id="resourceOutline"
         :style="`background-image: url('${$addBaseURL(imgSrc)}');position: relative ;width: 100%;height:350px;background-repeat: no-repeat;background-position: 0px 0px;background-size:cover;`"
    >
      <div class="banner" style="padding-left: 21%">
        <div style="font-size: 38px;letter-spacing: 2px;color: #ffffff;padding-top: 6%">教学大纲</div>
        <div style="font-size: 20px;letter-spacing: 2px;color: #ffffff;padding-top: 2%">TEACHING PROGRAM</div>
        <div style="width: 120px;height: 2px;background-color: #ffffff;border-radius: 2px 0px 0px 0px;margin-top: 3%"></div>
      </div>
    </div>
    <!--tab栏-->
    <div class="container ">
      <ul class="nav  mb-3 flex-column flex-sm-row" id="pills-tab" role="tablist">
        <li class="nav-item flex-sm-fill text-sm-center" role="presentation">
          <a class="nav-link active"  data-toggle="pill" href="#pills-one" role="tab" aria-controls="pills-home" aria-selected="true">第一章</a>
        </li>
        <li class="nav-item flex-sm-fill text-sm-center" role="presentation">
          <a class="nav-link"  data-toggle="pill" href="#pills-two" role="tab" aria-controls="pills-profile" aria-selected="false">第二章</a>
        </li>
        <li class="nav-item flex-sm-fill text-sm-center" role="presentation">
          <a class="nav-link"  data-toggle="pill" href="#pills-three" role="tab" aria-controls="pills-contact" aria-selected="false">第三章</a>
        </li>
        <li class="nav-item flex-sm-fill text-sm-center" role="presentation">
          <a class="nav-link" data-toggle="pill" href="#pills-four" role="tab" aria-controls="pills-contact" aria-selected="false">第四章</a>
        </li>
        <li class="nav-item flex-sm-fill text-sm-center" role="presentation">
          <a class="nav-link" data-toggle="pill" href="#pills-five" role="tab" aria-controls="pills-contact" aria-selected="false">第五章</a>
        </li>
      </ul>
    </div>
    <div class="line" style="height: 1px;background-color: #dddddd;margin-top: 1%"></div>
    <div class="container">
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active text-center" style="padding: 10% 5% 10%" id="pills-one"  aria-labelledby="pills-profile-tab">
          <img :src="$addBaseURL(Outline1)" class="img-fluid" alt="Responsive image">
        </div>
        <div class="tab-pane fade text-center" style="padding: 10% 5% 10%" id="pills-two" aria-labelledby="pills-contact-tab">
          <img :src="$addBaseURL(Outline2)"  class="img-fluid" alt="Responsive image">
        </div>
        <div class="tab-pane fade text-center" style="padding: 10% 5% 10%" id="pills-three"  aria-labelledby="pills-contact-tab">
          <img :src="$addBaseURL(Outline3)"  class="img-fluid" alt="Responsive image">
        </div>
        <div class="tab-pane fade text-center" style="padding: 10% 5% 10%" id="pills-four" aria-labelledby="pills-contact-tab">
          <img :src="$addBaseURL(Outline4)"  class="img-fluid" alt="Responsive image">
        </div>
        <div class="tab-pane fade text-center" style="padding: 10% 5% 10%" id="pills-five"  aria-labelledby="pills-contact-tab">
          <img :src="$addBaseURL(Outline5)"  class="img-fluid" alt="Responsive image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {imagesGetApi} from "../../../api/modules/images";
import {resourceGetApi} from "../../../api/modules/fileInfo";

export default {
  name: 'resourceOutline',
  data () {
    return {
      imgSrc: '',
      Outline1:'',
      Outline2:'',
      Outline3:'',
      Outline4:'',
      Outline5:''
    }
  },
  mounted() {
    this.getImage();
    this.getOutline1();
    this.getOutline2();
    this.getOutline3();
    this.getOutline4();
    this.getOutline5();
  },
  methods: {
    getImage(){
      imagesGetApi({board:'19'}).then(result => {
        this.imgSrc = result.data.cover
        console.log(result.data.page)

      })
    },
    //获取教学大纲
    getOutline1(){
      const params = {
        current:'1',
        size: '10',
        type:'2',
        section: '1'
      }
      resourceGetApi(params).then(result => {
        console.log(result.data.records)
        this.Outline1 = result.data.records[0].faccess
      })
    },
    getOutline2(){
      const params = {
        current:'1',
        size: '10',
        type:'2',
        section: '2'
      }
      resourceGetApi(params).then(result => {
        console.log(result.data.records)
        this.Outline2 = result.data.records[0].faccess
      })
    },
    getOutline3(){
      const params = {
        current:'1',
        size: '10',
        type:'2',
        section: '3'
      }
      resourceGetApi(params).then(result => {
        console.log(result.data.records)
        this.Outline3 = result.data.records[0].faccess
      })
    },
    getOutline4(){
      const params = {
        current:'1',
        size: '10',
        type:'2',
        section: '4'
      }
      resourceGetApi(params).then(result => {
        console.log(result.data.records)
        this.Outline4 = result.data.records[0].faccess
      })
    },
    getOutline5(){
      const params = {
        current:'1',
        size: '10',
        type:'2',
        section: '5'
      }
      resourceGetApi(params).then(result => {
        console.log(result.data.records)
        this.Outline5 = result.data.records[0].faccess
      })
    },
  }
}
</script>

<style lang="scss">
.container{
  .nav{
    margin-top: 2%;
    margin-bottom: 3%;
    .nav-item{
      a{
        color: #333333;
        font-family: MicrosoftYaHei,sans-serif;
        font-weight: bold;
      }
      .active{
        color: #1089f0;
      }
    }
  }
}
</style>
