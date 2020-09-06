<template>
  <div>
    <div id="evaluateStudent"
         :style="`background-image: url('${$addBaseURL(imgSrc)}');position: relative ;width: 100%;height:350px;background-repeat: no-repeat;background-position: 0px 0px;background-size:cover;`"
    >
      <div class="banner" style="padding-left: 21%">
        <div style="font-size: 38px;letter-spacing: 2px;color: #ffffff;padding-top: 6%">学生评价</div>
        <div style="font-size: 20px;letter-spacing: 2px;color: #ffffff;padding-top: 2%">STUDENT EVALUATION</div>
        <div style="width: 120px;height: 2px;background-color: #ffffff;border-radius: 2px 0px 0px 0px;margin-top: 3%"></div>
      </div>
    </div>
    <div class="giveMark" style="margin: 7% 19% 7%;font-family: MicrosoftYaHei,serif;font-weight: 600">
      <div class="col-5 alert alert-success text-center" role="alert" style="position:absolute;margin-left: 20%;top: 75%" v-if="successSave">
        提交评价成功
      </div>
      <div style="display:flex;margin-top: 1%">平均评分：<make-star @star="average"/></div>
      <div style="display:flex;margin-top: 1%">知识量：<make-star @star="quantity" style="margin-left: 0.3%"/></div>
      <div style="display:flex;margin-top: 1%">趣味性：<make-star @star="interest" style="margin-left: 0.3%"/></div>
      <div style="display:flex;margin-top: 1%">教师参与：<make-star @star="participate"/></div>
      <div style="display:flex;margin-top: 1%">课程设计：<make-star @star="design"/></div>
      <div class="text-center" style="margin-bottom: 5%">
        富文本放置
        <custom-editor></custom-editor>
      </div>
      <div style="display: flex" class="justify-content-end"><input class="btn btn-primary" type="submit" value="提交" @click="submit" style="width: 115px;border-radius: 20px;"></div>
    </div>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col col-lg-12" v-for="(item,index) in commentList" :key="index"  v-if="index < 2">
          <div class="box1 align-items-center" style="display: flex">
            <img :src="$addBaseURL(item.scover)" style="width: 40px;height: 40px;border-radius:20px;background-color: #666666;">
            <h6 style="font-size: 17px;letter-spacing: 1px;color: #333333;padding: 0 1% 0">{{item.sname}}</h6>
            <make-star style="padding: 2% 2% 0" :star1="item.average"/>
            <div class="time justify-content-end" style="width:42%;color: #999999;font-family: MicrosoftYaHeiL,serif;display: flex">
              <div>{{item.createTime}}</div>
            </div>
          </div>
          <div class="box2" style="width: 1035px;overflow: hidden;padding-left: 4.5%;color: #666666;line-height: 30px">
           {{item.detail}}
          </div>
          <div class="box3 justify-content-end" style="display: flex;width:94%;margin-top: 3%;margin-bottom: 5%">
              <img style="padding-bottom: 1%;"  :src="active == true ? likeOnImg:likeOffImg" @click="rating(item)" alt="点赞图片" />
              <label class="align-items-center"  style="color: #999999;font-size: 14px;padding-left: 0.5%">赞（{{parseInt(item.praiseNum)+likeNum}})</label>
              <img src="../../../assets/img/reply.png" style="padding-bottom: 1%;padding-left: 2%">
              <a style="color: #999999;font-size: 14px;padding-left: 0.5%" @click="toWbDetail(item)">回复（{{item.wbNum}}）</a>
          </div>
        </div>
        <div class="col col-lg-12" v-for="(item,index) in commentList" :key="index"   v-show="showList" v-if="index >= 2">
          <div class="box1 align-items-center" style="display: flex">
            <img :src="$addBaseURL(item.scover)" style="width: 40px;height: 40px;border-radius:20px;background-color: #666666;">
            <h6 style="font-size: 17px;letter-spacing: 1px;color: #333333;padding: 0 1% 0">{{item.sname}}</h6>
            <make-star style="padding: 2% 2% 0" :star1="item.average"/>
            <div class="time justify-content-end" style="width:42%;color: #999999;font-family: MicrosoftYaHeiL,serif;display: flex">
              <div>{{item.createTime}}</div>
            </div>
          </div>
          <div class="box2" style="width: 1035px;overflow: hidden;padding-left: 4.5%;color: #666666;line-height: 30px">
            {{item.detail}}
          </div>
          <div class="box3 justify-content-end" style="display: flex;width:94%;margin-top: 3%;margin-bottom: 5%">
            <img style="padding-bottom: 1%;"  :src="active == true ? likeOnImg:likeOffImg" @click="rating(item)" alt="点赞图片" />
            <label class="align-items-center"  style="color: #999999;font-size: 14px;padding-left: 0.5%">赞（{{parseInt(item.praiseNum)+likeNum}})</label>
            <img src="../../../assets/img/reply.png" style="padding-bottom: 1%;padding-left: 2%">
            <a style="color: #999999;font-size: 14px;padding-left: 0.5%" @click="toWbDetail(item)">回复（{{item.wbNum}}）</a>
          </div>
        </div>
        <div class="shrink" v-if="commentList.length >= 2" @click='toggle()' style="margin-bottom: 5%">
          <a  style="color: #666666;cursor:pointer">{{showList ? '收起 ↑': '查看更多 ↓'}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {imagesGetApi} from "../../../api/modules/images";
  import {evaluateListGetApi, evaluatePostApi} from "../../../api/modules/evaluate";

  export default {
  name: 'evaluateStudent',
  data() {
    return {
      imgSrc: '',
      likeOnImg: require('../../../assets/img/likeOn.png'),
      likeOffImg: require('../../../assets/img/like.png'),
      likeNum: 25,
      replyNum: 10,
      active: false,
      showList : false,
      evaluateVo: [{
        'average': 0,
        'design': 0,
        'detail': "string",
        'interest': 0,
        'participate': 0,
        'quantity': 0,
        'type': 0
      }],
      successSave:false,
      commentList: [],
      size:'2'
    }
  },
  mounted() {
    this.getImage();
    this.getEvaluateList();
  },
  methods: {
    //保存学生评价
    submit(){
      evaluatePostApi(this.evaluateVo[0]).then(result =>{
        if(result.isok === true){
          this.successSave = true
          const interval = setInterval(() => {
            this.successSave = false
          }, 2000)
        }
      })
   },
    average(data){
      this.evaluateVo[0].average = data
    },
    quantity(data){
      this.evaluateVo[0].quantity = data
    },
    interest(data){
      this.evaluateVo[0].interest = data
    },
    participate(data){
      this.evaluateVo[0].participate = data
    },
    design(data){
      this.evaluateVo[0].design = data
    },
    // 获取图片
    getImage(){
      imagesGetApi({board:'11'}).then(result => {
        this.imgSrc = result.data.cover
      })
    },
    // 获取学生评价列表
    getEvaluateList(){
      const params = {
        current: 1,
        size: this.size,
        type: 0
      }
      evaluateListGetApi(params).then(result => {
        this.size = result.data.total
        this.commentList = result.data.records
      })
    },
    // 跳转至回复列表
    toWbDetail(item){
      this.$router.push({name:'reply',query:{item: item}})
    },
    rating: function (item) {
      if(this.active){
        this.likeNum--
        this.active = false
      }else{
        this.likeNum++
        this.active = true
      }
    },
    toggle () {
        this.showList = ! this.showList
        this.getEvaluateList()
    }
  }
}
</script>

<style lang="scss">
#evaluateStudent{

}
</style>
