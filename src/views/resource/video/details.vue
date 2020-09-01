<template>
  <div id="resourceVideoDetails">

  </div>
</template>

<script>

import {imagesGetApi} from "../../../api/modules/images";

export default {
  name: 'resourceVideoDetails',
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
      imagesGetApi({board:'18'}).then(result => {
        this.imgSrc = result.data.cover
        console.log(result.data.page)
        console.log(result.data.cover)
      })
    }
  }
}
</script>

<style lang="scss">
#resourceVideoDetails{

}
</style>
