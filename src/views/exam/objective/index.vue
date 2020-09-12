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
    <div class="tab container col-8" id="tab">
      <ul class="mb-3" style="padding-top: 1%;font-weight: bold;font-size: 20px">
        <li @click='change(item)' :class='currentIndex==item?"active":""' :key='index' v-for='(item,index) in sectionList'>第{{item+1}}章</li>
      </ul>
    </div>
    <div class="line" style="height: 1px;background-color: #dddddd;"></div>
    <div class="container col-8"  v-for="(item,index) in textList" :key="item.chIndex">
      <div :class='currentIndex==index?"current":""' class="img">
        <div class="questions">
          <div class="topic" style="display: flex;color: #585858;font-size: 16px;padding: 3% 0 3%;font-weight: bold">
            <span>{{item.chIndex}}.</span>
            <span>【{{item.chType | typeFormat}}】</span>
            <span>{{item.chQuestion}}</span>
          </div>
          <!-- 单选题 -->
          <div class="options" v-if="item.chType === 0">
            <div style="padding-left: 2%;margin-bottom: 6px">
              <input :checked="item.isCheck" @click="selectPosition(item.chIndex,item.chItem.split('&')[0])" v-model="item.id" type="radio" :name="'name'+item.id" :id="item.id" :value="item.chItem.split('&')[0]" checked style="outline: none;border: 1px solid rgb(216, 216, 216);padding: 2px 20px 2px 0px;">
              <label  class="form-check-label" :for="item.id" style="display: inline-block;padding: 0 5px;vertical-align: middle;margin-top: 2px">
                {{item.chItem.split('&')[0]}}
              </label>
            </div>
            <div style="padding-left: 2%;margin-bottom: 6px">
              <input :checked="item.isCheck" @click="selectPosition(item.chIndex,item.chItem.split('&')[1])" v-model="item.id" type="radio" :name="'name'+item.id" :id="item.id"   :value="item.chItem.split('&')[1]"  style="outline: none;border: 1px solid rgb(216, 216, 216);padding: 2px 20px 2px 0px;">
              <label class="form-check-label" :for="item.id" style="display: inline-block;padding: 0 5px;vertical-align: middle;margin-top: 2px">
                {{item.chItem.split('&')[1]}}
              </label>
            </div>
            <div style="padding-left: 2%;margin-bottom: 6px">
              <input :checked="item.isCheck" @click="selectPosition(item.chIndex,item.chItem.split('&')[2])" v-model="item.id" type="radio" :name="'name'+item.id" :id="item.id"   :value="item.chItem.split('&')[2]"  style="outline: none;border: 1px solid rgb(216, 216, 216);padding: 2px 20px 2px 0px;">
              <label class="form-check-label" :for="item.id" style="display: inline-block;padding: 0 5px;vertical-align: middle;margin-top: 2px">
                {{item.chItem.split('&')[2]}}
              </label>
            </div>
            <div style="padding-left: 2%;margin-bottom: 6px">
              <input :checked="item.isCheck" @click="selectPosition(item.chIndex,item.chItem.split('&')[3])" v-model="item.id" type="radio" :name="'name'+item.id" :id="item.id"    :value="item.chItem.split('&')[3]"  style="outline: none;border: 1px solid rgb(216, 216, 216);padding: 2px 20px 2px 0px;">
              <label class="form-check-label" :for="item.id" style="display: inline-block;padding: 0 5px;vertical-align: middle;margin-top: 2px">
                {{item.chItem.split('&')[3]}}
              </label>
            </div>
          </div>
          <!-- 多选题 -->
          <div class="options" style="line-height: 26px;" v-if="item.chType === 1">
            <ul >
              <li>
                <input class="form-check-input" type="checkbox" id="option1" value="option1" @change="getChecked(item.chIndex,item.chItem.split('&')[0])">
                <label  class="form-check-label" for="option1" >{{item.chItem.split('&')[0]}}</label>
              </li>
              <li>
                <input  class="form-check-input" type="checkbox" id="option2" value="option2" @change="getChecked(item.chIndex,item.chItem.split('&')[1])">
                <label  class="form-check-label" for="option2">{{item.chItem.split('&')[1]}}</label>
              </li>
              <li>
                <input  class="form-check-input" type="checkbox" id="option3" value="option2" @change="getChecked(item.chIndex,item.chItem.split('&')[2])">
                <label  class="form-check-label" for="option3">{{item.chItem.split('&')[2]}}</label>
              </li>
              <li>
                <input class="form-check-input" type="checkbox" id="option4" value="option2" @change="getChecked(item.chIndex,item.chItem.split('&')[3])">
                <label  class="form-check-label" for="option4">{{item.chItem.split('&')[3]}}</label>
              </li>
            </ul>
          </div>
          <!-- 判断题 -->
          <div class="options" v-if="item.chType === 2">
            <div class="form-check form-check-inline" style="padding-left: 3%">
              <input class="form-check-input" type="radio" :name="item.id" :id="item.id" :value="questionYes"  @change="toYes(item.chIndex,questionYes)" >
              <label class="form-check-label" :for="item.id" style="font-size: 20px">
                √
              </label>
            </div>
            <div class="form-check form-check-inline" style="padding-left: 4%">
              <input class="form-check-input" type="radio" :name="item.id"  :id="item.id"  :value="questionNo" @change="toYes(item.chIndex,questionNo)">
              <label class="form-check-label" :for="item.id" style="font-size: 20px">
                ×
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="button text-center" style="padding:4% 0 5%">
      <input class="btn btn-primary" type="submit" value="提交答案" @click="sumbit()" style="width: 130px;height: 40px;border-radius: 20px">
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
      chItemList: '' , //多选题选项列表
      answers:[],
      questionYes: 1,
      questionNo: 0,
      arr:[],
      arr1:[],
      arr2:[],
      arr3:[],
      arr4:[],
      checked: false
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
    // 获取单选题答案
    selectPosition (index, role) {
      this.answers.push({index,role})
      console.log(this.answers)
    },
    // 获取多选题答案
    getChecked(index, role){
      console.log(event.target.checked)
      if(event.target.checked === true){  //判断复选框是否选中
        this.arr.push({index,role})
      }else {   //取消选中时从数组删除
        this.arr.splice(this.arr.indexOf(index),1)
      }
    },

    // 获取判断题答案
    toYes(index, role){
      console.log(index, role)
      this.arr2.push({index,role})
    },
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
        this.getChoice()
      })
    },
    // 获取客观题
    getChoice(section){
      if(section!=undefined || section!= null){
        this.section = section
      }
      const params = { section: this.section+1 }
      choiceStuGetApi(params).then(result => {
        this.textList = result.data
          // let val1 = this.textList
          // this.chItemList = val1.filter(function(val){
          //   return val.chType === 1;
          // });
          // console.log(this.chItemList)
      })
    },
    // 提交客观题答案
    sumbit(){
      let res = []
      //处理单选题
      while(this.answers.length!==0){
        let list = this.answers.shift()
        let arr2 = [list]
        for (let i = 0; i < this.answers.length; i++) {
          if (this.answers[i].index === list.index) {
            arr2 = arr2.concat(this.answers.splice(i, 1))
            i--
          }
        }
        res.push(arr2)
      }
      for(let i=0;i<res.length;i++){
        res[i].splice(0,res[i].length-1)
        this.arr2.push(res[i][0])
      }
      //处理多选题
      let res1 = []
      while(this.arr.length!==0){
        let list1 = this.arr.shift()
        let arr3 = [list1]
        for (let i = 0; i < this.arr.length; i++) {
          if (this.arr[i].index === list1.index) {
            arr3 = arr3.concat(this.arr.splice(i, 1))
            i--
          }
        }
        this.arr3.push(arr3)
        //拼接字符串
        console.log(this.arr3)
      }
      // console.log(this.arr2)
      // console.log(this.arr3)
      // const params = {
      //   answers: '',
      //   section: ''
      // }
      // choiceStuPostApi(params).then(result => {
      //   console.log(result.data)
      // })
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
