<template>
  <div>
    <div id="resourceOutline"  :style="`position: relative;height: 350px;background: rgb(246, 249, 251)
         url('')
         no-repeat center;`">
      <div class="banner" style="padding-left: 21%">
        <div style="font-size: 38px;letter-spacing: 2px;color: #ffffff;padding-top: 6%">教学大纲</div>
        <div style="font-size: 20px;letter-spacing: 2px;color: #ffffff;padding-top: 2%">TEACHING PROGRAM</div>
        <div style="width: 120px;height: 2px;background-color: #ffffff;border-radius: 2px 0px 0px 0px;margin-top: 3%"></div>
      </div>
    </div>
    <!--tab栏-->
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
        <div class="tab-pane fade show active" id="pills-one"  aria-labelledby="pills-profile-tab">1</div>
        <div class="tab-pane fade" id="pills-two" aria-labelledby="pills-contact-tab">2</div>
        <div class="tab-pane fade" id="pills-three"  aria-labelledby="pills-contact-tab">3</div>
        <div class="tab-pane fade" id="pills-four" aria-labelledby="pills-contact-tab">4</div>
        <div class="tab-pane fade" id="pills-five"  aria-labelledby="pills-contact-tab">5</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'resourceOutline'
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
