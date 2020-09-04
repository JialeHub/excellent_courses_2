<template>
  <div>
    <div id="examPractice"
         :style="`background-image: url('${$addBaseURL(imgSrc)}');position: relative ;width: 100%;height:350px;background-repeat: no-repeat;background-position: 0px 0px;background-size:cover;`"
    >
      <div class="banner" style="padding-left: 21%">
        <div style="font-size: 38px;letter-spacing: 2px;color: #ffffff;padding-top: 6%">模拟考试</div>
        <div style="font-size: 20px;letter-spacing: 2px;color: #ffffff;padding-top: 2%">MOCK EXAMINATION</div>
        <div style="width: 120px;height: 2px;background-color: #ffffff;border-radius: 2px 0px 0px 0px;margin-top: 3%"></div>
      </div>
    </div>
    <div class="tab container col-8" id="tab">
      <ul class="mb-3" style="padding-top: 1%">
        <li @click='change(index)' :class='currentIndex==index?"active":""' :key='item.id' v-for='(item,index) in sectionList'>第{{item+1}}章</li>
      </ul>
    </div>
    <div class="line" style="height: 1px;background-color: #dddddd;"></div>
<!--    <div class="container col-8"  v-for="(item,index) in textList" :key="item.chIndex">-->
<!--      <div :class='currentIndex==index?"current":""' class="img">-->
<!--      </div>-->
<!--    </div>-->
    <div class="button text-center" style="padding:4% 0 5%">
      <input class="btn btn-primary" type="submit" value="提交答案" @click="sumbit(answers)" style="width: 130px;height: 40px;border-radius: 20px">
    </div>
  </div>
</template>

<script>
import {imagesGetApi} from "../../../api/modules/images";
import {testStuGetApi, testStuPostApi, TsectionGetApi} from "../../../api/modules/testingQues";

export default {
  name: 'examPractice',
  data () {
    return {
      imgSrc: '',
      currentIndex:0,
      sectionList:[],
      section: '',
      index:1
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
      this.getTesting(index)
    },
    // 获取图片
    getImage(){
      imagesGetApi({board:'14'}).then(result => {
        this.imgSrc = result.data.cover
        console.log(result.data.page)

      })
    },
    // 获取测试题
    getTesting(index){
      this.index = index
      testStuGetApi({testingNum: this.index}).then(result => {
        console.log(result.data.choiceRos)
        console.log(result.data.subjectiveQuesRos)
      })
    },
    // 提交测试题答案
    sumbit(){
      const params = {
        choiceAnswer: '',
        subjectiveAnswer: '',
        testingNum: ''
      }
      testStuPostApi(params).then(result => {
        console.log(result)
      })
    },
    // 获取客观题章节
    getSection(){
      TsectionGetApi().then(result => {
        this.sectionList = result.data
        this.section = this.sectionList[0]
        this.getTesting(this.section)
      })
    },
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

