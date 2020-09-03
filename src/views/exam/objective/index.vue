<template>
  <div>
    <div id="examObjective"
         :style="`background-image: url('${$addBaseURL(imgSrc)}');position: relative ;width: 100%;height:350px;background-repeat: no-repeat;background-position: 0px 0px;background-size:cover;`"
    >
      <div class="banner" style="padding-left: 21%">
        <div style="font-size: 38px;letter-spacing: 2px;color: #ffffff;padding-top: 6%">客观题</div>
        <div style="font-size: 20px;letter-spacing: 2px;color: #ffffff;padding-top: 2%">OBJECTIVE QUESTIONS</div>
        <div style="width: 120px;height: 2px;background-color: #ffffff;border-radius: 2px 0px 0px 0px;margin-top: 3%"></div>
      </div>
    </div>
    <div class="tab container" id="tab">
      <ul class="mb-3">
        <li @click='change(index)' :class='currentIndex==index?"active":""' :key='item.id' v-for='(item,index) in sectionList'>第{{item+1}}章</li>
      </ul>
    </div>
    <div class="line" style="height: 1px;background-color: #dddddd;margin-top: 1%"></div>
    <div class="container">
      <div :class='currentIndex==index?"current":""' class="img">
        <div class="questions" v-for="(item,index) in textList" :key="index">
          <div class="topic" style="display: flex;color: #585858;font-size: 16px;padding: 3% 0 3%;font-weight: bold">
            <span>{{item.chIndex}}.</span>
            <span>【{{item.chType | typeFormat}}】</span>
            <span>{{item.chQuestion}}</span>
          </div>
          <div class="options" v-if="item.chType === 0">
            <div style="padding-left: 3.5%;margin-bottom: 6px">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked style="outline: none;border: 1px solid rgb(216, 216, 216);padding: 2px 20px 2px 0px;">
              <label class="form-check-label" for="exampleRadios1" style="display: inline-block;padding: 0 5px;vertical-align: middle;margin-top: 2px">
                {{item.chItem.split('&')[0]}}
              </label>
            </div>
            <div style="padding-left: 3.5%;margin-bottom: 6px">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option1" checked style="outline: none;border: 1px solid rgb(216, 216, 216);padding: 2px 20px 2px 0px;">
              <label class="form-check-label" for="exampleRadios2" style="display: inline-block;padding: 0 5px;vertical-align: middle;margin-top: 2px">
                {{item.chItem.split('&')[1]}}
              </label>
            </div>
            <div style="padding-left: 3.5%;margin-bottom: 6px">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option1" checked style="outline: none;border: 1px solid rgb(216, 216, 216);padding: 2px 20px 2px 0px;">
              <label class="form-check-label" for="exampleRadios3" style="display: inline-block;padding: 0 5px;vertical-align: middle;margin-top: 2px">
                {{item.chItem.split('&')[2]}}
              </label>
            </div>
            <div style="padding-left: 3.5%;margin-bottom: 6px">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option1" checked style="outline: none;border: 1px solid rgb(216, 216, 216);padding: 2px 20px 2px 0px;">
              <label class="form-check-label" for="exampleRadios4" style="display: inline-block;padding: 0 5px;vertical-align: middle;margin-top: 2px">
                {{item.chItem.split('&')[3]}}
              </label>
            </div>
          </div>
          <div class="options" style="line-height: 26px;" v-if="item.chType === 1">
            <ul>
              <li>
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                <label class="form-check-label" for="inlineCheckbox1">{{item.chItem.split('&')[0]}}</label>
              </li>
              <li>
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                <label class="form-check-label" for="inlineCheckbox2">{{item.chItem.split('&')[1]}}</label>
              </li>
              <li>
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option2">
                <label class="form-check-label" for="inlineCheckbox3">{{item.chItem.split('&')[2]}}</label>
              </li>
              <li>
                <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="option2">
                <label class="form-check-label" for="inlineCheckbox4">{{item.chItem.split('&')[3]}}</label>
              </li>
            </ul>
          </div>
          <div class="options" v-if="item.chType === 2">
            <div class="form-check form-check-inline" style="padding-left: 3%">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios6" value="option1" checked>
              <label class="form-check-label" for="exampleRadios6" style="font-size: 20px">
                √
              </label>
            </div>
            <div class="form-check form-check-inline" style="padding-left: 4%">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios7" value="option2">
              <label class="form-check-label" for="exampleRadios7" style="font-size: 20px">
                ×
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {imagesGetApi} from "../../../api/modules/images";
import {choiceStuPostApi, choiceStuGetApi, sectionGetApi} from "../../../api/modules/choiceQues";

export default {
  name: 'examObjective',
  data(){
    return{
      isdone: false,
      imgSrc:'',
      textList:[],
      currentIndex:0,
      sectionList:[],
      section: '',
      chItem: '',
      chItemList: ''  //多选题选项列表
    }
  },
  computed: {
    filterData:function(){
      this.chItemList = chItem.spilt('&')
      return this.chItemList
    }
  },
  mounted() {
    this.getImage();
    this.getChoice();
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
    // 点击tab栏切换
    change:function(index){
      this.currentIndex=index;
      this.getChoice(index)
    },
    // 获取图片
    getImage(){
      imagesGetApi({board:'12'}).then(result => {
        this.imgSrc = result.data.cover
      })
    },
    // 获取客观题章节
    getSection(){
      sectionGetApi().then(result => {
        this.sectionList = result.data
        this.section = this.sectionList[0]
      })
    },
    // 获取客观题
    getChoice(section){
      console.log(section)
      if(section!=undefined || section!= null){
        this.section = section
      }
      const params = { section: this.section }
      choiceStuGetApi(params).then(result => {
        this.textList = result.data
        console.log('获取到的数组',this.chItem)
      })
    },
    // 提交客观题答案
    sumbit(){
      const params = {
        answers: '',
        section: ''
      }
      choiceStuPostApi(params).then(result => {
        console.log(result.data)
      })
    }
  }
}
</script>

<style lang="scss">
  label {
  }

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
