<template>
    <el-menu default-active="1" class="el-menu-vertical-demo">
      <el-menu-item index="1" @click="goTo('/')">首页</el-menu-item>
      <el-menu-item index="2" @click="goTo('/about')">院校概览</el-menu-item>
    </el-menu>
  </template>
  
  <script>
  export default {
    name:"SidebarContainer",
    methods: {
      goTo(route) {
        this.$router.push(route);
      }
    }
  }
  </script>
  