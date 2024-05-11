<template>
  <div>
    <el-form name="userInfoGet" :model="userInfoGet" :rules="UserFormRules" ref="userInfoGet"
      @submit.prevent="submitForm('userInfoGet')">

      <el-form-item label="姓名" prop=" UserName">
        <el-input v-model="userInfoGet.UserName" :rules="UserFormRules.UserName"></el-input>
      </el-form-item>

      <el-form-item label="性别" prop="UserGender">
        <el-select v-model="userInfoGet.UserGender" placeholder="请选择性别">
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="科别" prop="Userclass">
        <el-select v-model="userInfoGet.Userclass" placeholder="请选择科别">
          <el-option label="理科" value="理科"></el-option>
          <el-option label="文科" value="文科"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="手机号" prop=" phone">
        <el-input v-model="userInfoGet.phone" :rules="UserFormRules.phone"></el-input>
      </el-form-item>

      <el-form-item label="语文成绩" prop=" grade_ch" :rules="UserFormRules.grade_ch">
        <el-input v-model.number="userInfoGet.grade_ch"></el-input>
      </el-form-item>

      <el-form-item label="数学成绩" prop=" grade_ma" :rules="UserFormRules.grade_ma">
        <el-input v-model.number="userInfoGet.grade_ma"></el-input>
      </el-form-item>

      <el-form-item label="外语成绩" prop=" grade_en" :rules="UserFormRules.grade_en">
        <el-input v-model.number="userInfoGet.grade_en"></el-input>

      </el-form-item>

      <el-form-item label="综合成绩" prop=" grade_comp" :rules="UserFormRules.grade_comp">
        <el-input v-model.number="userInfoGet.grade_comp"></el-input>
      </el-form-item>

      <el-form-item label="总成绩" prop=" grade_total" :rules="UserFormRules.grade_total">
        <el-input v-model.lazy="userInfoGet.grade_total"></el-input>
      </el-form-item>

      <el-form-item label="排名" prop=" UserRanking" :rules="UserFormRules.UserRanking">
        <el-input v-model="userInfoGet.UserRanking"></el-input>
      </el-form-item>

      <!-- 期望城市 -->
      <SearchCity keyIdentifier="Userarea_01" @selectedItem="handleData" />
      <SearchCity keyIdentifier="Userarea_02" @selectedItem="handleData" />
      <SearchCity keyIdentifier="Userarea_03" @selectedItem="handleData" />
      <!-- 期望专业 -->
      <SearchMajor keyIdentifier="desired_major_01" @selectedItem="handleData" />
      <SearchMajor keyIdentifier="desired_major_02" @selectedItem="handleData" />
      <SearchMajor keyIdentifier="desired_major_03" @selectedItem="handleData" />
      <!-- 期望学校 -->
      <SearchUniverty keyIdentifier="desired_universities_01" @selectedItem="handleData" />
      <SearchUniverty keyIdentifier="desired_universities_02" @selectedItem="handleData" />
      <SearchUniverty keyIdentifier="desired_universities_03" @selectedItem="handleData" />

      <el-form-item>
        <el-button type="primary" @click="submitForm('userInfoGet')">提交</el-button>
        <el-button @click="resetForm('userInfoGet')">重置</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
// 引入子组件

import SearchCity from './SearchCity.vue';
import SearchMajor from './SearchMajor.vue';
import SearchUniverty from './SearchUniverty.vue';
import { UserFormRules } from '@/rules/validationRules';
import SearchCity from './SearchCity.vue';



export default {
  name: 'useInfoGet',
  code: 1,
  // 组件
  components: {
    SearchName,
  },

  // 数据
  data() {
    return {
      userInfoGet: {
        route: 'userInfoSubmit',
        UserName: "",
        UserGender: "",
        Userclass: "",
        phone: "",
        Userarea_01: "",
        Userarea_02: "",
        Userarea_03: "",
        desired_major_01: "",
        desired_major_02: "",
        desired_major_03: "",
        desired_universities_01: "",
        desired_universities_02: "",
        desired_universities_03: "",
        grade_ch: 0,
        grade_ma: 0,
        grade_en: 0,
        grade_comp: 0,
        grade_total: 0,
        UserRanking: 0,
      },

      // 表单验证
      rules: {
        UserFormRules
      },

      searchQuery: '',
    };
  },

  // 方法
  methods: {
    handleData(item) {
      const key = item.key;
      const dataValue = item.data;

      this.userInfoGet.key = dataValue;
    },

    submitForm(formName) {
      this.resetForm('userInfoGet');

      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.userInfoGet.route = 'userInfoSubmit';
          axiosService.post('/', this.userInfoGet)
            .then(res => {
              if (response.data.code === 200) {
                this.code = 1;
                alert('提交成功！');
              } else {
                this.code = 0;
                alert('提交失败！');
              }
            })
            .catch(error => {
              alert('网络错误！');
            });
        } else {
          // 如果表单验证未通过，给出提示
          alert('请检查表单填写是否正确！');
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  }
}
</script>