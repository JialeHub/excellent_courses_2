<template>
  <div>
    <div id="resourceVideo"  :style="`position: relative;height: 350px;background: rgb(246, 249, 251)
         url('')
         no-repeat center;`">
      <div class="banner" style="padding-left: 21%">
        <div style="font-size: 38px;letter-spacing: 2px;color: #ffffff;padding-top: 6%">教学录像</div>
        <div style="font-size: 20px;letter-spacing: 2px;color: #ffffff;padding-top: 2%">TEACHING VIDEO</div>
        <div style="width: 120px;height: 2px;background-color: #ffffff;border-radius: 2px 0px 0px 0px;margin-top: 3%"></div>
      </div>
    </div>
    <!--tab栏-->
    <div class="container ">
      <ul class="nav  mb-3 flex-column flex-sm-row" id="pills-tab" role="tablist">
        <li class="nav-item flex-sm-fill text-sm-center" role="presentation">
          <a class="nav-link active"  data-toggle="pill" href="#pills-one" role="tab" aria-controls="pills-home" aria-selected="true">第一章</a>
        </li>
        <li class="nav-item flex-sm-fill text-sm-center" role="presentation">
          <a class="nav-link"  data-toggle="pill" href="#pills-two" role="tab" aria-controls="pills-profile" aria-selected="false">第二章</a>
        </li>
        <li class="nav-item flex-sm-fill text-sm-center" role="presentation">
          <a class="nav-link"  data-toggle="pill" href="#pills-three" role="tab" aria-controls="pills-contact" aria-selected="false">第三章</a>
        </li>
        <li class="nav-item flex-sm-fill text-sm-center" role="presentation">
          <a class="nav-link" data-toggle="pill" href="#pills-four" role="tab" aria-controls="pills-contact" aria-selected="false">第四章</a>
        </li>
        <li class="nav-item flex-sm-fill text-sm-center" role="presentation">
          <a class="nav-link" data-toggle="pill" href="#pills-five" role="tab" aria-controls="pills-contact" aria-selected="false">第五章</a>
        </li>
      </ul>
    </div>
    <div class="line" style="height: 1px;background-color: #dddddd;margin-top: 1%"></div>
    <div class="container">
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-one"  aria-labelledby="pills-profile-tab">1</div>
        <div class="tab-pane fade" id="pills-two" aria-labelledby="pills-contact-tab">2</div>
        <div class="tab-pane fade" id="pills-three"  aria-labelledby="pills-contact-tab">3</div>
        <div class="tab-pane fade" id="pills-four" aria-labelledby="pills-contact-tab">4</div>
        <div class="tab-pane fade" id="pills-five"  aria-labelledby="pills-contact-tab">5</div>
      </div>
    </div>
    <!--内容区域-->
    <div class="container" style="margin-top: 5%;margin-bottom: 5%;">
      <div class="row">
        <!--左边卡片区域-->
        <div class="col-sm-8">
          <div class="card">
            <div class="card-header " style="display: flex">
              <span style="font-size: 22px;">目录</span>
              <img class="justify-content-end" src="../../../assets/img/task.png" style="width: 20px;margin-left: 72%"/>
              <span style="color: #808080;font-size: 18px;margin-left: 2%">待完成任务点</span>
            </div>
            <div class="card-body">
              <div class="card-text">
                 <div class="content" v-for="(item,index) in videoList" :key="item.sort" style="display: flex;margin-top: 3%;margin-bottom: 3%">
                   <div class="col-10">
                     <span style="color: #666666;">{{item.sort}}.</span>
                     <span style="color: #666666;">{{item.name}}</span>
                   </div>
                   <div class="col-4">
                     <img src="../../../assets/img/taskOn.png"  style="width: 18px"/>
                     <span style="color: #999999;margin-left: 5%">{{item.time}}</span>
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
                  <img src="../../../assets/img/home/comment.png" style="width: 40px;height: 40px;border-radius:20px;background-color: #666666;">
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
                  <img src="../../../assets/img/reply.png" style="padding-bottom: 1%;padding-left: 2%">
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
  </div>
</template>

<script>
export default {
  name: 'resourceVideo',
  data(){
    return{
      videoList:[
        {id:1,sort:1,name:'XXXXXXXXXX',time:'10分30秒',type:1},
        {id:2,sort:2,name:'XXXXXXXXXX',time:'10分30秒',type:1},
        {id:3,sort:3,name:'XXXXXXXXXXXXX',time:'10分30秒',type:1},
        {id:4,sort:4,name:'XXXXXXXXXX',time:'10分30秒',type:1},
        {id:5,sort:5,name:'XXXXXXXXXX',time:'10分30秒',type:1},
        {id:6,sort:7,name:'XXXXXXXXXX',time:'10分30秒',type:1},
        {id:7,sort:6,name:'XXXXXXXXXX',time:'10分30秒',type:1}
      ],
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
        },
        {
          icon:'../../../assets/img/home/comment.png',
          name:'Garvey.',
          time:'2020-6-20',
          content:'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          likeNum:'25',
          replyNum:'2'
        },
        {
          icon:'../../../assets/img/home/comment.png',
          name:'Garvey.',
          time:'2020-6-20',
          content:'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          likeNum:'25',
          replyNum:'2'
        },
        {
          icon:'../../../assets/img/home/comment.png',
          name:'Garvey.',
          time:'2020-6-20',
          content:'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          likeNum:'25',
          replyNum:'2'
        },
        {
          icon:'../../../ assets/img/home/comment.png',
          name:'Garvey.',
          time:'2020-6-20',
          content:'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          likeNum:'25',
          replyNum:'2'
        }
      ]
    }
  },
  methods: {
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
