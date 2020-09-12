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
    <!--tab栏-->
    <div class="tab container col-8" id="tab">
      <ul class="mb-3" style="padding-top: 1%;font-weight: bold;font-size: 18px">
        <li @click='change(item)' :class='currentIndex==item?"active":""' :key='index' v-for='(item,index) in sectionList'>第{{item}}章</li>
      </ul>
    </div>
    <div class="line" style="height: 1px;background-color: #dddddd;margin-top: 1%"></div>
    <div class="container">
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-one"  aria-labelledby="pills-profile-tab">
          <table class="table" style="margin-top: 5%;text-align: center">
            <thead>
              <tr class="table-borderless">
<!--                <th><input type='checkbox' class='input-checkbox' v-model='checked' v-on:click='checkedAll'></th>-->
                <th>文件名</th>
                <th>文件大小</th>
                <th>上传时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in coursewareList" :key="index" >
<!--                <th><input type='checkbox' class='input-checkbox' v-model='checkboxModel' :value='item.id'></th>-->
                <td>{{item.fname}}</td>
                <td>{{item.fsize}}</td>
                <td>{{item.createTime}}</td>
                <td>
                  <a href="#" @click="download(item.faccess)">
                    <img src="../../../assets/img/download.png">
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <!--批量下载按钮-->
<!--          <button style="border-radius: 20px;width: 100px;height: 40px" type="button" class="btn btn-primary btn-sm" @click="downloads(checkboxModel)">批量下载</button>-->
          <!-- 分页-->
          <div class="row justify-content-center" style="padding-top: 2%;padding-bottom: 5%">
            <ul class="nav pagination" v-if="isPagination">
              <li class="page-item">
                <a href="#" class="page-link"><span @click="switchToPage(pageNow-1)"><&nbsp;</span></a>
              </li>
              <li class="page-item" v-for="n in totalPages" :class="{active:n == pageNow}">
                <a href="#" @click="switchToPage(n)" class="page-link">{{n}}</a>
              </li>
              <li class="page-item">
                <a href="#" class="page-link"><span @click="switchToPage(pageNow+1)">>&nbsp;</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {imagesGetApi} from "../../../api/modules/images";
import {resourceDownloadApi, resourceDownloadsApi, resourceGetApi, RsectionGetApi} from "../../../api/modules/fileInfo";

export default {
  name: 'resourceCourseware',
  data(){
    return{
      coursewareList:[],
      perPage:10,
      pageNow:0 ,
      totalPages:'',
      size:'10',
      checkedRows:[],
      checkboxModel:[],
      checked:false,
      imgSrc:'',
      sectionList:[],
      section:'',
      currentIndex:0,
      pageNo:1,
      isPagination:false
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
    this.getSection();
  },
  methods:{
    // 点击tab栏切换
    change:function(index){
      this.currentIndex=index;
      this.getCourseware(index)
    },
    // 获取图片
    getImage(){
      imagesGetApi({board:'17'}).then(result => {
        this.imgSrc = result.data.cover
        console.log(result.data.page)

      })
    },
    // 获取教学课件章节数
    getSection(){
      RsectionGetApi({type:'1'}).then(result => {
        this.sectionList = result.data
        this.section = this.sectionList[0]
        this.getCourseware();
      })
    },
    // 获取课件
    getCourseware(section){
      if(section !=undefined || section!= null){
        this.section = section
      }
      const params = {
        current:'1',
        size: '10',
        type:'1',
        section: this.section
      }
      resourceGetApi(params).then(result => {
        console.log(result.data.records)
        this.coursewareList = result.data.records
      })
    },
    // 分页跳转
    switchToPage:function (pageNo) {
      console.log(pageNo)
      this.pageNow = pageNo
      this.getUserByPage(pageNo);
      if (pageNo < 0 || pageNo >= this.totalPages) {
        return false;
      }
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
    download(faccess){
      const url = this.$baseApi + faccess
      console.log(url);
      if ('download' in document.createElement('a')) {
        const a = document.createElement('a')
        a.href = url
        a.download = ''
        a.target = '_blank'
        document.body.appendChild(a)
        a.click()
        URL.revokeObjectURL(a.href)
        document.body.removeChild(a)
      }
      // console.log(id)
      // resourceDownloadApi({fid:id}).then(result => {
      //   console.log(result)
      // })
    },
    // 批量下载
    downloads(checkboxModel){
      const url = this.$baseApi + faccess
      console.log(url);
      if ('download' in document.createElement('a')) {
        const a = document.createElement('a')
        a.href = url
        a.download = ''
        a.target = '_blank'
        document.body.appendChild(a)
        a.click()
        URL.revokeObjectURL(a.href)
        document.body.removeChild(a)
      }
      // console.log(checkboxModel)
      // resourceDownloadsApi({fileIds:checkboxModel}).then(result => {
      //   console.log(result)
      // })
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
