<template>
  <div>
    <div id="resourceVideoDetails"
           :style="`background-image: url('${$addBaseURL(imgSrc)}');position: relative ;width: 100%;height:350px;background-repeat: no-repeat;background-position: 0px 0px;background-size:cover;`"
      >
        <div class="banner" style="padding-left: 21%">
          <div style="font-size: 38px;letter-spacing: 2px;color: #ffffff;padding-top: 6%">教学录像</div>
          <div style="font-size: 20px;letter-spacing: 2px;color: #ffffff;padding-top: 2%">TEACHING VIDEO</div>
          <div style="width: 120px;height: 2px;background-color: #ffffff;border-radius: 2px 0px 0px 0px;margin-top: 3%"></div>
        </div>
      </div>
    <div style="margin: 2% 0 5%">
      <router-link to="/video" style="color: #9a9a9a;margin-left: 15%;">< 返回</router-link></div>
    <div style="text-align: center;font-size: 22px;padding-bottom: 5%">{{this.$route.query.name}}</div>
    <div style="text-align: left;margin-left: 15%;margin-bottom: 2%">
      <div v-if="this.$route.query.type === 1" style="display: flex;align-items: center">
        <img  src="../../../assets/img/taskOn.png" style="width: 18px;text-align: left;width: 70%"/>
        <span style="color: #666666;margin-left: 1%">视频任务已完成</span>
      </div>
      <div v-if="this.$route.query.type === 0" style="display: flex;align-items: center">
        <img  src="../../../assets/img/task.png" style="width: 18px"/>
        <span style="color: #666666;margin-left: 1%">视频任务未完成</span>
      </div>
    </div>
    <div style="text-align: center;padding-bottom: 6%">
      <video :src="videoUrl" width="70%" controls ></video>
    </div>
  </div>
</template>

<script>

import {imagesGetApi} from "../../../api/modules/images";

export default {
  name: 'resourceVideoDetails',
  data () {
    return {
      imgSrc: '',
      videoUrl:''
    }
  },
  mounted() {
    this.getImage();
    this.videoUrl = this.$route.query.url
  },
  methods: {
    getImage(){
      imagesGetApi({board:'18'}).then(result => {
        this.imgSrc = result.data.cover
      })
    }
  }
}
</script>

<style lang="scss">
#resourceVideoDetails{

}
</style>
