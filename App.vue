<template>
  <div id="app">
    <el-container>
      <el-header style="z-index: 999">
        <!-- 这里放置你的头部内容 -->
        <a href="/"
          ><img src="./assets/images/icon/mg_icon.png" alt="陌鼓志愿填报"
        /></a>
      </el-header>

      <el-container>
        <el-aside width="220px">
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group>
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            @select="handleMenuSelect"
          >
            <el-menu-item index="1" name="liindex">
              <i class="el-icon-s-home"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="2" name="licollege">
              <i class="el-icon-reading"></i>
              <span slot="title">院校概览</span>
            </el-menu-item>
            <el-menu-item index="3" name="limajor">
              <i class="el-icon-aim"></i>
              <span slot="title">专业概览</span>
            </el-menu-item>
            <el-menu-item index="4" name="lihot">
              <i class="el-icon-document"></i>
              <span slot="title">热门专业</span>
            </el-menu-item>
            <el-menu-item index="5" name="limbti">
              <i class="el-icon-s-claim"></i>
              <span slot="title">MBTI测试</span>
            </el-menu-item>
            <el-menu-item index="6" name="liplan">
              <i class="el-icon-s-claim"></i>
              <span slot="title">职业锚测试</span>
            </el-menu-item>
            <el-menu-item index="7" name="lireporting">
              <i class="el-icon-postcard"></i>
              <span slot="title">志愿填报</span>
            </el-menu-item>
            <el-submenu index="8" name="linews">
              <template slot="title">
                <i class="el-icon-postcard"></i>
                <span slot="title">新闻|政策</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="8-1">新闻</el-menu-item>
                <el-menu-item index="8-2">政策</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="9" name="licalculate">
              <i class="el-icon-coffee-cup"></i>
              <span slot="title">自助计算</span>
            </el-menu-item>

            <el-submenu index="10" name="lipersonal">
              <template slot="title">
                <i class="el-icon-s-custom"></i>
                <span slot="title">个人中心</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="10-1">个人信息</el-menu-item>
                <el-menu-item index="10-2">修改密码</el-menu-item>
                <el-menu-item index="10-3">退出登录</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-menu-item index="11" name="linotice">
              <i class="el-icon-message"></i>
              <span slot="title">系统通知</span>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <el-main>
          <div id="college" v-show="showFlag.college">
            <College />
          </div>
          <div id="swiper" v-show="showFlag.swiper">
            <SwipperImg />
          </div>
          <div id="uerinfoget"></div>
          <div id="major" v-show="showFlag.major">
            <Major />
          </div>
          <div id="hot" v-show="showFlag.hot">
            <Hot />
          </div>
          <div id="mbti" v-show="showFlag.mbti">
            <MBTI />
          </div>
          <div id="plan" v-show="showFlag.plan">
            <Plan />
          </div>
          <div id="reporting" v-show="showFlag.reporting">
            <Reporting />
          </div>
          <div id="news" v-show="showFlag.news">
            <News />
          </div>
          <div id="calculate" v-show="showFlag.calculate">
            <Calculate />
          </div>
          <div id="personal" v-show="showFlag.personal">
            <Personal />
          </div>
          <div id="notice" v-show="showFlag.notice">
            <Notice />
          </div>
          <div id="password" v-show="showFlag.password">
            <passwordModify />
          </div>
        </el-main>
      </el-container>
    </el-container>
    <br />
    <br />
    <el-footer style="text-align: center">
      <p name="copyright">
        Copyright © 2024. All Rights Reserved. 陌鼓志愿填报
      </p>
      <a href="https://beian.miit.gov.cn/" target="_blank"
        >宁ICP备2023000139号-2</a
      >
    </el-footer>
  </div>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<script>
export default {
  name: "App",
  components: {
    College: () => import("./components/College.vue"),
    SwipperImg: () => import("./components/SwipperImg.vue"),
    Major: () => import("./components/Major.vue"),
    Hot: () => import("./components/Hot.vue"),
    MBTI: () => import("./components/Mbti.vue"),
    Plan: () => import("./components/Plan.vue"),
    News: () => import('./components/News.vue'),
    Calculate: () => import("./components/Calculate.vue"),
    Personal: () => import("./components/Personal.vue"),
    Notice: () => import('./components/Notice.vue'),
    // Uerinfoget: () => import('./components/Uerinfoget.vue'),
    Reporting: () => import("./components/Reporting.vue"),
    passwordModify: () => import("./components/Password.vue"),
  },
  data() {
    return {
      isCollapse: false,
      showFlag: {
        swiper: true,
        college: false,
        major: false,
        hot: false,
        mbti: false,
        plan: false,
        reporting: false,
        news: false,
        calculate: false,
        personal: false,
        notice: false,
        uerinfoget: false,
        password: false,
      },
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 侧边栏 菜单
    handleMenuSelect(index) {
      if (index === "1") {
        this.showFlag.swiper = true;
        this.showFlag.college = false;
        this.showFlag.major = false;
        this.showFlag.hot = false;
        this.showFlag.mbti = false;
        this.showFlag.plan = false;
        this.showFlag.news = false;
        this.showFlag.calculate = false;
        this.showFlag.personal = false;
        this.showFlag.notice = false;
        this.showFlag.uerinfoget = false;
        this.showFlag.password = false;
        this.showFlag.reporting = false;
      } else if (index === "2") {
        this.showFlag.swiper = false;
        this.showFlag.college = true;
        this.showFlag.major = false;
        this.showFlag.hot = false;
        this.showFlag.mbti = false;
        this.showFlag.plan = false;
        this.showFlag.news = false;
        this.showFlag.calculate = false;
        this.showFlag.personal = false;
        this.showFlag.notice = false;
        this.showFlag.uerinfoget = false;
        this.showFlag.password = false;
        this.showFlag.reporting = false;
      } else if (index === "3") {
        this.showFlag.swiper = false;
        this.showFlag.college = false;
        this.showFlag.major = true;
        this.showFlag.hot = false;
        this.showFlag.mbti = false;
        this.showFlag.plan = false;
        this.showFlag.news = false;
        this.showFlag.calculate = false;
        this.showFlag.personal = false;
        this.showFlag.notice = false;
        this.showFlag.uerinfoget = false;
        this.showFlag.password = false;
        this.showFlag.reporting = false;
      } else if (index === "4") {
        this.showFlag.swiper = false;
        this.showFlag.college = false;
        this.showFlag.major = false;
        this.showFlag.hot = true;
        this.showFlag.mbti = false;
        this.showFlag.plan = false;
        this.showFlag.news = false;
        this.showFlag.calculate = false;
        this.showFlag.personal = false;
        this.showFlag.notice = false;
        this.showFlag.uerinfoget = false;
        this.showFlag.password = false;
        this.showFlag.reporting = false;
      } else if (index === "5") {
        this.showFlag.swiper = false;
        this.showFlag.college = false;
        this.showFlag.major = false;
        this.showFlag.hot = false;
        this.showFlag.mbti = true;
        this.showFlag.plan = false;
        this.showFlag.news = false;
        this.showFlag.calculate = false;
        this.showFlag.personal = false;
        this.showFlag.notice = false;
        this.showFlag.uerinfoget = false;
        this.showFlag.password = false;
        this.showFlag.reporting = false;
      } else if (index === "6") {
        this.showFlag.swiper = false;
        this.showFlag.college = false;
        this.showFlag.major = false;
        this.showFlag.hot = false;
        this.showFlag.mbti = false;
        this.showFlag.plan = true;
        this.showFlag.news = false;
        this.showFlag.calculate = false;
        this.showFlag.personal = false;
        this.showFlag.notice = false;
        this.showFlag.uerinfoget = false;
        this.showFlag.password = false;
        this.showFlag.reporting = false;
      } else if (index === "7") {
        this.showFlag.swiper = false;
        this.showFlag.college = false;
        this.showFlag.major = false;
        this.showFlag.hot = false;
        this.showFlag.mbti = false;
        this.showFlag.plan = false;
        this.showFlag.news = false;
        this.showFlag.calculate = false;
        this.showFlag.personal = false;
        this.showFlag.notice = false;
        this.showFlag.uerinfoget = false;
        this.showFlag.password = false;
        this.showFlag.reporting = true;
      } else if (index === "8-1") {
        this.showFlag.swiper = false;
        this.showFlag.college = false;
        this.showFlag.major = false;
        this.showFlag.hot = false;
        this.showFlag.mbti = false;
        this.showFlag.plan = false;
        this.showFlag.news = true;
        this.showFlag.calculate = false;
        this.showFlag.personal = false;
        this.showFlag.notice = false;
        this.showFlag.uerinfoget = false;
        this.showFlag.password = false;
        this.showFlag.reporting = false;
      } else if (index === "8-2") {
        this.showFlag.swiper = false;
        this.showFlag.college = false;
        this.showFlag.major = false;
        this.showFlag.hot = false;
        this.showFlag.mbti = false;
        this.showFlag.plan = false;
        this.showFlag.news = true;
        this.showFlag.calculate = false;
        this.showFlag.personal = false;
        this.showFlag.notice = false;
        this.showFlag.uerinfoget = false;
        this.showFlag.password = false;
        this.showFlag.reporting = false;
      } else if (index === "9") {
        this.showFlag.swiper = false;
        this.showFlag.college = false;
        this.showFlag.major = false;
        this.showFlag.hot = false;
        this.showFlag.mbti = false;
        this.showFlag.plan = false;
        this.showFlag.news = false;
        this.showFlag.calculate = true;
        this.showFlag.personal = false;
        this.showFlag.notice = false;
        this.showFlag.uerinfoget = false;
        this.showFlag.password = false;
        this.showFlag.reporting = false;
      } else if (index === "10-1") {
        this.showFlag.swiper = false;
        this.showFlag.college = false;
        this.showFlag.major = false;
        this.showFlag.hot = false;
        this.showFlag.mbti = false;
        this.showFlag.plan = false;
        this.showFlag.news = false;
        this.showFlag.calculate = false;
        this.showFlag.personal = true;
        this.showFlag.notice = false;
        this.showFlag.uerinfoget = false;
        this.showFlag.password = false;
        this.showFlag.reporting = false;
      } else if (index === "10-2") {
        this.showFlag.swiper = false;
        this.showFlag.college = false;
        this.showFlag.major = false;
        this.showFlag.hot = false;
        this.showFlag.mbti = false;
        this.showFlag.plan = false;
        this.showFlag.news = false;
        this.showFlag.calculate = false;
        this.showFlag.personal = false;
        this.showFlag.notice = false;
        this.showFlag.uerinfoget = false;
        this.showFlag.password = true;
        this.showFlag.reporting = false;
      } else if (index === "10-3") {
        window.location.href = "/login";
      } else if (index === "11") {
        this.showFlag.swiper = false;
        this.showFlag.college = false;
        this.showFlag.major = false;
        this.showFlag.hot = false;
        this.showFlag.mbti = false;
        this.showFlag.plan = false;
        this.showFlag.news = false;
        this.showFlag.calculate = false;
        this.showFlag.personal = false;
        this.showFlag.notice = true;
        this.showFlag.uerinfoget = false;
        this.showFlag.password = false;
        this.showFlag.reporting = false;
      }
    },
  },
};
</script>
