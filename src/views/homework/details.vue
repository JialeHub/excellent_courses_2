<template>
  <div>
    <div id="homeworkDetails"  :style="`position: relative;height: 350px;background: rgb(246, 249, 251)
         background-size: cover;background: rgb(246, 249, 251) url('${$addBaseURL(imgSrc)}') no-repeat center;`">
      <div class="banner" style="padding-left: 21%">
        <div style="font-size: 38px;letter-spacing: 2px;color: #ffffff;padding-top: 6%">作业提交</div>
        <div style="font-size: 20px;letter-spacing: 2px;color: #ffffff;padding-top: 2%">JOB SUBMISSION</div>
        <div style="width: 120px;height: 2px;background-color: #ffffff;border-radius: 2px 0px 0px 0px;margin-top: 3%"></div>
      </div>
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
