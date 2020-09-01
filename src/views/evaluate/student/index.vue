<template>
  <div>
    <div id="evaluateStudent"  :style="`position: relative;height: 350px;
         background: rgb(246, 249, 251) url('${$addBaseURL(imgSrc)}') no-repeat center;
         background-size: cover;`">
      <div class="banner" style="padding-left: 21%">
        <div style="font-size: 38px;letter-spacing: 2px;color: #ffffff;padding-top: 6%">学生评价</div>
        <div style="font-size: 20px;letter-spacing: 2px;color: #ffffff;padding-top: 2%">STUDENT EVALUATION</div>
        <div style="width: 120px;height: 2px;background-color: #ffffff;border-radius: 2px 0px 0px 0px;margin-top: 3%"></div>
      </div>
    </div>
    <div class="giveMark" style="margin: 7% 19% 7%;font-family: MicrosoftYaHei,serif;font-weight: 600">
      <div style="display:flex;margin-top: 1%">平均评分：<make-star/></div>
      <div style="display:flex;margin-top: 1%">知识量：<make-star style="margin-left: 0.3%"/></div>
      <div style="display:flex;margin-top: 1%">趣味性：<make-star style="margin-left: 0.3%"/></div>
      <div style="display:flex;margin-top: 1%">教师参与：<make-star/></div>
      <div style="display:flex;margin-top: 1%">课程设计：<make-star/></div>
      <div class="text-center" style="margin-bottom: 5%">富文本放置</div>
      <div style="display: flex" class="justify-content-end"><input class="btn btn-primary" type="submit" value="提交" style="width: 115px;border-radius: 20px;"></div>
    </div>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col col-lg-12" v-for="(item,index) in commentList" :key="index"  v-if="index < 2">
          <div class="box1 align-items-center" style="display: flex">
            <img src="../../../assets/img/home/comment.png" style="width: 40px;height: 40px;border-radius:20px;background-color: #666666;">
            <h6 style="font-size: 17px;letter-spacing: 1px;color: #333333;padding: 0 1% 0">{{item.name}}</h6>
            <make-star style="padding: 2% 2% 0"/>
            <div class="time justify-content-end" style="width:42%;color: #999999;font-family: MicrosoftYaHeiL,serif;display: flex">
              <div>{{item.time}}</div>
            </div>
          </div>
          <div class="box2" style="width: 1035px;overflow: hidden;padding-left: 4.5%;color: #666666;line-height: 30px">
           {{item.content}}
          </div>
          <div class="box3 justify-content-end" style="display: flex;width:94%;margin-top: 3%;margin-bottom: 5%">
              <img style="padding-bottom: 1%;"  :src="active == true ? likeOnImg:likeOffImg" @click="rating(item)" alt="点赞图片" />
              <label class="align-items-center"  style="color: #999999;font-size: 14px;padding-left: 0.5%">赞（{{parseInt(item.likeNum)+likeNum}})</label>
              <img src="../../../assets/img/reply.png" style="padding-bottom: 1%;padding-left: 2%">
              <a style="color: #999999;font-size: 14px;padding-left: 0.5%" href="reply">回复（{{item.replyNum}}）</a>
          </div>
        </div>
        <div class="col col-lg-12" v-for="(item,index) in commentList" :key="index"   v-show="showList" v-if="index >= 2">
          <div class="box1 align-items-center" style="display: flex">
            <img src="../../../assets/img/home/comment.png" style="width: 40px;height: 40px;border-radius:20px;background-color: #666666;">
            <h6 style="font-size: 17px;letter-spacing: 1px;color: #333333;padding: 0 1% 0">{{item.name}}</h6>
            <make-star style="padding: 2% 2% 0"/>
            <div class="time justify-content-end" style="width:42%;color: #999999;font-family: MicrosoftYaHeiL,serif;display: flex">
              <div>{{item.time}}</div>
            </div>
          </div>
          <div class="box2" style="width: 1035px;overflow: hidden;padding-left: 4.5%;color: #666666;line-height: 30px">
            {{item.content}}
          </div>
          <div class="box3 justify-content-end" style="display: flex;width:94%;margin-top: 3%;margin-bottom: 5%">
            <img style="padding-bottom: 1%;"  :src="active == true ? likeOnImg:likeOffImg" @click="rating(item)" alt="点赞图片" />
            <label class="align-items-center"  style="color: #999999;font-size: 14px;padding-left: 0.5%">赞（{{parseInt(item.likeNum)+likeNum}})</label>
            <img src="../../../assets/img/reply.png" style="padding-bottom: 1%;padding-left: 2%">
            <a style="color: #999999;font-size: 14px;padding-left: 0.5%" href="reply">回复（{{item.replyNum}}）</a>
          </div>
        </div>
        <div class="shrink" v-if="commentList.length > 2" @click='toggle()' style="margin-bottom: 5%">
          <a  style="color: #666666;cursor:pointer">{{showList ? '收起 ↑': '查看更多 ↓'}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {imagesGetApi} from "../../../api/modules/images";

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
      commentList: [
        {
          icon:'../../../assets/img/home/comment.png',
          name:'Garvey.',
          time:'2020-6-20',
          content:'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          likeNum:'2',
          replyNum:'2'
        },
        {
          icon:'../../../assets/img/home/comment.png',
          name:'Garvey.',
          time:'2020-6-20',
          content:'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          likeNum:'5',
          replyNum:'2'
        },
        {
          icon:'../../../assets/img/home/comment.png',
          name:'Garvey.',
          time:'2020-6-20',
          content:'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          likeNum:'25',
          replyNum:'2'
        }
      ]
    }
  },
  mounted() {
    this.getImage();
  },
  methods: {
    getImage(){
      imagesGetApi({board:'11'}).then(result => {
        this.imgSrc = result.data.cover
        console.log(result.data.page)
        console.log(result.data.cover)
      })
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
    }
  }
}
</script>

<style lang="scss">
#evaluateStudent{

}
</style>
