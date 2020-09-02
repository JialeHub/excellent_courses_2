<template>
  <div>
    <div id="interaction"
         :style="`background-image: url('${$addBaseURL(imgSrc)}');position: relative ;width: 100%;height:350px;background-repeat: no-repeat;background-position: 0px 0px;background-size:cover;`"
    >
      <div class="banner" style="padding-left: 21%">
        <div style="font-size: 38px;letter-spacing: 2px;color: #ffffff;padding-top: 6%">师生互动</div>
        <div style="font-size: 20px;letter-spacing: 2px;color: #ffffff;padding-top: 2%">INTERACTION BETWEEN TEACHERS AND STUDENTS</div>
        <div style="width: 120px;height: 2px;background-color: #ffffff;border-radius: 2px 0px 0px 0px;margin-top: 3%"></div>
      </div>
    </div>
    <div class="container">
      <div class="text-center" style="margin: 5% 0 2%">富文本放置处</div>
      <div style="display: flex" class="justify-content-end"><input class="btn btn-primary" type="submit" value="提出话题" style="width: 155px;border-radius: 20px;"></div>
    </div>
<!--    师生互动回复-->
    <div class="container" style="margin-top: 5%">
      <div class="col col-lg-12" v-for="(item,index) in commentList" :key="index"  v-if="index < 1">
        <div class="box1 align-items-center" style="display: flex">
          <img src="../../assets/img/home/comment.png" style="width: 40px;height: 40px;border-radius:20px;background-color: #666666;">
          <h6 style="font-size: 17px;letter-spacing: 1px;color: #333333;padding: 0 1% 0">{{item.name}}</h6>
          <div class="time justify-content-end" style="width:90%;color: #999999;font-family: MicrosoftYaHeiL,serif;display: flex">
            <div>{{item.time}}</div>
          </div>
        </div>
        <div class="box2" style="width: 1035px;overflow: hidden;padding-left: 4.5%;color: #666666;line-height: 30px">
          {{item.content}}
        </div>
        <div class="box3 justify-content-end" style="display: flex;width:94%;margin-top: 3%;margin-bottom: 5%">
          <img style="padding-bottom: 1%;"  :src="active == true ? likeOnImg:likeOffImg" @click="rating(item)" alt="点赞图片" />
          <label class="align-items-center"  style="color: #999999;font-size: 14px;padding-left: 0.5%">赞（{{parseInt(item.likeNum)+likeNum}})</label>
          <img src="../../assets/img/reply.png" style="padding-bottom: 1%;padding-left: 2%">
          <a style="color: #999999;font-size: 14px;padding-left: 0.5%" href="reply">回复（{{item.replyNum}}）</a>
        </div>
      </div>
      <div class="reply">
        <div class="text-center" style="margin: 5% 0 2%">富文本放置处</div>
        <div style="display: flex" class="justify-content-end align-items-center"><input class="btn btn-primary" type="submit" value="回复" style="width: 115px;border-radius: 20px;"></div>
      </div>
    </div>
<!--    回复评论-->
    <div class="container col-8 align-self-end">
      <div  style="background-color: #f7f7f7;border-radius: 5px;margin-top: 5%;margin-bottom: 5%">
        <div class="row justify-content-md-center" style="padding: 5%">
          <div class="col col-lg-12" v-for="(item,index) in commentList" :key="index"  v-if="index < 1">
            <div class="box1 align-items-center" style="display: flex">
              <img src="../../assets/img/home/comment.png" style="width: 40px;height: 40px;border-radius:20px;background-color: #666666;">
              <h6 style="font-size: 17px;letter-spacing: 1px;color: #333333;padding: 0 1% 0">{{item.name}}</h6>
              <div class="time justify-content-end" style="width:93%;color: #999999;font-family: MicrosoftYaHeiL,serif;display: flex">
                <div>{{item.time}}</div>
              </div>
            </div>
            <div class="box2" style="width: 1035px;overflow: hidden;padding-left: 4.5%;color: #666666;line-height: 30px">
              {{item.content}}
            </div>
            <div class="line" style="height: 1px;background-color: #dddddd;margin: 5% 0 5%"></div>
          </div>
          <div class="col col-lg-12" v-for="(item,index) in commentList" :key="index"   v-show="showList" v-if="index >= 1">
            <div class="box1 align-items-center" style="display: flex">
              <img src="../../assets/img/home/comment.png" style="width: 40px;height: 40px;border-radius:20px;background-color: #666666;">
              <h6 style="font-size: 17px;letter-spacing: 1px;color: #333333;padding: 0 1% 0">{{item.name}}</h6>
              <div class="time justify-content-end" style="width:93%;color: #999999;font-family: MicrosoftYaHeiL,serif;display: flex">
                <div>{{item.time}}</div>
              </div>
            </div>
            <div class="box2" style="width: 1035px;overflow: hidden;padding-left: 4.5%;color: #666666;line-height: 30px">
              {{item.content}}
            </div>
            <div class="line" style="height: 1px;background-color: #dddddd;margin: 5% 0 5%"></div>
          </div>
          <div class="shrink" v-if="commentList.length > 4" @click='toggle()' style="margin-bottom: 0%">
            <a  style="color: #666666;cursor:pointer">{{showList ? '收起 ↑': '查看更多 ↓'}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {imagesGetApi} from "../../api/modules/images";

export default {
  name: 'interaction',
  data() {
    return {
      likeOnImg: require('../../assets/img/likeOn.png'),
      likeOffImg: require('../../assets/img/like.png'),
      likeNum: 25,
      replyNum: 10,
      active: false,
      showList : false,
      imgSrc:'',
      commentList: [
        {
          icon:'../../assets/img/home/comment.png',
          name:'Garvey.',
          time:'2020-6-20',
          content:'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          likeNum:'2',
          replyNum:'2'
        },
        {
          icon:'../../assets/img/home/comment.png',
          name:'Garvey.',
          time:'2020-6-20',
          content:'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          likeNum:'5',
          replyNum:'2'
        },
        {
          icon:'../../assets/img/home/comment.png',
          name:'Garvey.',
          time:'2020-6-20',
          content:'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          likeNum:'25',
          replyNum:'2'
        },
        {
          icon:'../../assets/img/home/comment.png',
          name:'Garvey.',
          time:'2020-6-20',
          content:'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          likeNum:'25',
          replyNum:'2'
        },
        {
          icon:'../../assets/img/home/comment.png',
          name:'Garvey.',
          time:'2020-6-20',
          content:'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          likeNum:'25',
          replyNum:'2'
        },
        {
          icon:'../../assets/img/home/comment.png',
          name:'Garvey.',
          time:'2020-6-20',
          content:'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          likeNum:'25',
          replyNum:'2'
        },
        {
          icon:'../../assets/img/home/comment.png',
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
      imagesGetApi({board:'15'}).then(result => {
        this.imgSrc = result.data.cover
        console.log(result.data.page)

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
#interaction{

}
</style>
