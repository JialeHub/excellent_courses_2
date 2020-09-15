<template>
  <div id="practice">
    <div id="examPractice" :style="`background-image: url('${$addBaseURL(imgSrc)}');position: relative ;width: 100%;height:350px;background-repeat: no-repeat;background-position: 0px 0px;background-size:cover;`">
      <div class="banner" style="padding-left: 21%">
        <div style="font-size: 38px;letter-spacing: 2px;color: #ffffff;padding-top: 6%">模拟考试</div>
        <div style="font-size: 20px;letter-spacing: 2px;color: #ffffff;padding-top: 2%">MOCK EXAMINATION</div>
        <div style="width: 120px;height: 2px;background-color: #ffffff;border-radius: 2px 0px 0px 0px;margin-top: 3%"></div>
      </div>
    </div>
    <!--章节栏-->
    <div class="tab container col-9" id="tab">
      <ul class="mb-3" style="padding-top: 1%;font-weight: bold;font-size: 20px">
        <li @click='change(item)' :class='currentIndex===item?"active":""' v-for='(item,index) in sectionList' :key='index'>第{{item+1}}套</li>
      </ul>
    </div>
    <div class="line" style="height: 1px;background-color: #dddddd;"></div>
    <!--题目主体-->
    <div class="main container col-9" style="margin-bottom: 60px;">
      <!--客观题目-->
      <ul class="objective ml-3" v-for="(item,index) in formData" :key="item.id">
        <!--单选题-->
        <li class="type1" v-if="item['chType']===0" style="margin-top: 60px;">
          <p style="font-weight: 600;color: #565656">{{item['chIndex']}}.【单选题】{{item['chQuestion']}}</p>
          <div class="form-check" v-for="(item2,index2) in (item['chItem']).split('&')" style="margin-top: 6px;margin-left: 10px;">
            <input :disabled="isSubmit" class="form-check-input" type="radio" :name="'objective'+item.id+'_'+index2" :id="'objective'+item.id+'_'+index2" v-model="item.answer" :value="index2" >
            <label class="form-check-label" :for="'objective'+item.id+'_'+index2" v-if="index2===0" style="color: #565656" >A.{{item2}}</label>
            <label class="form-check-label" :for="'objective'+item.id+'_'+index2" v-if="index2===1" style="color: #565656" >B.{{item2}}</label>
            <label class="form-check-label" :for="'objective'+item.id+'_'+index2" v-if="index2===2" style="color: #565656" >C.{{item2}}</label>
            <label class="form-check-label" :for="'objective'+item.id+'_'+index2" v-if="index2===3" style="color: #565656" >D.{{item2}}</label>
          </div>
          <div class="myAnswer" style="margin-top: 20px;font-size: 15px;display: flex;align-items: center" v-if="isSubmit">
            <span>
              <span>我的答案：</span>
              <span v-if="item.answer === '0'">A</span>
              <span v-if="item.answer === '1'">B</span>
              <span v-if="item.answer === '2'">C</span>
              <span v-if="item.answer === '3'">D</span>
            </span>
            <span style="margin-left: 60px;" v-if="item['chAnswer']">
              <span>正确答案：</span>
              <span v-if="item['chAnswer'] === '0'">A</span>
              <span v-if="item['chAnswer'] === '1'">B</span>
              <span v-if="item['chAnswer'] === '2'">C</span>
              <span v-if="item['chAnswer'] === '3'">D</span>
            </span>
            <span style="margin-left: 60px;" v-if="item['chAnswer']">
              <embed v-if="item['chAnswer'] === item.answer" :src="require('@/assets/true.svg')" width="20" height="20" />
              <embed v-else :src="require('@/assets/false.svg')" width="20" height="20" />
            </span>
          </div>
        </li>
        <!--多选题-->
        <li class="type2" v-if="item['chType']===1" style="margin-top: 60px;">
          <p style="font-weight: 600;color: #565656">{{item['chIndex']}}.【多选题】{{item['chQuestion']}}</p>
          <div class="form-check" v-for="(item2,index2) in (item['chItem']).split('&')" style="margin-top: 6px;margin-left: 10px;">
            <input :disabled="isSubmit" class="form-check-input" type="checkbox" :name="'objective'+item.id+'_'+index2" :id="'objective'+item.id+'_'+index2" v-model="item.answer[index2]">
            <label class="form-check-label" :for="'objective'+item.id+'_'+index2" v-if="index2===0" style="color: #565656" >A.{{item2}}</label>
            <label class="form-check-label" :for="'objective'+item.id+'_'+index2" v-if="index2===1" style="color: #565656" >B.{{item2}}</label>
            <label class="form-check-label" :for="'objective'+item.id+'_'+index2" v-if="index2===2" style="color: #565656" >C.{{item2}}</label>
            <label class="form-check-label" :for="'objective'+item.id+'_'+index2" v-if="index2===3" style="color: #565656" >D.{{item2}}</label>
          </div>
          <div class="myAnswer" style="margin-top: 20px;font-size: 15px;display: flex;align-items: center" v-if="isSubmit">
            <span>
              <span>我的答案：</span>
              <span v-if="item.answer[0]">A</span>
              <span v-if="item.answer[1]">B</span>
              <span v-if="item.answer[2]">C</span>
              <span v-if="item.answer[3]">D</span>
            </span>
            <span style="margin-left: 60px;" v-if="item['chAnswer']">
              <span>正确答案：</span>
              <span v-if="(item['chAnswer']).split(',').indexOf('0') !== -1">A</span>
              <span v-if="(item['chAnswer']).split(',').indexOf('1') !== -1">B</span>
              <span v-if="(item['chAnswer']).split(',').indexOf('2') !== -1">C</span>
              <span v-if="(item['chAnswer']).split(',').indexOf('3') !== -1">D</span>
            </span>
            <span style="margin-left: 60px;" v-if="item['chAnswer']">
              <embed v-if="item['chAnswer'].split(',').every(i=>item.answer[i])" :src="require('@/assets/true.svg')" width="20" height="20" />
              <embed v-else-if="item['chAnswer'].split(',').some(i=>item.answer[i])" :src="require('@/assets/true_false.svg')" width="30" height="30" />
              <embed v-else :src="require('@/assets/false.svg')" width="20" height="20" />
            </span>
          </div>
        </li>
        <!--判断题-->
        <li class="type3" v-if="item['chType']===2" style="margin-top: 60px;">
          <p style="font-weight: 600;color: #565656">{{item['chIndex']}}.【判断题】{{item['chQuestion']}}</p>
          <div class="form-check" v-for="(index2) in 2" style="margin-top: 6px;margin-left: 10px;">
            <input :disabled="isSubmit" class="form-check-input" type="radio" :name="'objective'+item.id+'_'+(index2-1)" :id="'objective'+item.id+'_'+(index2-1)" v-model="item.answer" :value="index2-1" >
            <label class="form-check-label" :for="'objective'+item.id+'_'+0"  style="color: #565656" v-if="index2-1 === 0">X</label>
            <label class="form-check-label" :for="'objective'+item.id+'_'+1"  style="color: #565656" v-if="index2-1 === 1">√</label>
          </div>
          <div class="myAnswer" style="margin-top: 20px;font-size: 15px;display: flex;align-items: center" v-if="isSubmit">
            <span>
              <span>我的答案：</span>
              <span v-if="item.answer === '0'">错误</span>
              <span v-if="item.answer === '1'">正确</span>
            </span>
            <span style="margin-left: 60px;" v-if="item['chAnswer']">
              <span>正确答案：</span>
              <span v-if="item['chAnswer'] === '0'">错误</span>
              <span v-if="item['chAnswer'] === '1'">正确</span>
            </span>
            <span style="margin-left: 60px;" v-if="item['chAnswer']">
              <embed v-if="item['chAnswer'] === item.answer" :src="require('@/assets/true.svg')" width="20" height="20" />
              <embed v-else :src="require('@/assets/false.svg')" width="20" height="20" />
            </span>
          </div>
        </li>
      </ul>
      <!--主管题目-->
      <ul class="subjective ml-3" v-for="(item,index) in formData2" :key="item.id">
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
import {testStuGetApi, testStuPostApi, TsectionGetApi} from "@/api/modules/testingQues";

export default {
  name: 'examPractice',
  data () {
    return {
      loading: true,
      isSubmit: true,
      imgSrc:'',
      currentIndex:0,
      sectionList:[],
      section: '',
      formData: [],
      formData2: [],
    }
  },
  mounted() {
    this.getImage();
    this.getSection();
  },
  methods: {
    // 点击tab栏切换
    change(index){
      this.currentIndex=index;
      this.getTesting()
    },
    // 获取图片
    getImage(){
      imagesGetApi({board:'14'}).then(result => {
        this.imgSrc = result.data['cover']
      })
    },
    // 获取模拟考试章节
    getSection(){
      TsectionGetApi().then(result => {
        this.sectionList = result.data
        this.section = this.sectionList[0]
        this.getTesting()
      })
    },
    // 获取测试题
    getTesting(){
      this.isSubmit = true
      this.loading = true
      this.formData = []
      this.formData2 = []
      testStuGetApi({testingNum  :this.currentIndex+1 }).then(response => {
        this.isSubmit = true
        this.loading = false
        let res = []
        let res2 = []
        let isSubmitTemp = false
        response.data['choiceRos'].forEach(item =>{
          if (!this.$isEmpty(item['csAnswer'])) {
            isSubmitTemp = true
            if (item['chType']===1){
              let answerTemp=[]
              item['csAnswer'].split(',').forEach(item =>{
                answerTemp[item]=true
              })
              res.push({answer:answerTemp,...item})
            }else{
              res.push({answer:item['csAnswer'],...item})
            }
          }else{
            res.push({answer:item['chType']===1?[]:NaN,...item})
          }
        })
        this.formData = res
        response.data['subjectiveQuesRos'].forEach(item =>{
          if (!this.$isEmpty(item['ssAnswer'])) {
            isSubmitTemp = true
            res2.push({answer:item['ssAnswer'].replace(/%_And_%/g,"&"),...item})
          }else{
            res2.push({answer:'',...item})
          }
        })
        this.formData2 = res2
        if (!isSubmitTemp)this.isSubmit = false

      }).catch(error => {
        this.loading = false
      })
    },
    // 提交测试题答案
    submit(){
      //构建客观题答案
      let myAnswerList = ''
      this.formData.forEach(item =>{
        if (item['chType']===1){
          myAnswerList+=item.answer[0]?'0,':''
          myAnswerList+=item.answer[1]?'1,':''
          myAnswerList+=item.answer[2]?'2,':''
          myAnswerList+=item.answer[3]?'3,':''
          if (myAnswerList[myAnswerList.length-1]===',')myAnswerList = myAnswerList.substr(0, myAnswerList.length - 1);
          myAnswerList+='&'
        }else if (item['chType']===0 || item['chType']===2){
          myAnswerList+=item.answer+'&'
        }
      })
      if (myAnswerList[myAnswerList.length-1]==='&')myAnswerList = myAnswerList.substr(0, myAnswerList.length - 1);
      //构建主观题答案
      let myAnswerList2 = ''
      this.formData2.forEach(item =>{
        myAnswerList2+=item.answer.replace(/&/g,"%_And_%")+'&'
      })
      if (myAnswerList2[myAnswerList2.length-1]==='&')myAnswerList2 = myAnswerList2.substr(0, myAnswerList2.length - 1);
      const params = {
        choiceAnswer: myAnswerList,
        subjectiveAnswer: myAnswerList2,
        testingNum: this.currentIndex+1
      }
      testStuPostApi(params).then(result => {
        this.isSubmit=true
        this.getTesting()
      }).catch(error => {
        console.log(error);
      })
    },
  }
}
</script>

<style lang="scss">
  #practice{
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

