<!--用两张图片实现星星评分组件-->
<template>
  <div id="app" class="row">
    <div class="form-group clearfix">
      <div class="col-lg-12">
        <div class="grade-box" style="width: 400px">
          <img style="padding-bottom: 1%" v-for="(star,index) in stars" :key="index" v-bind:src="star.src" v-on:click="rating(index)" alt="星星图片" />
          <label class="align-items-center" style="padding-left: 4%;color: #f79618;">{{starNum}}.0分</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      starOnImg: require('../../assets/img/starOn.png'),
      starOffImg: require('../../assets/img/starOff.png'),
      stars: [{
        src: require('../../assets/img/starOff.png'),
        active: false
      }, {
        src: require('../../assets/img/starOff.png'),
        active: false
      }, {
        src: require('../../assets/img/starOff.png'),
        active: false
      }, {
        src: require('../../assets/img/starOff.png'),
        active: false
      }, {
        src: require('../../assets/img/starOff.png'),
        active: false
      }
      ],
      starNum: 0
    }
  },
  methods: {
    rating: function (index) {
      const total = this.stars.length
      const idx = index + 1
      if (this.starNum === 0) {
        this.starNum = idx
        for (let i = 0; i < idx; i++) {
          this.stars[i].src = this.starOnImg
          this.stars[i].active = true
        }
      } else {
        if (idx === this.starNum) {
          for (let i = index; i < total; i++) {
            this.stars[i].src = this.starOffImg
            this.stars[i].active = false
          }
        }
        if (idx < this.starNum) {
          for (let i = idx; i < this.starNum; i++) {
            this.stars[i].src = this.starOffImg
            this.stars[i].active = false
          }
        }
        if (idx > this.starNum) {
          for (let i = 0; i < idx; i++) {
            this.stars[i].src = this.starOnImg
            this.stars[i].active = true
          }
        }
        let count = 0
        for (let i = 0; i < total; i++) {
          if (this.stars[i].active) {
            count++
          }
        }
        this.starNum = count
      }
    }
  }
}
</script>

<style scoped>

</style>
