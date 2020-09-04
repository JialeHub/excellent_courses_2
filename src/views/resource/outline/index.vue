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
    <div class="tab container col-8" id="tab">
      <ul class="mb-3" style="padding-top: 1%">
        <li @click='change(item)' :class='currentIndex==item?"active":""' :key='index' v-for='(item,index) in sectionList'>第{{item+1}}章</li>
      </ul>
    </div>
    <div class="line" style="height: 1px;background-color: #dddddd;margin-top: 1%"></div>
    <div class="container col-8">
      <div  class="img"  style="padding: 10% 5% 10%">
        <img :src="$addBaseURL(Outline.faccess)" class="img-fluid" alt="Responsive image">
      </div>
    </div>
  </div>
</template>

<script>
import {imagesGetApi} from "../../../api/modules/images";
import {resourceGetApi, RsectionGetApi} from "../../../api/modules/fileInfo";

export default {
  name: 'resourceOutline',
  data () {
    return {
      imgSrc: '',
      Outline:[],
      sectionList:[],
      section:'',
      currentIndex:0,
    }
  },
  mounted() {
    this.getImage();
    this.getSection();

  },
  methods: {
    // 点击tab栏切换
    change:function(index){
      this.currentIndex=index;
      this.getOutline(index)
    },
    // 获取图片
    getImage(){
      imagesGetApi({board:'19'}).then(result => {
        this.imgSrc = result.data.cover
      })
    },
    // 获取教学大纲章节数
    getSection(){
      RsectionGetApi({type:'2'}).then(result => {
        this.sectionList = result.data
        this.section = this.sectionList[0]
        this.getOutline();
      })
    },
    getOutline(section){
      if(section !=undefined || section!= null){
        this.section = section
      }
      const params = {
        current:'1',
        size: '10',
        type:'2',
        section: this.section
      }
      resourceGetApi(params).then(result => {
        this.Outline = result.data.records[0]
        console.log(this.Outline)
      })
    }
  }
}
</script>

<style lang="scss">
  #tab{
    .tab {
      width: 400px;
      height: 300px;
    }
    .mb-3 {
      margin: 0;
      padding: 0;
      height: 50px;
      li {
        cursor: pointer;
        box-sizing: border-box;
        width: 100px;
        list-style: none;
        text-align: center;
        line-height: 50px;
        float: left;
      }
    }
    .active {
      color: #0b6ef6;
    }
    .img {
      display: none;
      height: 250px;
      width: 400px;
    }
    .img img {
      height: 100%;
      width: 100%;
    }
    .current {
      display: block;
    }
  }
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
