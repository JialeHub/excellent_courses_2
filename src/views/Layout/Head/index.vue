<template>
  <div id="Head">
    <nav class="navbar navbar-expand-sm  shadow-sm">
      <!--Nav导航栏-->
      <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent"
      >
        <a class="navbar-brand" href="#">
          <img src="../../../assets/img/logo02.png">
        </a>
        <span style="font-family: AliHYAiHei-Beta,cursive;font-size: 26px;letter-spacing: 2px;color: #1089f0;font-weight: bold;margin-right: 6%">嵌入式</span>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        </button>
        <ul class="navbar-nav" style="display: flex;align-items: center">
          <li class="nav-item ">
            <router-link class="nav-link" to="/" :class="[ $route.name === 'home' ? 'active' : '']">
              <span>首页</span>
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link " id="navbarDropdownMenuLink" role="button"
               :class="['nav-item ',$route.name === 'outside' ? 'active' : ''|$route.name === 'school' ? 'active' : ''|$route.name === 'teacher' ? 'active' : ''|$route.name === 'student' ? 'active' : '']"
               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
               style="padding: 10px"
            >
            课程评价
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <span class="dropdown-item"><router-link to="/outside"><span>校外专家评价</span></router-link></span>
              <span class="dropdown-item"><router-link to="/school"><span>校内专家评价</span></router-link></span>
              <span class="dropdown-item"><router-link to="/teacher"><span>教师评价</span></router-link></span>
              <span class="dropdown-item"><router-link to="/student"><span>学生评价</span></router-link></span>
            </div>
          </li>
          <li class="dropdown"  :class="[
              'nav-item ',
              $route.name === 'objective' ? 'active' : ''|
              $route.name === 'subjective' ? 'active' : ''|
              $route.name === 'practice' ? 'active' : ''
            ]">
            <a class="nav-link " role="button" style="padding: 10px"
               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              考试平台
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item"><router-link to="/objective"><span>客观题</span></router-link></a>
              <a class="dropdown-item"><router-link to="/subjective"><span>主观题</span></router-link></a>
              <a class="dropdown-item"><router-link to="/practice"><span>模拟考试</span></router-link></a>
            </div>
          </li>
          <li :class="['nav-item ', $route.name === 'interaction' ? 'active' : '']">
            <router-link class="nav-link" :to="{ name: 'interaction' }" >
              <span>师生互动</span>
            </router-link>
          </li>
          <li :class="['nav-item ', $route.name === 'homework' ? 'active' : '']">
            <router-link class="nav-link" :to="{ name: 'homework' }" >
              <span>作业提交</span>
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link " role="button" style="padding: 10px"
               :class="[
              'nav-item ',
              $route.name === 'courseware' ? 'active' : ''|
              $route.name === 'video' ? 'active' : ''|
              $route.name === 'outline' ? 'active' : ''
            ]"
               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              教学资源
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item"><router-link to="/courseware"><span>教学课件</span></router-link></a>
              <a class="dropdown-item"><router-link to="/video"><span>教学录像</span></router-link></a>
              <a class="dropdown-item"><router-link to="/outline"><span>教学大纲</span></router-link></a>
            </div>
          </li>
          <li class="nav-item " style="margin-left: 80px">
            <router-link to="/login" v-if="!isLogin">登录  |</router-link>
            <router-link to="/record" v-if="isLogin">我的学习 | </router-link>
          </li>
          <li class="nav-item ">
            <router-link to="/register" v-if="!isLogin">注册</router-link>
            <router-link to="/personal" v-if="isLogin">{{$store.getters.user.Info.sname}}</router-link>
          </li>
          <li>
            <router-link
              class="nav-link"
              :class="[
              'nav-item ',
              ['user', 'login'].indexOf($route.name) !== -1 ? 'active' : ''
            ]"
              :to="{ name: 'personal' }"
            >
              <img
                v-if="
                  $store.getters.user.Info.scover === undefined &&
                    $store.getters.user.Info.scover === ''
                "
                src="../../../assets/img/portrait.png"/>
              <img v-else :src="$addBaseURL($store.getters.user.Info.scover)" width="40px" height="40px" style="border-radius: 20px">
            </router-link>
          </li>
        </ul>
      </div>
      <!--导航内容End-->
    </nav>
  </div>
</template>

<script>
window.xssTest = {}

export default {
  name: 'Head',
  data () {
    return {
      text: '',
      xssTest: '',
      isLogin: true
    }
  },
  created () {
    const loadingPage = document.getElementById('Loading')
    if (loadingPage) {
      document.body.removeChild(loadingPage)
    }
  },
  mounted () {
    setInterval(() => {
      this.xssTest = window.xssTest
    }, 1000)
  },
  methods: {
  }
}
</script>

<style lang="scss">
  #Head {
    /** 下面的控制显示和隐藏 **/
    .dropdown .dropdown-menu
    {display: none;}
    .dropdown:hover .dropdown-menu
    {display: block;}
    width: 100%;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
    .nav-item {
      /*color: #2b2e2e;*/
      font-family: MicrosoftYaHei;
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 26px;
      letter-spacing: 1px;
      color: #333333;
    }
    .active{
      color: #1089f0;;
      font-weight: bold;
    }
    .nav-item {
      margin-left: 20px;
      a {
        color: #333333;
        span {
          line-height: 30px;
          text-decoration: none;
        }
      }
      .nav-link::after {
        display: block;
        content: "";
        height: 3px;
        float: left;
        width: 100%;
        background: #1089f0;
        opacity: 0;
        -webkit-transition: transform 0.2s ease-out, opacity 0.2s ease-out;
        transform-origin: 50% 0%;
        transform: scale(0.01, 1);
      }
    }
    .nav-item:hover {
      color: #3c3c3c;
      font-weight: bold;
      @media screen and (min-width: 576px) {
        a::after {
          transform: scale(1, 1);
          opacity: 1;
        }
      }
    }
    .nav-item:last-child:hover {
      ::after {
        transform: scale(0, 0);
        opacity: 0;
      }
    }
    .user {
      display: flex;
      align-items: center;
    }
  }
</style>
