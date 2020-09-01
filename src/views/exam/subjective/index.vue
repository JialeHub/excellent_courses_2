<template>
  <div>
    <div id="examSubjective"  :style="`position: relative;height: 350px;background: rgb(246, 249, 251)
         background-size: cover;background: rgb(246, 249, 251) url('${$addBaseURL(imgSrc)}') no-repeat center;`">
      <div class="banner" style="padding-left: 21%">
        <div style="font-size: 38px;letter-spacing: 2px;color: #ffffff;padding-top: 6%">主观题</div>
        <div style="font-size: 20px;letter-spacing: 2px;color: #ffffff;padding-top: 2%">SUBJECTIVE QUESTIONS</div>
        <div style="width: 120px;height: 2px;background-color: #ffffff;border-radius: 2px 0px 0px 0px;margin-top: 3%"></div>
      </div>
    </div>
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
        <div class="tab-pane fade show active" id="pills-one"  aria-labelledby="pills-profile-tab" >
          <div class="Text" v-for="(item,index) in textList" :key="item.id">
            <div class="text" style="display: flex;color: #333333;font-size: 16px;padding: 8% 0 5%" >
              <span>{{item.sort}}.</span>
              <span>【{{item.type}}】</span>
              <span>{{item.content}}</span>
            </div>
            <div v-if="!isdone">富文本放置处</div>
            <div v-if="isdone" style="font-size: 16px;">
              <div class="myAnswer" style="color: #333333;line-height: 26px;">我的答案：XXXXXXXX</div>
              <div class="rightAnswer" style="color: #d61111;line-height: 26px;padding-top: 2%">正确答案：XXXXXXXX</div>
            </div>
          </div>
          <div class="button text-center" style="padding:4% 0 5%">
            <input class="btn btn-primary" type="submit" value="提交答案" style="width: 130px;height: 40px;border-radius: 20px">
          </div>
        </div>
        <div class="tab-pane fade" id="pills-two" aria-labelledby="pills-contact-tab">2</div>
        <div class="tab-pane fade" id="pills-three"  aria-labelledby="pills-contact-tab">3</div>
        <div class="tab-pane fade" id="pills-four" aria-labelledby="pills-contact-tab">4</div>
        <div class="tab-pane fade" id="pills-five"  aria-labelledby="pills-contact-tab">5</div>
      </div>
    </div>
  </div>
</template>

<script>
import {imagesGetApi} from "../../../api/modules/images";

export default {
  name: 'examSubjective',
  data(){
    return{
      isdone: false,
      textList:[
        {id:1,sort:1,type:'简答题',content:'XXXXXXXXXXXXX?'},
        {id:2,sort:2,type:'简答题',content:'XXXXXXXXXXXXXXXX?'},
        {id:3,sort:3,type:'简答题',content:'XXXXXXXXXXXXX?'},
        {id:4,sort:4,type:'简答题',content:'XXXXXXXXXXXXXXX?'},
        {id:5,sort:5,type:'简答题',content:'XXXXXXXXXXXXX?'},
        {id:6,sort:6,type:'简答题',content:'XXXXXXXXXXXXXXX?'},
        {id:7,sort:7,type:'简答题',content:'XXXXXXXXXXXXX?'},
      ]
    }
  },
  mounted() {
    this.getImage();
  },
  methods: {
    getImage(){
      imagesGetApi({board:'13'}).then(result => {
        this.imgSrc = result.data.cover
        console.log(result.data.page)
        console.log(result.data.cover)
      })
    }
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
