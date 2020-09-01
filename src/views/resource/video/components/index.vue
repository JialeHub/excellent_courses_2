<template>
  <!--内容区域-->
  <div class="container" style="margin-top: 5%;margin-bottom: 5%;">
    <div class="row">
      <!--左边卡片区域-->
      <div class="col-sm-8">
        <div class="card">
          <div class="card-header " style="display: flex">
            <span style="font-size: 22px;">目录</span>
            <img class="justify-content-end" src="../../../../assets/img/task.png" style="width: 20px;margin-left: 72%"/>
            <span style="color: #808080;font-size: 18px;margin-left: 2%">待完成任务点</span>
          </div>
          <div class="card-body">
            <div class="card-text">
              <div class="content" v-for="(item,index) in videoList" :key="item.sort" style="display: flex;margin-top: 3%;margin-bottom: 3%">
                <div class="col-10">
                  <span style="color: #666666;">{{item.findex}}.</span>
                  <span style="color: #666666;">{{item.fname}}</span>
                </div>
                <div class="col-4">
                  <img src="../../../../assets/img/taskOn.png"  style="width: 18px"/>
                  <span style="color: #999999;margin-left: 5%">{{item.vduration}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--右边卡片区域-->
      <div class="col-sm-4">
        <div class="card">
          <div class="card-header">
            <span style="color: #333333;font-size: 22px;">师生互动</span>
          </div>
          <div class="card-body">
            <div class="form">
              <label for="exampleFormControlTextarea1"></label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
              <button class="btn btn-primary" type="submit" style="margin-top: 4%;width: 100%;border-radius: 20px">提出话题</button>
            </div>
            <!--师生互动模块-->
            <div class="col col-lg-12" v-for="(item,index) in commentList" :key="index" v-if="index < 2">
              <div class="box1 align-items-center" style="display: flex;margin-top: 10%">
                <img src="../../../../assets/img/home/comment.png" style="width: 40px;height: 40px;border-radius:20px;background-color: #666666;">
                <h6 style="font-size: 17px;letter-spacing: 1px;color: #333333;">{{item.name}}</h6>
                <div class="time justify-content-end" style="width:90%;color: #999999;font-family: MicrosoftYaHeiL,serif;display: flex">
                  <div>{{item.time}}</div>
                </div>
              </div>
              <div class="box2" style="overflow: hidden;margin-top:2%;color: #666666;line-height: 30px">
                {{item.content}}
              </div>
              <div class="box3 justify-content-end" style="display: flex;margin-top: 5%;margin-bottom: 1%">
                <img style="padding-bottom: 2%;"  :src="active == true ? likeOnImg:likeOffImg" @click="rating(item)" alt="点赞图片" />
                <label class="align-items-center"  style="color: #999999;font-size: 14px;padding-left: 2%">赞（{{parseInt(item.likeNum)+likeNum}})</label>
                <img src="../../../../assets/img/reply.png" style="padding-bottom: 1%;padding-left: 2%">
                <a style="color: #999999;font-size: 14px;padding-left: 2%" href="reply">回复（{{item.replyNum}}）</a>
              </div>
            </div>
          </div>
        </div>
        <div class="card" style="margin-top: 6%">
          <a href="/interaction" style="color: #808080;font-size: 16px;padding: 4% 0 4%" class="text-center">查看更多 > > </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {resourceGetApi} from "../../../../api/modules/fileInfo";

  export default {
    name: "index",
    data(){
      return{
        videoList:[],
        likeOnImg: require('../../../../assets/img/likeOn.png'),
        likeOffImg: require('../../../../assets/img/like.png'),
        likeNum: 25,
        replyNum: 10,
        active: false,
        showList : false,
        all:[1,2,3,4],
        commentList: [
          {
            icon:'../../../../assets/img/home/comment.png',
            name:'Garvey.',
            time:'2020-6-20',
            content:'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            likeNum:'2',
            replyNum:'2'
          },
          {
            icon:'../../../../assets/img/home/comment.png',
            name:'Garvey.',
            time:'2020-6-20',
            content:'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            likeNum:'5',
            replyNum:'2'
          },
          {
            icon:'../../../../assets/img/home/comment.png',
            name:'Garvey.',
            time:'2020-6-20',
            content:'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            likeNum:'25',
            replyNum:'2'
          },
          {
            icon:'../../../../assets/img/home/comment.png',
            name:'Garvey.',
            time:'2020-6-20',
            content:'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            likeNum:'25',
            replyNum:'2'
          },
          {
            icon:'../../../../assets/img/home/comment.png',
            name:'Garvey.',
            time:'2020-6-20',
            content:'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            likeNum:'25',
            replyNum:'2'
          },
          {
            icon:'../../../../assets/img/home/comment.png',
            name:'Garvey.',
            time:'2020-6-20',
            content:'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            likeNum:'25',
            replyNum:'2'
          },
          {
            icon:'../../../../assets/img/home/comment.png',
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
      this.getVideo();
    },
    methods: {
      //获取视频
      getVideo(){
        const params = {
          current:'1',
          size: '10',
          type:'0'
        }
        resourceGetApi(params).then(result => {
          console.log(result.data)
          this.videoList = result.data.records
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

<style scoped>

</style>
