<template>
  <div>
    <div id="examSubjective"
         :style="`background-image: url('${$addBaseURL(imgSrc)}');position: relative ;width: 100%;height:350px;background-repeat: no-repeat;background-position: 0px 0px;background-size:cover;`"
    >
      <div class="banner" style="padding-left: 21%">
        <div style="font-size: 38px;letter-spacing: 2px;color: #ffffff;padding-top: 6%">主观题</div>
        <div style="font-size: 20px;letter-spacing: 2px;color: #ffffff;padding-top: 2%">SUBJECTIVE QUESTIONS</div>
        <div style="width: 120px;height: 2px;background-color: #ffffff;border-radius: 2px 0px 0px 0px;margin-top: 3%"></div>
      </div>
    </div>
    <div class="tab container col-8" id="tab">
      <ul class="mb-3" style="padding-top: 1%">
        <li  v-for='(item,index) in sectionList' :key='index' :class='currentIndex==item?"active":""' @click='change(item)'>第{{item}}章</li>
      </ul>
    </div>
    <div class="line" style="height: 1px;background-color: #dddddd;"></div>
    <div class="container col-8" v-for='(item,index) in textList' :key='item.sbIndex'>
      <div :class='currentIndex==index?"current":""' class="img">
        <div class="questions">
          <div class="topic" style="display: flex;color: #585858;font-size: 16px;padding: 3% 0 3%;font-weight: bold">
            <span>{{item.sbIndex}}.</span>
            <span>【简答题】</span>
            <span>{{item.sbQues}}</span>
          </div>
          <div v-if="!isdone">富文本放置处</div>
          <div v-if="isdone" style="font-size: 16px;">
            <div class="myAnswer" style="color: #333333;line-height: 26px;">我的答案：XXXXXXXX</div>
            <div class="rightAnswer" style="color: #d61111;line-height: 26px;padding-top: 2%">正确答案：{{item.ssAnswer}}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="button text-center" style="padding:4% 0 5%">
      <input class="btn btn-primary" type="submit" value="提交答案" style="width: 130px;height: 40px;border-radius: 20px">
    </div>
  </div>
</template>

<script>
import {imagesGetApi} from "../../../api/modules/images";
import {OsectionGetApi, quesGetApi, quesPostApi} from "../../../api/modules/subjectiveQues";

export default {
  name: 'examSubjective',
  data(){
    return{
      isdone: false,
      textList:[],
      imgSrc:'',
      sectionList:[],
      section: '',
      currentIndex:0
    }
  },
  mounted() {
    this.getImage();
    this.getSection();
  },
  filters: {  // 题目类型过滤
    typeFormat(type) {
      if(type == 0){
        return '单选题'
      }else if(type === 1){
        return '多选题'
      }else if(type === 2){
        return '判断题'
      }
    },
    chItemListFormat(chItem){
      return  chItem.split('&')
    }
  },
  methods: {
    // 获取图片
    getImage(){
      imagesGetApi({board:'13'}).then(result => {
        this.imgSrc = result.data.cover
      })
    },
    // 点击tab栏切换
    change:function(index){
      this.currentIndex=index;
      this.getSubjective(index)
    },
    // 获取主观题章节
    getSection(){
      OsectionGetApi().then(result => {
        this.sectionList = result.data
        this.section = this.sectionList[0]
        this.getSubjective()
      })
    },
    // 获取主观题
    getSubjective(section){
      console.log(section)
      if(section!=undefined || section!= null){
        this.section = section
      }
      const params = { section: this.section+1 }
      quesGetApi(params).then(result => {
        this.textList = result.data
        console.log(this.textList)
      })
    },
    // 提交主观题答案
    sumbit(){
      const params = {
        answers: '',
        section: ''
      }
      quesPostApi(params).then(result => {
        console.log(result.data)
      })
    }
  }
}
</script>

<style lang="scss">
  input {
    vertical-align: middle;
  }
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
