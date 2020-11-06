<template>
  <div id="login" class="text-center"
       :style="`background-image: url('${$addBaseURL(imgSrc)}');width: 100%;height: 100%;position: fixed;background-repeat: no-repeat;background-position: 0px 0px;background-size:cover;`"
  >
    <div class="card" style="width: 28rem;height: 30rem;border-radius: 10px;opacity: 0.9;margin-left: 35%;margin-top: 8%">
      <div class="card-body">
        <div class="card-title" style="margin-top:6%">
          <img src="../../../assets/img/logo02.png" style="width: 15%;height: 22%;">
        </div>
        <h6 class="card-subtitle mb-2" style="font-size: 25px;letter-spacing: 4px;color: #1089f0;font-weight: bold;padding-top: 3%">嵌入式系统原理与开发</h6>
        <form style="margin-top: 12%;margin-left: 12%;">
          <div class="form-group row">
            <label for="StudentID" class="col-sm-2 col-form-label">学号</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="StudentID" placeholder="请输入您的学号" v-model="userVo.username">
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">密码</label>
            <div class="col-sm-9">
              <input type="password" class="form-control" id="inputPassword" placeholder="请输入您的密码" v-model="userVo.password">
            </div>
          </div>
          <div class="text-right col-sm-12" >
            <a href="/password" style="color: #999999;letter-spacing: 2px;">忘记密码？</a>
          </div>
        </form>
        <div class="twoButton" style="padding-top: 10%">
          <button class="btn btn-primary" type="submit" value="登录" @click="login" style="width: 300px;height: 40px;border-radius: 40px;margin-top: 5%">
            <span v-if="!getCodeLoading">登录</span>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="getCodeLoading"></span>
            <span v-if="getCodeLoading"> 登录中..</span>
          </button><br/>
    <!--  <a class="btn btn-outline-primary" href="register" role="button" style="width: 300px;height: 40px;border-radius: 40px;margin-top: 5%">注册</a>-->
        </div>
        <!-- 警告框-->
        <div class="alert alert-primary" role="alert" v-if="isAlert" style="margin-bottom: 50%">
          {{alertMessage}},请重新输入!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {stuLoginApi} from "../../../api/modules/auth";
import {imagesGetApi} from "../../../api/modules/images";

export default {
  name: 'login',
  data () {
    return {
      userVo: {
        username: '',
        password: ''
      },
      getCodeLoading: false,
      imgSrc: '',
      isAlert: false,
      alertMessage:''
    }
  },
  mounted() {
    this.getImage();
  },
  methods:{
    //获取图片
    getImage(){
      imagesGetApi({board:'7'}).then(result => {
        this.imgSrc = result.data.cover

      })
    },
    //登录
    login() {
      this.getCodeLoading = true
      stuLoginApi({username:this.userVo.username,password:this.userVo.password}).then(result => {
        console.log(result.data)
        if(result.code == 200){
          console.log('登录成功')
          this.$store.dispatch('setUser', { username: this.userVo.username,Info: result.data.studentInfo })
          this.$store.dispatch('setToken', result.data.token)
          console.log(this.$route.query)
          if (!this.$isEmpty(this.$route.query.redirect)) {
            console.log('!isEmpty')
            this.$router.push({ path: this.$route.query.redirect + '' })
          } else {
            console.log('isEmpty')
            let time = 2
            const interval = setInterval(() => {
              time--
              if (time < 0) {
                clearInterval(interval)
                this.$router.push({ path: '/home' })
              }
            }, 800)
          }
        }else{
          console.log(result.message)
            this.alertMessage = result.message
            this.isAlert = true
            const interval = setInterval(() => {
              this.getCodeLoading = false
              this.isAlert = false
            }, 3000)
        }
        console.log(result)
      })
    }
  }
}
</script>

<style lang="scss">

</style>
