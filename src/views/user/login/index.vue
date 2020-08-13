<template>
  <div id="login" class="text-center">
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
              <input type="text" class="form-control" id="StudentID" placeholder="请输入您的学号">
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">密码</label>
            <div class="col-sm-9">
              <input type="password" class="form-control" id="inputPassword" placeholder="请输入您的密码">
            </div>
          </div>
          <div class="text-right col-sm-12" >
            <a href="/password" style="color: #999999;letter-spacing: 2px;">忘记密码？</a>
          </div>
        </form>
        <div class="twoButton">
          <input class="btn btn-primary" type="submit" value="登录" style="width: 300px;height: 40px;border-radius: 40px;margin-top: 5%"><br/>
          <a class="btn btn-outline-primary" href="register" role="button" style="width: 300px;height: 40px;border-radius: 40px;margin-top: 5%">注册</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
    body {
      width:100%;
      height:100%;
      background:url("../../../assets/img/login/back.png") no-repeat;
      background-position: center center;
      background-attachment: fixed;
      background-size: cover;
    }
</style>
