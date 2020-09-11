<template>
  <div>
    <div id="resourceVideoDetails"
           :style="`background-image: url('${$addBaseURL(imgSrc)}');position: relative ;width: 100%;height:350px;background-repeat: no-repeat;background-position: 0px 0px;background-size:cover;`"
      >
        <div class="banner" style="padding-left: 21%">
          <div style="font-size: 38px;letter-spacing: 2px;color: #ffffff;padding-top: 6%">教学录像</div>
          <div style="font-size: 20px;letter-spacing: 2px;color: #ffffff;padding-top: 2%">TEACHING VIDEO</div>
          <div style="width: 120px;height: 2px;background-color: #ffffff;border-radius: 2px 0px 0px 0px;margin-top: 3%"></div>
        </div>
      </div>
    <div style="margin: 2% 0 5%">
      <router-link to="/video" style="color: #9a9a9a;margin-left: 15%;">< 返回</router-link></div>
    <div style="text-align: center;font-size: 22px;padding-bottom: 5%">{{this.$route.query.name}}</div>
    <div style="text-align: left;margin-left: 15%;margin-bottom: 2%">
      <div v-if="this.$route.query.type === 1" style="display: flex;align-items: center">
        <img  src="../../../assets/img/taskOn.png" style="width: 18px;text-align: left;width: 70%"/>
        <span style="color: #666666;margin-left: 1%">视频任务已完成</span>
      </div>
      <div v-if="this.$route.query.type === 0" style="display: flex;align-items: center">
        <img  src="../../../assets/img/task.png" style="width: 18px"/>
        <span style="color: #666666;margin-left: 1%">视频任务未完成</span>
      </div>
    </div>
    <div style="text-align: center;padding-bottom: 6%">
      <video :src="videoUrl" width="70%" controls ></video>
    </div>
<!--    <div>-->
<!--      <video-player  class="video-player vjs-custom-skin"-->
<!--                     ref="videoPlayer"-->
<!--                     :playsinline="true"-->
<!--                     :options="playerOptions"-->
<!--      ></video-player>-->
<!--    </div>-->
  </div>
</template>

<script>
import {imagesGetApi} from "../../../api/modules/images";
import {statusPostApi} from "@/api/modules/stuVideo";

export default {
  name: 'resourceVideoDetails',
  data () {
    return {
      imgSrc: '',
      videoUrl:'',
      data() {
        return {
          id: 0,
          userId: 1,
          courseId: 1,
          playTime: '0',
          sectionId: 1,
          paused: true,
          playerOptions: {
            playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
            autoplay: false, // 如果true,浏览器准备好时开始回放。
            muted: false, // 默认情况下将会消除任何音频。
            loop: false, // 导致视频一结束就重新开始。
            preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
            language: 'zh-CN',
            aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            fluid: false, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            sources: [{
              // src: '../../static/video/test.mp4', // 路径
              src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
              // type: 'video/mp4' // 类型
            }],
            poster: '', // 你的封面地址
            // width: document.documentElement.clientWidth,
            notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
            controlBar: {
              timeDivider: true,
              durationDisplay: true,
              remainingTimeDisplay: false,
              fullscreenToggle: true // 全屏按钮
            }
          }
        }
      },
    }
  },
  mounted() {
    this.getImage();
    this.videoUrl = this.$route.query.url
    this.player()
  },
  methods: {
    getImage(){
      imagesGetApi({board:'18'}).then(result => {
        this.imgSrc = result.data.cover
      })
    },
    player(){
      const params = {
        type: true,
        vId:  this.$route.query.id
      }
      statusPostApi(params).then(result => {
        console.log(result)
      })
    },
    //监听播放状态改变
    playerStateChanged (player) {
      // console.log(player);
    },
    //监听媒体是否已到达结尾，播放完

    //DOM元素上的readyState更改导致播放停止。
    onPlayerWaiting (player) {
      // console.log(player);
    },
    //媒体不再被禁止播放，并且已开始播放。
    onPlayerPlaying (player) {
      // console.log(player);
    },
    //当播放器在当前播放位置下载数据时触发
    onPlayerLoadeddata (player) {
      // console.log(player);
    },
    //当前播放位置发生变化时触发。
    onPlayerTimeupdate (player) {
      this.playTime= player.cache_.currentTime

      // console.log(player);
    },
    //媒体的readyState为HAVE_FUTURE_DATA或更高
    onPlayerCanplay(player) {
      // console.log('player Canplay!', player)
    },
    //媒体的readyState为HAVE_ENOUGH_DATA或更高。这意味着可以在不缓冲的情况下播放整个媒体文件。
    onPlayerCanplaythrough(player) {
      // console.log('player Canplaythrough!', player)
    },
    //将侦听器绑定到组件的就绪状态。与事件监听器的不同之处在于，如果ready事件已经发生，它将立即触发该函数。。
    playerReadied(player) {
      // seek to 10s
      console.log('example player 1 readied', player);
      // player.currentTime(0)
      // console.log('example 01: the player is readied', player)
    }
    ,onPlayerPlay (player) {
      this.paused = false
      // console.log('onPlayerPlay!', player)
    },
    onPlayerPause (player) {
      this.paused = true
      // console.log('onPlayerPause!', player)
    },
    onPlayerEnded (player) {
      this.paused = false
      console.log('player ended!', player)
    }
  }
}
</script>

<style lang="scss">
#resourceVideoDetails{

}
</style>
