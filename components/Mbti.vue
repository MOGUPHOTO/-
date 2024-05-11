<template>
    <div>
        <div name="mbti" v-show="showflag.mbti">
            <h2>欢迎使用陌鼓志愿填报</h2>
            <h3>MBTI测试</h3>
            <el-form v-model="form"  ref="mbtiForm" style="display: block; width: 100%; align-items: left;">
                <el-form-item v-for="(question, index) in mbtiQuestions" :key="index" :label="question.question" style="text-align: left;">
                    <br>
                    <el-radio-group v-model="form.answers[index].answer">
                        <el-radio v-for="(option, optionIndex) in question.options" :key="optionIndex"
                            :label="optionIndex">{{ option }}</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm">提交</el-button>
                </el-form-item>

            </el-form>
        </div>
        <div name="mbtiResult" v-show="showflag.mbtiResult">

            <el-card class="box-card" shadow="hover" :header="carHeader">
                <p>一、概述</p>
                <p v-html="result.abstract"></p>
                <p>二、特征</p>
                <p v-html="result.explain"></p>
                <p>三、描述</p>
                <p v-html="result.describe"></p>
                <p>四、优势</p>
                <p v-html="result.advantage"></p>
                <p>五、劣势</p>
                <p v-html="result.shortcomings"></p>
                <p>六、偏好的职业领域</p>
                <p v-html="result.job_Satisfaction"></p>
                <p>适合的典型职业</p>
                <p v-html="result.job"></p>
            </el-card>

        </div>
    </div>
</template>



<script>

import { mbti_Questions, mbti_result } from '@/datas/data.js';

import axios from 'axios';

export default {
    name: 'MbtiContent',
    data() {
        return {
            form: {
                route: "mbti",
                answers: [
                    { index: 1, answer: "" }, { index: 2, answer: "" }, { index: 3, answer: "" }, { index: 4, answer: "" }, { index: 5, answer: "" }, { index: 6, answer: "" }, { index: 7, answer: "" }, { index: 8, answer: "" }, { index: 9, answer: "" }, { index: 10, answer: "" }, { index: 11, answer: "" }, { index: 12, answer: "" }, { index: 13, answer: "" }, { index: 14, answer: "" }, { index: 15, answer: "" }, { index: 16, answer: "" }, { index: 17, answer: "" }, { index: 18, answer: "" }, { index: 19, answer: "" }, { index: 20, answer: "" }, { index: 21, answer: "" }, { index: 22, answer: "" }, { index: 23, answer: "" }, { index: 24, answer: "" }, { index: 25, answer: "" }, { index: 26, answer: "" }, { index: 27, answer: "" }, { index: 28, answer: "" }, { index: 29, answer: "" }, { index: 30, answer: "" }, { index: 31, answer: "" }, { index: 32, answer: "" }, { index: 33, answer: "" }, { index: 34, answer: "" }, { index: 35, answer: "" }, { index: 36, answer: "" }, { index: 37, answer: "" }, { index: 38, answer: "" }, { index: 39, answer: "" }, { index: 40, answer: "" }, { index: 41, answer: "" }, { index: 42, answer: "" }, { index: 43, answer: "" }, { index: 44, answer: "" }, { index: 45, answer: "" }, { index: 46, answer: "" }, { index: 47, answer: "" }, { index: 48, answer: "" }, { index: 49, answer: "" }, { index: 50, answer: "" }, { index: 51, answer: "" }, { index: 52, answer: "" }, { index: 53, answer: "" }, { index: 54, answer: "" }, { index: 55, answer: "" }, { index: 56, answer: "" }, { index: 57, answer: "" }, { index: 58, answer: "" }, { index: 59, answer: "" }, { index: 60, answer: "" }, { index: 61, answer: "" }, { index: 62, answer: "" }, { index: 63, answer: "" }, { index: 64, answer: "" }, { index: 65, answer: "" }, { index: 66, answer: "" }, { index: 67, answer: "" }, { index: 68, answer: "" }, { index: 69, answer: "" }, { index: 70, answer: "" }, { index: 71, answer: "" }, { index: 72, answer: "" }, { index: 73, answer: "" }, { index: 74, answer: "" }, { index: 75, answer: "" }, { index: 76, answer: "" }, { index: 77, answer: "" }, { index: 78, answer: "" }, { index: 79, answer: "" }, { index: 80, answer: "" }, { index: 81, answer: "" }, { index: 82, answer: "" }, { index: 83, answer: "" }, { index: 84, answer: "" }, { index: 85, answer: "" }, { index: 86, answer: "" }, { index: 87, answer: "" }, { index: 88, answer: "" }, { index: 89, answer: "" }, { index: 90, answer: "" }, { index: 91, answer: "" }, { index: 92, answer: "" }, { index: 93, answer: "" }, { index: 94, answer: "" }, { index: 95, answer: "" }, { index: 96, answer: "" }, { index: 97, answer: "" }, { index: 98, answer: "" }, { index: 99, answer: "" }, { index: 100, answer: "" }, { index: 101, answer: "" }, { index: 102, answer: "" }, { index: 103, answer: "" }, { index: 104, answer: "" }, { index: 105, answer: "" }, { index: 106, answer: "" }, { index: 107, answer: "" }, { index: 108, answer: "" }, { index: 109, answer: "" }, { index: 110, answer: "" }, { index: 111, answer: "" }, { index: 112, answer: "" }, { index: 113, answer: "" }, { index: 114, answer: "" }, { index: 115, answer: "" }, { index: 116, answer: "" }, { index: 117, answer: "" }, { index: 118, answer: "" }, { index: 119, answer: "" }, { index: 120, answer: "" }, { index: 121, answer: "" }, { index: 122, answer: "" }, { index: 123, answer: "" }, { index: 124, answer: "" }, { index: 125, answer: "" }, { index: 126, answer: "" }, { index: 127, answer: "" }, { index: 128, answer: "" }, { index: 129, answer: "" }, { index: 130, answer: "" }, { index: 131, answer: "" }, { index: 132, answer: "" }, { index: 133, answer: "" }, { index: 134, answer: "" }, { index: 135, answer: "" }, { index: 136, answer: "" }, { index: 137, answer: "" }, { index: 138, answer: "" }, { index: 139, answer: "" }, { index: 140, answer: "" }, { index: 141, answer: "" }, { index: 142, answer: "" }, { index: 143, answer: "" }, { index: 144, answer: "" }, { index: 145, answer: "" }, { index: 146, answer: "" }, { index: 147, answer: "" }, { index: 148, answer: "" }, { index: 149, answer: "" }, { index: 150, answer: "" }, { index: 151, answer: "" }, { index: 152, answer: "" }, { index: 153, answer: "" }, { index: 154, answer: "" }, { index: 155, answer: "" }, { index: 156, answer: "" }, { index: 157, answer: "" }, { index: 158, answer: "" }, { index: 159, answer: "" }, { index: 160, answer: "" }, { index: 161, answer: "" }, { index: 162, answer: "" }, { index: 163, answer: "" }, { index: 164, answer: "" }, { index: 165, answer: "" }, { index: 166, answer: "" }, { index: 167, answer: "" }, { index: 168, answer: "" }, { index: 169, answer: "" }, { index: 170, answer: "" }, { index: 171, answer: "" }, { index: 172, answer: "" }, { index: 173, answer: "" }, { index: 174, answer: "" }, { index: 175, answer: "" }, { index: 176, answer: "" }, { index: 177, answer: "" }, { index: 178, answer: "" }, { index: 179, answer: "" }, { index: 180, answer: "" }, { index: 181, answer: "" }, { index: 182, answer: "" }, { index: 183, answer: "" }, { index: 184, answer: "" }, { index: 185, answer: "" }, { index: 186, answer: "" }, { index: 187, answer: "" },


                ],

                timerstamp: new Date().getTime(),
            },
            mbtiQuestions: mbti_Questions,
            mbti_resultData: mbti_result,
            showflag: {
                mbti: true,
                mbtiResult: false
            },
            result: {
                res: "",
                title: "",
                abstract: "",
                explain: "",
                describe: "",
                job_Satisfaction: "",
                job: "",
                advantage: "",
                shortcomings: "",
            },
        };
    },
    computed: {
        carHeader() {
            return `您的测试结果为${this.result.res}型`;
        },



    },
    methods: {
        submitForm() {
            for (let i = 0; i < this.form.answers.length; i++) {
                if (this.form.answers[i].answer === "") {
                    return alert("请完成所有题目")

                }

            }
            axios.post("/", this.form)
                .then((res) => {
                    let found = false;
                    for (let i = 0; i < this.mbti_resultData.length; i++) {
                        if (res.data === this.mbti_resultData[i].res) {
                            this.result = this.mbti_resultData[i];
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        // Handle case when no matching result is found
                        this.mbti_result = {
                            res: "",
                            title: "No Match Found",
                            abstract: "",
                            explain: "",
                            describe: "",
                            job_Satisfaction: "",
                            job: "",
                            advantage: "",
                            shortcomings: "",
                        };
                    }
                    this.showflag.mbti = false;
                    this.showflag.mbtiResult = true;
                })
                .catch((err) => {
                    console.log(err);
                });
        },


        fetchInfo() {
            axios.get('/')
                .then(response => {
                    if (response.data.res==="") {

                        this.showflag.mbti = true;
                        this.showflag.mbtiResult = false;

                    } else {

                        this.showflag.mbti = false;
                        this.showflag.mbtiResult = true;


                    }
                })
                .catch(error => {
                    console.error(error);
                });
        },

    },
    watch: {
        'form.answers': {
            handler(newVal) {
                console.log(newVal);
            },
            deep: true
        }
    }
};
</script>
