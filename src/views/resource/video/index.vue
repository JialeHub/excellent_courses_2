<template>
  <div>
    <div id="resourceVideo"
         :style="`background-image: url('${$addBaseURL(imgSrc)}');position: relative ;width: 100%;height:350px;background-repeat: no-repeat;background-position: 0px 0px;background-size:cover;`"
    >
      <div class="banner" style="padding-left: 21%">
        <div style="font-size: 38px;letter-spacing: 2px;color: #ffffff;padding-top: 6%">教学录像</div>
        <div style="font-size: 20px;letter-spacing: 2px;color: #ffffff;padding-top: 2%">TEACHING VIDEO</div>
        <div style="width: 120px;height: 2px;background-color: #ffffff;border-radius: 2px 0px 0px 0px;margin-top: 3%"></div>
      </div>
    </div>
    <!--tab栏-->
    <div class="tab container col-8" id="tab">
      <ul class="mb-3" style="padding-top: 1%">
        <li @click='change(item)' :class='currentIndex==item?"active":""' :key='index' v-for='(item,index) in sectionList'>第{{item}}章</li>
      </ul>
    </div>
    <div class="line" style="height: 1px;background-color: #dddddd;margin-top: 1%"></div>
    <!-- 内容区域-->
    <div class="container" style="margin-top: 5%;margin-bottom: 5%;">
      <div class="col-5 alert alert-success text-center" role="alert" style="position:absolute;margin-left: 20%;top:80%" v-if="successSave">
        提交成功
      </div>
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
                    <span style="color: #666666;">{{item.findex}}.</span>
                    <span style="color: #666666;cursor: pointer" @click="toPreview($baseApi+item.faccess,item.fname,item.ftype,item.id)" data-toggle="modal" data-target="#exampleModal">{{item.fname}}</span>
                  </div>
                  <div class="col-4">
                    <img v-if="item.ftype == 1" src="../../../assets/img/taskOn.png"  style="width: 18px"/>
                    <img v-if="item.ftype == 0" src="../../../assets/img/task.png"  style="width: 18px"/>
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
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" v-model="topic"></textarea>
                <button @click="sumbit(topic)" class="btn btn-primary" type="submit" style="margin-top: 4%;width: 100%;border-radius: 20px">提出话题</button>
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
<!--          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">-->
<!--            <div class="modal-dialog">-->
<!--              <div class="modal-content">-->
<!--                <div class="modal-header">-->
<!--                  视频预览-->
<!--                </div>-->
<!--                <div class="modal-body">-->
<!--                  <video  v-if="visibleVideo" :src="videoUrl" width="100%" controls ></video>-->
<!--                </div>-->
<!--                <div class="modal-footer">-->
<!--                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
<!--                  <button type="button" class="btn btn-primary">Save changes</button>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {imagesGetApi} from "../../../api/modules/images";
import {resourceGetApi, RsectionGetApi} from "../../../api/modules/fileInfo";
import {evaluatePostApi} from "../../../api/modules/evaluate";


export default {
  name: 'resourceVideo',
  components: {ContentCard: () => import("./components/index")},
  data(){
    return{
      imgSrc:'',
      sectionList:[],
      section:'',
      currentIndex:0,
      videoList:[],
      likeOnImg: require('../../../assets/img/likeOn.png'),
      likeOffImg: require('../../../assets/img/like.png'),
      likeNum: 25,
      replyNum: 10,
      active: false,
      showList : false,
      all:[1,2,3,4],
      commentList: [],
      videoUrl: '',
      visibleVideo: false,
      topic:'',
      successSave:false
    }
  },
  mounted() {
    this.getImage();
    this.getSection();
  },
  methods: {
    // 点击tab栏切换
    change:function(index){
      this.currentIndex=index;
      this.getVideo(index)
    },
    //获取图片
    getImage(){
      imagesGetApi({board:'18'}).then(result => {
        this.imgSrc = result.data.cover
      })
    },
    // 获取教学录像章节
    getSection(){
      RsectionGetApi({type:'0'}).then(result => {
        this.sectionList = result.data
        this.section = this.sectionList[0]
        this.getVideo();
      })
    },
    //获取视频
    getVideo(section){
      if(section !=undefined || section!= null){
        this.section = section
      }
      const params = {
        current:'1',
        size: '10',
        type:'0',
        section: this.section
      }
      resourceGetApi(params).then(result => {
        // console.log(result.data)
        this.videoList = result.data.records
      })
    },
    closeVideo(){
      this.videoUrl = '';
      this.visibleVideo = false
    },
    // 预览视频
    toPreview(url,name,type,id){
      console.log(url)
      this.$router.push({name:'resourceVideoDetails',query:{url: url,name: name,type:type,id:id}})
      // this.videoUrl = url;
      // this.visibleVideo = true
    },
    // 提出话题
    sumbit(topic){
      console.log(topic)
      const params = {
        type: '1',
        detail: topic
      }
      this.topic = ''
      evaluatePostApi(params).then(result =>{
        console.log(result)
        if(result.isok === true){
          this.successSave = true
          const interval = setInterval(() => {
            this.successSave = false
          }, 2000)
        }
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
