<template>
  <div>
    <div id="evaluateOutside"  :style="`position: relative;height: 350px;background: rgb(246, 249, 251) url('${$addBaseURL(imgSrc)}') no-repeat center;background-size: cover;`">
      <div class="banner" style="padding-left: 21%">
        <div style="font-size: 38px;letter-spacing: 2px;color: #ffffff;padding-top: 6%">校外专家评价</div>
        <div style="font-size: 20px;letter-spacing: 2px;color: #ffffff;padding-top: 2%">OFF CAMPUS EXPERT EVALUATION</div>
        <div style="width: 120px;height: 2px;background-color: #ffffff;border-radius: 2px 0px 0px 0px;margin-top: 3%"></div>
      </div>
    </div>
    <div class="outsideImg text-center" style="padding: 10% 5% 10%">
      <img src="../../../assets/img/demo.png" class="img-fluid" alt="Responsive image">
    </div>
  </div>
</template>

<script>
import {imagesGetApi} from "../../../api/modules/images";

export default {
  name: 'evaluateOutside',
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
      imagesGetApi({board:'8'}).then(result => {
        this.imgSrc = result.data.cover
        console.log(result.data.page)
        console.log(result.data.cover)
      })
    }
  }

}
</script>

<style lang="scss">
#evaluateOutside{

}
</style>
