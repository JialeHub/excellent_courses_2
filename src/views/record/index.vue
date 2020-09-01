<template>
  <div>
    <div id="record"
         :style="`background-image: url('${$addBaseURL(imgSrc)}');position: relative ;width: 100%;height:350px;background-repeat: no-repeat;background-position: 0px 0px;background-size:cover;`"
    >
      <div class="banner" style="padding-left: 21%">
        <div style="font-size: 38px;letter-spacing: 2px;color: #ffffff;padding-top: 6%">学习记录</div>
        <div style="font-size: 20px;letter-spacing: 2px;color: #ffffff;padding-top: 2%">LEARNING RECORDS</div>
        <div style="width: 120px;height: 2px;background-color: #ffffff;border-radius: 2px 0px 0px 0px;margin-top: 3%"></div>
      </div>
    </div>
    <div class="container" style="padding: 5%">
      <div class="form-check" style="line-height: 26px;color: #808080;padding: 2% 5% 2%;">
        <table class="table" style="margin-top: 1%;text-align: center">
          <tbody>
            <tr v-for="item in recordList" :key="item.id" class="align-baseline">
              <th><input type='checkbox' class='input-checkbox' v-model='checkboxModel' :value='item.id'></th>
              <td>{{item.time}}</td>
              <td>{{item.record}}</td>
              <td>
                <input class="btn btn-danger btn-sm" type="submit" @click="deleteR(item.id)" value="删除" style="width:80px;border-radius: 20px">
              </td>
            </tr>
          </tbody>
        </table>
        <div style="display: flex;align-items: center;margin-top: 4%">
          <input style="margin-left: 32px" type='checkbox' class='input-checkbox' v-model='checked' v-on:click='checkedAll'>
          <span style="margin-left: 20px;">全选</span>
          <input class="btn btn-danger btn-sm" type="submit" value="批量删除" @click="deletes(checkboxModel)" style="margin-left:5%;width:100px;height:38px;border-radius: 20px">
          <!-- 分页-->
          <div class="justify-content-end" style="margin-left: 50%">
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
      </div>
    </div>
  </div>
</template>

<script>
import {imagesGetApi} from "../../api/modules/images";

export default {
  name: 'record',
  data(){
    return{
      recordList:[
        {id:1,time:'2020-06-33 22:30',record:'第一章第五节'},
        {id:2,time:'2020-06-33 22:30',record:'第一章第五节'},
        {id:3,time:'2020-06-33 22:30',record:'第一章第五节'},
        {id:4,time:'2020-06-33 22:30',record:'第一章第五节'},
        {id:5,time:'2020-06-33 22:30',record:'第一章第五节'},
        {id:6,time:'2020-06-33 22:30',record:'第一章第五节'},
      ],
      checkedRows:[],
      checkboxModel:[],
      checked:false,
      perPage:10,
      pageNow:0,
      totalPages:2,
      imgSrc:''
    }
  },
  watch: {//深度 watcher
    'checkboxModel': {
      handler: function (val, oldVal) {
        if (this.checkboxModel.length === this.recordList.length) {
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
  },
  methods:{
    getImage(){
      imagesGetApi({board:'20'}).then(result => {
        this.imgSrc = result.data.cover
        console.log(result.data.page)
        console.log(result.data.cover)
      })
    },
    switchToPage:function (pageNo) {
      console.log(pageNo)
      if (pageNo < 0 || pageNo >= this.totalPages) {
        return false;
      }
      this.getUserByPage(pageNo);
    },
    //获得列表
    getUserByPage(pageNo){
      console.log(pageNo)
    },
    //全选
    checkedAll: function() {
      const _this = this;
      console.log(_this.checkboxModel)
      if (this.checked) {//实现反选
        _this.checkboxModel = [];
      }else{//实现全选
        _this.checkboxModel = [];
        _this.recordList.forEach(function(item) {
          _this.checkboxModel.push(item.id);
        });
      }
    },
    //批量删除
    deletes(checkboxModel){
      console.log(checkboxModel)
    },
    //删除
    deleteR(id){
      console.log(id)
    }
  }
}
</script>

<style lang="scss">
#record{

}
</style>
