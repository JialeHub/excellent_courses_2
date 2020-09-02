<template>
  <div>
    <div id="evaluateTeacher"
         :style="`background-image: url('${$addBaseURL(imgSrc)}');position: relative ;width: 100%;height:350px;background-repeat: no-repeat;background-position: 0px 0px;background-size:cover;`"
    >
      <div class="banner" style="padding-left: 21%">
        <div style="font-size: 38px;letter-spacing: 2px;color: #ffffff;padding-top: 6%">教师评价</div>
        <div style="font-size: 20px;letter-spacing: 2px;color: #ffffff;padding-top: 2%">TEACHER EVALUATION</div>
        <div style="width: 120px;height: 2px;background-color: #ffffff;border-radius: 2px 0px 0px 0px;margin-top: 3%"></div>
      </div>
    </div>
    <div class="outsideImg text-center" style="padding: 10% 5% 10%">
      <img :src="$addBaseURL(remarkImg)" class="img-fluid" alt="Responsive image">
    </div>
  </div>
</template>

<script>
  import {imagesGetApi} from "../../../api/modules/images";
  import {expertRemarkGetApi} from "../../../api/modules/expertRemark";

  export default {
  name: 'evaluateTeacher',
  data () {
    return {
      imgSrc: '',
      remarkImg: ''
    }
  },
  mounted() {
    this.getImage();
    this.getRemark();
  },
  methods: {
    // 获取图片
    getImage(){
      imagesGetApi({board:'10'}).then(result => {
        this.imgSrc = result.data.cover
      })
    },
    // 获取评价
    getRemark(){
      expertRemarkGetApi({type :'1'}).then(result => {
        this.remarkImg = result.data.erAccPath
      })
    }
  }
}
</script>

<style lang="scss">
#evaluateTeacher{

}
</style>
