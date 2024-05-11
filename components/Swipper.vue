<template>
    <el-carousel :interval="4000" arrow="always">
      <el-carousel-item v-for="(image, index) in images" :key="index">
        <img :src="require(`@/assets/images/college/${image}`)" alt="College Image">
      </el-carousel-item>
    </el-carousel>
  </template>
  
  <script>
  export default {
    name: 'Swipper',
    data() {
      return {
        images: ["1.png",	"2.png",	"3.png",	"4.png",	"5.png",	"6.png",	"7.png",	"8.png",	"9.png",	"10.png",	"11.png",	"12.png",	"13.png",	"14.png",	"15.png",	"16.png",	"17.png",	"18.png",	"19.png",	"20.png",	"21.png",	"22.png",	"23.png",	"24.png",	"25.png",	"26.png",	"27.png",	"28.png",	"29.png",	"30.png",	"31.png",
]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add custom styles here if needed */
  </style>
  