<template>
  <div id="interactionDetails">

  </div>
</template>

<script>

import {imagesGetApi} from "../../api/modules/images";

export default {
  name: 'interactionDetails',
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
      imagesGetApi({board:'15'}).then(result => {
        this.imgSrc = result.data.cover
        console.log(result.data.page)
        console.log(result.data.cover)
      })
    }
  }
}
</script>

<style lang="scss">
#interactionDetails{

}
</style>
