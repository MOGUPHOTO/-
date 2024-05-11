<template>
  <div name="personal">
    <!-- 个人信息 -->
    <div name="personalInfo" v-show="showFlag.personalInfo">
      <el-card style="width: 100%">
        <div slot="header">
          <span>个人信息</span>
          <el-button
            style="float: right; padding: 3px 0"
            type="text"
            @click="userInfoSet"
            >修改个人信息
          </el-button>
        </div>
        <div>
          <el-descriptions>
            <el-descriptions-item label="姓名">{{
              UserInfo[0].UserName
            }}</el-descriptions-item>
            <el-descriptions-item label="性别">{{
              UserInfo[0].UserGender
            }}</el-descriptions-item>
            <el-descriptions-item label="选科">{{
              UserInfo[0].Userclass
            }}</el-descriptions-item>
            <el-descriptions-item label="手机号"
              >{{ UserInfo[0].phone }}
            </el-descriptions-item>
            <el-descriptions-item label="期望地区"
              >{{ UserInfo[0].Userarea_01 +"、"+ UserInfo[0].Userarea_02 +"、"+ UserInfo[0].Userarea_03 }}
            </el-descriptions-item>
            <el-descriptions-item label="期望专业"
              >{{ UserInfo[0].desired_major_01 +"、"+ UserInfo[0].desired_major_02 +"、"+ UserInfo[0].desired_major_03 }}
            </el-descriptions-item>
            <el-descriptions-item label="期望院校"
            >{{ UserInfo[0].desired_universities_01 +"、"+ UserInfo[0].desired_universities_02 +"、"+ UserInfo[0].desired_universities_03 }}
          </el-descriptions-item>
          <el-descriptions-item label="MBTI测试结果"
          >{{ UserInfo[0].MBTI }}
        </el-descriptions-item>
        <el-descriptions-item label="职业锚测试结果"
        >{{ UserInfo[0].Plan }}
      </el-descriptions-item>
          </el-descriptions>
        </div>
      </el-card>
      <br />
      <!-- 高考成绩展示 -->
      <el-card style="width: 100%">
        <div slot="header">
          <span>高考成绩</span>
        </div>

        <el-table :data="UserInfo">
          <el-table-column prop="grade_ch" label="语文成绩"></el-table-column>
          <el-table-column prop="grade_ma" label="数学成绩"></el-table-column>
          <el-table-column prop="grade_en" label="外语成绩"></el-table-column>
          <el-table-column prop="grade_comp" label="综合成绩"></el-table-column>
          <el-table-column prop="grade_total" label="总成绩"></el-table-column>
          <el-table-column prop="UserRanking" label="排名"></el-table-column>
        </el-table>
      </el-card>
    </div>
    <br />
    <!-- 高考志愿推荐 -->
    <div name="Reporting" v-show="showFlag.ReportingResult">
      <el-card style="width: 100%">
        <div slot="header"><span>志愿推荐</span></div>

        <el-table :data="ReportingResult">
          <el-table-column prop="col_id" label="学校代码"></el-table-column>
          <el-table-column prop="col_name" label="学校名称"></el-table-column>
          <el-table-column prop="MajorID" label="专业代码"></el-table-column>
          <el-table-column prop="MajorName" label="专业名称"></el-table-column>
          <el-table-column
            prop="MajorRanking"
            label="专业排名"
          ></el-table-column>
          <el-table-column
            prop="col_province"
            label="所在地区"
          ></el-table-column>
          <el-table-column prop="col_city" label="所在城市"></el-table-column>
          <el-table-column prop="col_type" label="学校类型"></el-table-column>
          <el-table-column prop="col_batch" label="批次"></el-table-column>
          <el-table-column
            prop="col_is_public"
            label="是否公办"
          ></el-table-column>
          <el-table-column prop="col_is_958" label="是否985"></el-table-column>
          <el-table-column prop="col_is_211" label="是否211"></el-table-column>
          <el-table-column
            prop="Majortype"
            label="双一流层次"
          ></el-table-column>
          <el-table-column prop="totalNum" label="录取人数"></el-table-column>
          <el-table-column
            prop="probability"
            label="录取概率"
          ></el-table-column>
        </el-table>
      </el-card>
    </div>

    <div name="UserInfoSet" v-show="showFlag.UserInfoSet">
      <el-card style="width: 100%">
        <div slot="header">
          <span>个人信息设置</span>
        </div>
        <el-form :model="UserInfoSet" ref="UserInfoSet" @submit.native.prevent>
          <el-form-item
            label="*姓名:"
            prop=" UserName"
            style="width: max-content"
          >
            <el-input v-model="UserInfoSet.UserName"></el-input>
          </el-form-item>

          <el-form-item
            label="*性别:"
            prop="UserGender"
            style="width: max-content"
          >
            <el-select
              v-model="UserInfoSet.UserGender"
              placeholder="请选择性别"
            >
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item
            label="*科别:"
            prop="Userclass"
            style="width: max-content"
          >
            <el-select v-model="UserInfoSet.Userclass" placeholder="请选择科别">
              <el-option label="理科" value="理科"></el-option>
              <el-option label="文科" value="文科"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitFormUserInfoSet"
              >提交</el-button
            >
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PersonalContent",
  data() {
    return {
      UserInfo: [
        {
          UserName: "111",
          UserGender: "",
          Userclass: "",
          phone: "",
          Userarea_01: "",
          Userarea_02: "",
          Userarea_03: "",
          desired_major_01: "",
          desired_major_02: "",
          desired_major_03: "",
          desired_universities_01: "0",
          desired_universities_02: "0",
          desired_universities_03: "",
          grade_ch: 0,
          grade_ma: 0,
          grade_en: 0,
          grade_comp: 0,
          grade_total: 0,
          UserRanking: 0,
          MBTI: "",
          Plan: "",
        },
      ],
      UserInfoSet: {
        route: "userInfoSubmit",
        UserName: "",
        UserGender: "",
        Userclass: "",
      },
      ReportingResult: [
        {
          col_id: "",
          col_name: "",
          MajorID: "",
          MajorName: "",
          MajorRanking: "",
          col_province: "",
          col_city: "",
          col_type: "",
          col_batch: "",
          col_is_public: "",
          col_is_985: "",
          col_is_211: "",
          Majortype: "",
          totalNum: "",
          probability: "",
        },
      ],

      showFlag: {
        personalInfo: true,
        ReportingResult: true,
        UserInfoSet: false,
      },
    };
  },

  methods: {
    mounted() {
      axios
        .post("/", { route: "userInfoGet" })
        .then((res) => {
          this.UserInfo = res.data.UserInfo;
          this.ReportingResult = res.data.ReportingResult;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    userInfoSet() {
      this.showFlag.ReportingResult = false;
      this.showFlag.personalInfo = false;
      this.showFlag.UserInfoSet = true;
    },
    submitFormUserInfoSet() {
      axios
        .post("/", this.UserInfoSet)
        .then((res) => {
          this.UserInfo = res.data.UserInfo;
          this.ReportingResult = res.data.ReportingResult;
        })
        .catch((error) => {
          console.error(error);
        });
      this.showFlag.UserInfoSet = false;
      this.showFlag.personalInfo = true;
      this.showFlag.ReportingResult = true;
    },
  },
};
</script>
