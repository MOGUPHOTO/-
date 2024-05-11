<template>
    <div>
        <div name="plan" v-show="showflag.plan">
            <h2>欢迎使用陌鼓志愿填报</h2>
            <h3>职业锚测试</h3>
            <el-form v-model="planQuestions" ref="planForm" style="display: block; width: 100%; align-items: left;">
                <el-form-item v-for="(question, index) in planQuestions" :key="index" :label="question.question"
                    style="text-align: left;">
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
        <div name="planResult" v-show="showflag.planResult">

            <el-card class="box-card" shadow="hover" :header="carHeader">
                <p>一、概述</p>
                <p v-html="result.explain"></p>
                <p>二、专业推荐</p>
                <p v-html="result.major"></p>
                <p>三、职业规划推荐</p>
                <p v-html="result.plan"></p>
              
            </el-card>

        </div>
    </div>
</template>



<script>

import { plan_Questions, plan_result } from '@/datas/data.js';

import axios from 'axios';

export default {
    name: 'planContent',
    data() {
        return {
            form: {
                route: "plan",
                answers: [
                    { index: 1, answer: "" }, { index: 2, answer: "" }, { index: 3, answer: "" }, { index: 4, answer: "" }, { index: 5, answer: "" }, { index: 6, answer: "" }, { index: 7, answer: "" }, { index: 8, answer: "" }, { index: 9, answer: "" }, { index: 10, answer: "" }, { index: 11, answer: "" }, { index: 12, answer: "" }, { index: 13, answer: "" }, { index: 14, answer: "" }, { index: 15, answer: "" }, { index: 16, answer: "" }, { index: 17, answer: "" }, { index: 18, answer: "" }, { index: 19, answer: "" }, { index: 20, answer: "" }, { index: 21, answer: "" }, { index: 22, answer: "" }, { index: 23, answer: "" }, { index: 24, answer: "" }, { index: 25, answer: "" }, { index: 26, answer: "" }, { index: 27, answer: "" }, { index: 28, answer: "" }, { index: 29, answer: "" }, { index: 30, answer: "" }, { index: 31, answer: "" }, { index: 32, answer: "" }, { index: 33, answer: "" }, { index: 34, answer: "" }, { index: 35, answer: "" }, { index: 36, answer: "" }, { index: 37, answer: "" }, { index: 38, answer: "" }, { index: 39, answer: "" }, { index: 40, answer: "" }, 


                ],

                timerstamp: new Date().getTime(),
            },
            planQuestions: plan_Questions,
            plan_resultData: plan_result,
            showflag: {
                plan: true,
                planResult: false
            },
            result: {
                res: "zizhu",
                title: "自主（Autonomy/Independence）",
                explain: "自主性在职业锚中指一个人对于在职业生涯中掌握主动权和自由度的需求。这种需求不仅仅是对工作环境和工作方式的控制，更是一种对于个人价值实现和生活方式选择的自主权。这样的个人在职业选择时，会优先考虑那些能够让他们根据自己的理解和判断来制定工作流程、决策和方法的机会。他们倾向于避开那些极度依赖团队合作、上级指令或是固定工作模式的职业路径。",
                major: "1. 创业学：培养自主创业的能力，理解市场机制，学习财务管理和项目规划，非常适合追求自主性的个体。<br> 2. 计算机科学：特别是软件开发和网络安全等方向，这些专业不仅提供了高度的职业灵活性，也让个人有机会自主地选择项目和工作内容。<br> 3. 艺术与设计：诸如平面设计、室内设计等专业，允许个体表达创意，自主决定设计理念和实现方式。",
                plan:  "1. 自由职业者，如独立咨询师、自由撰稿人或摄影师，他们可以自主选择项目和客户。<br>2. 创业者，启动自己的公司，完全掌控业务方向和管理方式。<br>3. 远程工作职位，如远程软件开发者，提供了工作时间和地点的自由度。",
            },
        };
    },
    computed: {
        carHeader() {
            return `您的测试结果为${this.result.title}型`;
        },



    },
    methods: {
        submitForm() {
            console.log(this.form.answers);
            for (let i = 0; i < this.form.answers.length; i++) {
                if (this.form.answers[i].answer === "") {
                    return alert("请完成所有题目")

                }

            }
            axios.post("/", this.form)
                .then((res) => {
                    let found = false;
                    for (let i = 0; i < this.plan_resultData.length; i++) {
                        if (res.data === this.plan_resultData[i].res) {
                            this.result = this.plan_resultData[i];
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        // Handle case when no matching result is found
                        this.plan_result = {
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
                    this.showflag.plan = false;
                    this.showflag.planResult = true;
                })
                .catch((err) => {
                    console.log(err);
                });
        },


        fetchInfo() {
            axios.get('/')
                .then(response => {
                    if (response.data.res === "") {

                        this.showflag.plan = true;
                        this.showflag.planResult = false;

                    } else {

                        this.showflag.plan = false;
                        this.showflag.planResult = true;


                    }
                })
                .catch(error => {
                    console.error(error);
                });
        },

    },
    
};
</script>
