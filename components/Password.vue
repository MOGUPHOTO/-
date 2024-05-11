<template>
  <!-- e:/zy_zddx_top_ele/src/components/Password.vue -->
  <div>
    <el-button type="primary" @click="dialog = true" v-show="!dialog"
      >修改密码</el-button
    >

    <el-card style="width: 100%" v-if="dialog">
      <el-form :model="passWord" ref="passwordModify" @submit.native.prevent>
        <el-form-item
          label="*旧密码:"
          prop="oldPassword"
          style="width: max-content"
          :rules="[{ required: true, message: '旧密码不能为空' }]"
        >
          <el-input v-model="passWord.oldPassword" type="password"></el-input>
        </el-form-item>

        <el-form-item
          label="*新密码:"
          prop="newPassword"
          style="width: max-content"
          :rules="[
            { required: true, message: '新密码不能为空' },
            { min: 6, message: '新密码长度不能少于6位' },
          ]"
        >
          <el-input v-model="passWord.newPassword" type="password"></el-input>
        </el-form-item>

        <el-form-item
          label="*确认密码:"
          prop="confirmPassword"
          style="width: max-content"
          :rules="[
            { required: true, message: '确认密码不能为空' },
            { validator: validatePass, trigger: 'blur' },
          ]"
        >
          <el-input
            v-model="passWord.confirmPassword"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button type="primary" @click="cancelForm">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PasswordContent",
  data() {
    return {
      passWord: {
        route: "passwordSubmit",
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
      dialog: false,
    };
  },
  methods: {
    submitForm() {
      this.$refs.passwordModify.validate((valid) => {
        if (valid) {
          axios
            .post("/" + this.passWord.route, this.passWord)
            .then((response) => {
              if (response.data.code === 200) {
                this.$message({
                  message: "密码修改成功",
                  type: "success",
                });
                this.dialog = false;
              } else if (response.data.code === 400) {
                this.$message.error(response.data.message);
              }
            })
            .catch((error) => {
              this.$message.error(error);
            });
        } else {
          return false;
        }
      });
    },
    validatePass(rule, value, callback) {
      if (value !== this.passWord.newPassword) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    },
    cancelForm() {
      this.dialog = false;
    },
  },
};
</script>
