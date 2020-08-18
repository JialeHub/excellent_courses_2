<template>
  <div>
    <div id="homework"  :style="`position: relative;height: 350px;background: rgb(246, 249, 251)
         url('')
         no-repeat center;`">
      <div class="banner" style="padding-left: 21%">
        <div style="font-size: 38px;letter-spacing: 2px;color: #ffffff;padding-top: 6%">作业提交</div>
        <div style="font-size: 20px;letter-spacing: 2px;color: #ffffff;padding-top: 2%">JOB SUBMISSION</div>
        <div style="width: 120px;height: 2px;background-color: #ffffff;border-radius: 2px 0px 0px 0px;margin-top: 3%"></div>
      </div>
    </div>
    <div class="container">
      <table class="table" style="margin-top: 8%;text-align: center">
        <thead>
          <tr>
            <th scope="col">作业编号</th>
            <th scope="col">作业名称</th>
            <th scope="col">作业要求</th>
            <th scope="col">截止时间</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in homeworkList" :key="index" >
            <th>{{item.id}}</th>
            <td>{{item.name}}</td>
            <td>{{item.require}}</td>
            <td>{{item.time}}</td>
            <td>
              <button  type="button" class="btn btn-primary btn-sm" @click="toDetail(item.id)">查看详情</button>
            </td>
          </tr>
        </tbody>
      </table>
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
  </div>
</template>

<script>
export default {
  name: 'homework',
  data(){
    return{
      homeworkList:[
        {id:1,name:'XXXXXX',require:'XXXXXXX',time:'2020.06.01 13:35'},
        {id:2,name:'XXXXXX',require:'XXXXXXX',time:'2020.06.01 13:35'},
        {id:3,name:'XXXXXX',require:'XXXXXXX',time:'2020.06.01 13:35'},
        {id:4,name:'XXXXXX',require:'XXXXXXX',time:'2020.06.01 13:35'},
        {id:5,name:'XXXXXX',require:'XXXXXXX',time:'2020.06.01 13:35'},
        {id:6,name:'XXXXXX',require:'XXXXXXX',time:'2020.06.01 13:35'},
        {id:7,name:'XXXXXX',require:'XXXXXXX',time:'2020.06.01 13:35'},
        {id:8,name:'XXXXXX',require:'XXXXXXX',time:'2020.06.01 13:35'},
        {id:9,name:'XXXXXX',require:'XXXXXXX',time:'2020.06.01 13:35'}
      ],
      perPage:10,
      pageNow:0,
      totalPages:2,
      checkedRows:[]
    }
  },
  methods:{
    toDetail(id){
      console.log(id)
    },
    switchToPage:function (pageNo) {
      console.log(pageNo)
      if (pageNo < 0 || pageNo >= this.totalPages) {
        return false;
      }
      this.getUserByPage(pageNo); //获得作业列表
    },
    getUserByPage(pageNo){
      console.log(pageNo)
    }
  }
}
</script>

<style lang="scss">
#homework{

}
</style>
