<template>
  <div id="login" class="text-center"
       :style="`background-image: url('${$addBaseURL(imgSrc)}');width: 100%;height: 100%;position: fixed;background-repeat: no-repeat;background-position: 0px 0px;background-size:cover;`"
  >
    <div class="card" style="width: 28rem;height: 30rem;border-radius: 10px;opacity: 0.9;margin-left: 35%;margin-top: 8%">
      <div class="card-body">
        <div class="card-title" style="margin-top:6%">
          <img src="../../../assets/img/logo02.png" style="width: 15%;height: 22%;">
        </div>
        <h6 class="card-subtitle mb-2" style="font-size: 25px;letter-spacing: 4px;color: #1089f0;font-weight: bold">嵌入式系统原理与开发</h6>
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
        <div class="twoButton">
          <button class="btn btn-primary" type="submit" value="登录" @click="login" style="width: 300px;height: 40px;border-radius: 40px;margin-top: 5%">
            <span v-if="!getCodeLoading">登录</span>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="getCodeLoading"></span>
            <span v-if="getCodeLoading"> 登录中..</span>
          </button><br/>
          <a class="btn btn-outline-primary" href="register" role="button" style="width: 300px;height: 40px;border-radius: 40px;margin-top: 5%">注册</a>
        </div>
        <!-- 模态框-->
        <transition name="fade">
          <div v-if="sample_modal">
            <div class="modal" v-on:click.self="sample_modal=true"  >
              <div class="modal-dialog modal-dialog-centered" style="width: 341px;height: 187px;opacity: 0.8">
                <div class="modal-content" style="background-color: #3c3c3c">
                  <div class="modal-body">
                    <img src="../../../assets/img/login/success.png" style="width: 35px;height: 28px;margin-top: 6%;">
                    <p style="color: #ffffff;font-size: 14px;margin-top: 6%;margin-bottom: 15%">注册成功</p>
                    <a class="btn" href="login" role="button" style="width: 120px;font-size: 14px;height: 35px;border-radius: 20px;background-color: #ffffff;color: #333333;margin-bottom: 5%">去登录 > </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
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
      sample_modal: true,
      getCodeLoading: false,
      imgSrc: ''
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
        console.log(result.data.cover)
      })
    },
    //登录
    login() {
      this.getCodeLoading = true
      stuLoginApi({username:this.userVo.username,password:this.userVo.password}).then(result => {
        if(result.code == 200){
          console.log('登录成功')
          this.$store.dispatch('setUser', { username: this.userVo.username })
          this.$store.dispatch('setToken', result.data.token)
          if (!this.$isEmpty(this.$route.query.redirect)) {
            console.log('!isEmpty')
            this.$router.push({ path: this.$route.query.redirect + '' })
          } else {
            console.log('isEmpty')
            this.Tip = '登录成功,欢迎回来（3秒后自动跳转到主页）'
            let time = 2
            const interval = setInterval(() => {
              time--
              if (time < 0) {
                clearInterval(interval)
                this.$router.push({ path: '/home' })
              }
            }, 600)
          }
        }else{
          console.log(result.message)
        }
        console.log(result)
      })
    }
  }
}
</script>

<style lang="scss">

</style>
