<template>
  <div id="subjective">
    <div id="examSubjective" :style="`background-image: url('${$addBaseURL(imgSrc)}');position: relative ;width: 100%;height:350px;background-repeat: no-repeat;background-position: 0px 0px;background-size:cover;`">
      <div class="banner" style="padding-left: 21%">
      <div style="font-size: 38px;letter-spacing: 2px;color: #ffffff;padding-top: 6%">主观题</div>
      <div style="font-size: 20px;letter-spacing: 2px;color: #ffffff;padding-top: 2%">SUBJECTIVE QUESTIONS</div>
      <div style="width: 120px;height: 2px;background-color: #ffffff;border-radius: 2px 0px 0px 0px;margin-top: 3%"></div>
    </div>
    </div>
    <!--章节栏-->
    <div class="tab container col-9" id="tab">
      <ul class="mb-3" style="padding-top: 1%;font-weight: bold;font-size: 20px">
        <li @click='change(item)' :class='currentIndex===item?"active":""' v-for='(item,index) in sectionList' :key='index'>第{{item+1}}章</li>
      </ul>
    </div>
    <div class="line" style="height: 1px;background-color: #dddddd;"></div>
    <!--题目主体-->
    <div class="main container col-9" style="margin-bottom: 60px;">
      <!--题目-->
      <ul class="subjective ml-3" v-for="(item,index) in formData" :key="item.id">
        <!--主观题-->
        <li class="type1" style="margin-top: 80px;">
          <div class="title" style="line-height: 1.4;">
            <span style="font-weight: 600;color: #565656">{{item['sbIndex']}}.【简答题】</span>
            <span style="font-weight: 600;color: #565656;" class="v-html" v-html="item['sbQues']"></span>
          </div>
          <custom-editor v-model="item['answer']" :editor-key="currentIndex*1000+index"  v-if="!isSubmit"/>
          <div class="myAnswer" style="margin-top: 20px;font-size: 15px;" v-if="isSubmit">
            <div style="line-height: 1.4;">
              <span>我的答案：</span>
              <span class="htmlBox" v-html="item['answer']"></span>
            </div>
            <div style="margin-top: 30px;line-height: 1.4;color: green" v-if="item['sbAnsw']">
              <span>正确答案：</span>
              <span class="htmlBox" v-html="item['sbAnsw']"></span>
            </div>
          </div>
        </li>
      </ul>
      <!--提交-->
      <div class="button text-center" style="padding:4% 0 5%"  v-if="!isSubmit">
        <input @click="submit" class="btn btn-primary" type="submit" value="提交答案" style="width: 130px;height: 40px;border-radius: 20px">
      </div>
    </div>
    <!--转圈-->
    <div class="w-100 text-center" style="padding-bottom: 60px;" v-if="loading">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import {imagesGetApi} from "@/api/modules/images";
import {OsectionGetApi, quesGetApi, quesPostApi} from "../../../api/modules/subjectiveQues";

export default {
  name: 'examSubjective',
  data(){
    return{
      loading: true,
      isSubmit: true,
      imgSrc:'',
      currentIndex:0,
      sectionList:[],
      section: '',
      formData: [],
    }
  },
  mounted() {
    this.getImage();
    this.getSection();
  },
  methods: {
    // 获取图片
    getImage(){
      imagesGetApi({board:'13'}).then(result => {
        this.imgSrc = result.data['cover']
      })
    },
    // 点击tab栏切换
    change:function(index){
      this.currentIndex=index;
      this.quesGet();
    },
    // 获取主观题章节
    getSection(){
      OsectionGetApi().then(result => {
        this.sectionList = result.data
        this.section = this.sectionList[0]
        this.quesGet()
      })
    },
    // 获取主观题
    quesGet(){
      this.isSubmit = true
      this.loading = true
      this.formData = []
      quesGetApi({section :this.currentIndex+1 }).then(response => {
        this.isSubmit = true
        this.loading = false
        let res = []
        let isSubmitTemp = false
        response.data.forEach(item =>{
          if (!this.$isEmpty(item['ssAnswer'])) {
            isSubmitTemp = true
            res.push({answer:item['ssAnswer'].replace(/%_And_%/g,"&"),...item})
          }else{
            res.push({answer:'',...item})
          }
        })
        if (!isSubmitTemp)this.isSubmit = false
        this.formData = res
      }).catch(error => {
        this.loading = false
      })
    },
    // 提交答案
    submit(){
      let myAnswerList = ''
      this.formData.forEach(item =>{
        myAnswerList+=item.answer.replace(/&/g,"%_And_%")+'&'
      })
      if (myAnswerList[myAnswerList.length-1]==='&')myAnswerList = myAnswerList.substr(0, myAnswerList.length - 1);
      let data = {
        answers: myAnswerList,
        section: this.currentIndex+1
      };
      quesPostApi(data).then(response => {
        this.isSubmit=true
        this.quesGet()
      }).catch(error => {
        console.log(error);
      })
    }

  }
}
</script>

<style lang="scss">
  #subjective{
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
  }
</style>
