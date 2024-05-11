<template>
  <div >
    <el-carousel :interval="5000" arrow="always" height="80vh" width="80vw">
      <el-carousel-item v-for="(image, index) in images" :key="index">
        <img :src="require(`@/assets/images/college/${image}`)" alt="College Image" class="carousel-image">
      </el-carousel-item>
    </el-carousel>
  </div>
  </template>
  
  <script>
  export default {
    name: 'SwipperImg',
    data() {
      return {
        images: [	"2.png",	"1.png","3.png",	"4.png",	"5.png",	"6.png",	"7.png",	"8.png",	"9.png",	"10.png",	"11.png",	"12.png",	"13.png",	"14.png",	"15.png",	"16.png",	"17.png",	"18.png",	"19.png",	"20.png",	"21.png",	"22.png",	"23.png",	"24.png",	"25.png",	"26.png",	"27.png",	"28.png",	"29.png",	"30.png",	"31.png",
]
      };
    }
  };
  </script>
  
  <style>
.carousel-container{
  width: auto;
  height: 80vh;
}
.carousel-image{
  max-width: 100%; /* 图片最大宽度为容器宽度 */
  max-height: 100%; /* 图片最大高度为容器高度 */
  object-fit: contain; /* 图片填充方式，保持宽高比并尽可能填充 */
}
</style>