<template>
    <div name="passwordModify">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="旧密码">
                <el-input v-model="form.oldPassword" show-password></el-input>
            </el-form-item>
            <el-form-item label="新密码">
                <el-input v-model="form.newPassword" show-password></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
                <el-input v-model="form.confirmPassword" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm">提交</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
export default {
    name: 'PasswordContent',
    data() {
        return {
            form: {
                oldPassword: '',
                newPassword: '',
                confirmPassword: ''
            }
        }
    },
    methods: {
        submitForm() {
            if (this.form.newPassword != this.form.confirmPassword) {
                this.$message.error('两次密码输入不一致')
                return
            }
            this.$axios({
                method: 'post',
                url: '/',
                data: this.form 
            }).then((res) => {
                if (res.data == 1) {
                    this.$message.success('修改成功')
                } else {
                    this.$message.error('修改失败')
                }
            })
        }
    }
}