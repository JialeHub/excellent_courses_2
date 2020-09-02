<template>
  <div>
    <div id="resourceCourseware"
         :style="`background-image: url('${$addBaseURL(imgSrc)}');position: relative ;width: 100%;height:350px;background-repeat: no-repeat;background-position: 0px 0px;background-size:cover;`"
    >
      <div class="banner" style="padding-left: 21%">
        <div style="font-size: 38px;letter-spacing: 2px;color: #ffffff;padding-top: 6%">教学课件</div>
        <div style="font-size: 20px;letter-spacing: 2px;color: #ffffff;padding-top: 2%">TEACHING COURSEWARE</div>
        <div style="width: 120px;height: 2px;background-color: #ffffff;border-radius: 2px 0px 0px 0px;margin-top: 3%"></div>
      </div>
    </div>
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
        <div class="tab-pane fade show active" id="pills-one"  aria-labelledby="pills-profile-tab">
          <table class="table" style="margin-top: 5%;text-align: center">
            <thead>
              <tr class="table-borderless">
                <th><input type='checkbox' class='input-checkbox' v-model='checked' v-on:click='checkedAll'></th>
                <th>文件名</th>
                <th>文件大小</th>
                <th>上传时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in coursewareList" :key="index" >
                <th><input type='checkbox' class='input-checkbox' v-model='checkboxModel' :value='item.id'></th>
                <td>{{item.fname}}</td>
                <td>{{item.fsize}}</td>
                <td>{{item.createTime}}</td>
                <td>
                  <a href="#" style="margin-right: 10%">
                    <img src="../../../assets/img/preview.png">
                  </a>
                  <a href="#" @click="download(item.id)">
                    <img src="../../../assets/img/download.png">
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <!--批量下载按钮-->
          <button style="border-radius: 20px;width: 100px;height: 40px" type="button" class="btn btn-primary btn-sm" @click="downloads(checkboxModel)">批量下载</button>
          <!-- 分页-->
          <div class="row justify-content-center" style="padding-top: 2%;padding-bottom: 5%">
            <ul class="nav pagination">
              <li class="page-item">
                <a href="#" class="page-link"><span @click="switchToPage(pageNow-1)"><&nbsp;</span></a>
              </li>
              <li class="page-item" v-for="n in totalPages" :class="{active:n==pageNow+1}">
                <a href="#" @click="switchToPage(n)" class="page-link">{{n}}</a>
              </li>
              <li class="page-item">
                <a href="#" class="page-link"><span @click="switchToPage(pageNow+1)">>&nbsp;</span></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="tab-pane fade" id="pills-two" aria-labelledby="pills-contact-tab">2</div>
        <div class="tab-pane fade" id="pills-three"  aria-labelledby="pills-contact-tab">3</div>
        <div class="tab-pane fade" id="pills-four" aria-labelledby="pills-contact-tab">4</div>
        <div class="tab-pane fade" id="pills-five"  aria-labelledby="pills-contact-tab">5</div>
      </div>
    </div>
  </div>
</template>

<script>
import {imagesGetApi} from "../../../api/modules/images";
import {resourceDownloadApi, resourceDownloadsApi, resourceGetApi} from "../../../api/modules/fileInfo";

export default {
  name: 'resourceCourseware',
  data(){
    return{
      coursewareList:[],
      perPage:10,
      pageNow:0,
      totalPages:2,
      checkedRows:[],
      checkboxModel:[],
      checked:false,
      imgSrc:''
    }
  },
  watch: {//深度 watcher
    'checkboxModel': {
      handler: function (val, oldVal) {
        if (this.checkboxModel.length === this.coursewareList.length) {
          this.checked=true;
        }else{
          this.checked=false;
        }
      },
      deep: true
    }
  },
  mounted() {
    this.getImage();
    this.getCourseware();
  },
  methods:{
    // 获取图片
    getImage(){
      imagesGetApi({board:'17'}).then(result => {
        this.imgSrc = result.data.cover
        console.log(result.data.page)
        console.log(result.data.cover)
      })
    },
    // 获取课件
    getCourseware(pageNo){
      const params = {
        current:'1',
        size: '10',
        type:'1'
      }
      resourceGetApi(params).then(result => {
        console.log(result.data.records)
        this.coursewareList = result.data.records
      })
    },
    // 分页跳转
    switchToPage:function (pageNo) {
      console.log(pageNo)
      if (pageNo < 0 || pageNo >= this.totalPages) {
        return false;
      }
      this.getCourseware(pageNo);
    },
    // 全选
    checkedAll: function() {
      const _this = this;
      console.log(_this.checkboxModel)
      if (this.checked) {//实现反选
        _this.checkboxModel = [];
      }else{//实现全选
        _this.checkboxModel = [];
        _this.coursewareList.forEach(function(item) {
          _this.checkboxModel.push(item.id);
        });
      }
    },
    // 单资源下载
    download(id){
      console.log(id)
      resourceDownloadApi({fid:id}).then(result => {
        console.log(result)
      })
    },
    // 批量下载
    downloads(checkboxModel){
      console.log(checkboxModel)
      resourceDownloadsApi({fileIds:checkboxModel}).then(result => {
        console.log(result)
      })
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
