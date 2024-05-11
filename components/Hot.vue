<template>
  <el-row>
    <el-col
      :span="5"
      v-for="(major, index) in hotMajor"
      :key="index"
      :offset="index > 0 ? 1 : 0"
    >
      <el-card :body-style="{ padding: '0px' }" shadow="hover">
        <img :src="major.url" class="image" />
        <div style="padding: 14px">
          <p>专业名称：{{ major.majorName }}</p>
          <p>专业代码：{{ major.majorCode }}</p>
          <div class="bottom clearfix">
            <time class="time">{{ formatTime(currentDate) }}</time>
            <el-button type="text" class="button" @click="showDetail(major)"
              >详细信息</el-button
            >
          </div>
        </div>
      </el-card>
      <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
        <span>我来啦!</span>
      </el-drawer>
    </el-col>
  </el-row>
</template>

<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
<script>
export default {
  name: "HotContent",
  data() {
    return {
      hotMajor: [
        {
          majorName: "计算机科学与技术", //专业名称
          majorCode: "1111", //专业代码
          majorType: "理科", //专业类别
          url: "https://b0.bdstatic.com/f898922a567b019ce91a2349c55ab2d8.jpg@h_1280",
          detail: "",
        },
      ],
      currentDate: new Date(),
      drawer: false,
    };
  },
  methods: {
    formatTime(time) {
      // 格式化时间方法
      return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`;
    },

    // 重载数据
    reload() {
      this.currentDate = new Date();
    },
  },
};
</script>
