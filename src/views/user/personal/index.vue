<template>
  <div>
    <div id="personal"  :style="`position: relative;height: 350px;
         background-size: cover;background: rgb(246, 249, 251) url('${$addBaseURL(imgSrc)}') no-repeat center;`">
      <div class="banner" style="padding-left: 21%">
        <div style="font-size: 38px;letter-spacing: 2px;color: #ffffff;padding-top: 6%">个人空间</div>
        <div style="font-size: 20px;letter-spacing: 2px;color: #ffffff;padding-top: 2%">PERSONAL SPACE</div>
        <div style="width: 120px;height: 2px;background-color: #ffffff;border-radius: 2px 0px 0px 0px;margin-top: 3%"></div>
      </div>
    </div>
    <div class="container text-center">
      <ul class="nav  mb-3 flex-column flex-sm-row justify-content-center" id="pills-tab" role="tablist">
        <li class="nav-item  text-sm-center" role="presentation">
          <a class="nav-link active"  data-toggle="pill" href="#pills-one" role="tab" aria-controls="pills-home" aria-selected="true">基本资料</a>
        </li>
        <li class="nav-item text-sm-center" role="presentation">
          <a class="nav-link"  data-toggle="pill" href="#pills-two" role="tab" aria-controls="pills-profile" aria-selected="false">我的头像</a>
        </li>
        <li class="nav-item  text-sm-center" role="presentation">
          <a class="nav-link"  data-toggle="pill" href="#pills-three" role="tab" aria-controls="pills-contact" aria-selected="false">密码管理</a>
        </li>
      </ul>
    </div>
    <div class="line" style="height: 1px;background-color: #dddddd;margin-top: 1%"></div>
    <div class="container">
      <div class="tab-content" id="pills-tabContent">
        <!--基本资料-->
        <div class="tab-pane fade show active" id="pills-one"  aria-labelledby="pills-profile-tab">
          <div class="container" style="margin-top: 8%;margin-bottom: 8%;margin-left: 25%">
            <form style="color: #333333;font-family: MicrosoftYaHei,sans-serif;">
              <div class="form-group row">
                <label for="inputName" class="col-sm-2 col-form-label">姓名：</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="inputName" placeholder="请输入姓名">
                </div>
              </div>
              <fieldset class="form-group">
                <div class="row" style="margin-top: 1%">
                  <legend class="col-form-label col-sm-2 pt-0">性别：</legend>
                  <div class="col-sm-4">
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"  checked>
                      <label class="form-check-label" for="gridRadios1">男</label>
                    </div>
                    <div class="form-check form-check-inline" style="margin-left: 6%">
                      <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                      <label class="form-check-label" for="gridRadios2">女</label>
                    </div>
                  </div>
                </div>
              </fieldset>
              <div class="form-group row">
                <label for="inputPhone" class="col-sm-2 col-form-label">手机号：</label>
                <div class="col-sm-4">
                  <input type="number" class="form-control" id="inputPhone" placeholder="请输入手机号">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputStudentID" class="col-sm-2 col-form-label">学号：</label>
                <div class="col-sm-4">
                  <input type="number" class="form-control" id="inputStudentID" placeholder="请输入学号">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputIntroduction" class="col-sm-2 col-form-label">个人介绍：</label>
                <div class="col-sm-4">
                  <textarea rows="4" class="form-control" id="inputIntroduction" placeholder="请输入个人介绍"></textarea>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-5 text-center" style="margin-top: 3%;margin-left: 2%">
                  <button type="submit" class="btn btn-primary" style="width: 100px;background-color: #1089f0;border-radius: 25px;">保存</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <!--我的头像-->
        <div class="tab-pane fade" id="pills-two" aria-labelledby="pills-contact-tab">
          <div class="container" style="margin-top: 8%;margin-bottom: 8%;margin-left: 10%">
            <span style="color: #333333;">头像:</span>
          </div>
        </div>
        <!--密码管理-->
        <div class="tab-pane fade" id="pills-three"  aria-labelledby="pills-contact-tab">
          <div class="container" style="margin-top: 6%;margin-bottom: 20%;margin-left: 25%">
            <form style="color: #333333;font-family: MicrosoftYaHei,sans-serif;">
              <div class="form-group row">
                <label for="inputOld" class="col-sm-2 col-form-label">旧密码：</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="inputOld" placeholder="请输入旧密码">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputNew" class="col-sm-2 col-form-label">新密码：</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="inputNew" placeholder="请输入新密码">
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-5 text-center" style="margin-top: 2%;margin-left: 2%">
                  <button type="submit" class="btn btn-primary" style="width: 110px;background-color: #1089f0;border-radius: 25px;">保存</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {imagesGetApi} from "../../../api/modules/images";

export default {
  name: 'personal',
  data () {
    return {
      imgSrc: ''
    }
  },
  mounted() {
    this.getImage();
  },
  methods: {
    getImage(){
      imagesGetApi({board:'21'}).then(result => {
        this.imgSrc = result.data.cover
        console.log(result.data.page)
        console.log(result.data.cover)
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
        }
        .active{
          color: #1089f0;
        }
      }
    }
  }
</style>
