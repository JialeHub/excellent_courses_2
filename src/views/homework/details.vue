<template>
  <div>
    <div id="homeworkDetails"
         :style="`background-image: url('${$addBaseURL(imgSrc)}');position: relative ;width: 100%;height:350px;background-repeat: no-repeat;background-position: 0px 0px;background-size:cover;`"
    >
      <div class="banner" style="padding-left: 21%">
        <div style="font-size: 38px;letter-spacing: 2px;color: #ffffff;padding-top: 6%">作业提交</div>
        <div style="font-size: 20px;letter-spacing: 2px;color: #ffffff;padding-top: 2%">JOB SUBMISSION</div>
        <div style="width: 120px;height: 2px;background-color: #ffffff;border-radius: 2px 0px 0px 0px;margin-top: 3%"></div>
      </div>
    </div>
    <div class="container" style="padding: 5% 7% 5%;font-size: 18px;" >
      <div class="title" style="display: flex">
        <span style="line-height: 20px">题目：</span>
        <div class="content" style="padding-left: 2%">
          <div style="line-height: 20px">1.XXXXXX</div>
          <div style="line-height: 20px">2.XXXXXX</div>
          <div style="line-height: 20px">3.XXXXXX</div>
          <div style="line-height: 20px">4.XXXXXX</div>
        </div>
      </div>
      <div class="time" style="line-height: 25px;padding-top: 5%">
        <span>截止时间： </span>
        <span style="color: #f59f38">2020.06.23 23:30</span>
      </div>
     <div class="require" style="line-height: 25px;padding-top: 5%">
       <span>作业要求： </span>
       <span>XXXXXXXX</span>
     </div>
      <div class="text-center">富文本放置处</div>
      <button  type="button" class="btn btn-primary" style="border-radius: 20px;width: 130px;margin-top:25px">提交答案</button>
    </div>
  </div>
</template>

<script>
import {imagesGetApi} from "../../api/modules/images";

export default {
  name: 'homeworkDetails',
  data () {
    return {
      imgSrc: ''
    }
  },
  mounted() {
    this.getImage();
  },
  methods: {
    getImage(){
      imagesGetApi({board:'16'}).then(result => {
        this.imgSrc = result.data.cover
        console.log(result.data.page)
        console.log(result.data.cover)
      })
    }
  }
}
</script>

<style lang="scss">
#homeworkDetails{

}
</style>
