<template>
  <div>
    <div style="display: inline-block;">
      <img :src="outsideSrc" />
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-success="handleAvatarSuccess"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
    </div>
    <div style="display: inline-block;">
      <img :src="insideSrc" />
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-success="handleAvatarSuccess2"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
    </div>
  </div>
</template>

<script>
import insideSrc from '@/assets/car/inside.png'
import outsideSrc from '@/assets/car/outside.png'

export default {
  data() {
    return {
      insideSrc,
      outsideSrc
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handleAvatarSuccess(response, file, fileList) {
      this.outsideSrc = file.url
      console.log(response, file, fileList)
    },
    handleAvatarSuccess2(response, file, fileList) {
      this.insideSrc = file.url
      console.log(response, file, fileList)
    }
  }
}
</script>

<style scoped>
img {
  height: 200px;
  width: 400px;
}
</style>