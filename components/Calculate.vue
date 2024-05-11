<template>
  <div name="calculate">
    <el-card style="width=100%">
      <div slot="header">
        <span>自助计算</span>
      </div>
      <div>
        <el-form
          name="calculate"
          :model="inputValue"
          ref="calculate"
          label-width="150px"
          style="display: flex; flex-wrap: wrap"
          @submit.native.prevent
        >
          <el-form-item label="科别" prop="type" style="width: max-content">
            <el-select v-model="inputValue.type" placeholder="请选择选科类型">
              <el-option
                v-for="item in options_type"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item
            label="高考成绩"
            prop="score"
            style="width: max-content"
          >
            <el-input v-model.trim="inputValue.score" clearable></el-input>
          </el-form-item>
          <el-form-item
            label="学校名称"
            prop="schoolName"
            style="width: max-content"
          >
            <el-input v-model.trim="inputValue.schoolName" clearable></el-input>
          </el-form-item>

          <el-form-item
            label="专业名称"
            prop="majorName"
            style="width: max-content"
          >
            <el-input v-model.trim="inputValue.majorName" clearable></el-input>
          </el-form-item>
          <el-form-item label="批次" prop="batch" style="width: max-content">
            <el-select v-model="inputValue.batch" placeholder="请选择学校批次">
              <el-option
                v-for="item in options_batch"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="2023年录取分数"
            prop="score23"
            style="width: max-content"
          >
            <el-input v-model.trim="inputValue.score23" clearable></el-input>
          </el-form-item>
          <el-form-item
            label="2022年录取分数"
            prop="score22"
            style="width: max-content"
          >
            <el-input v-model.trim="inputValue.score22" clearable></el-input>
          </el-form-item>

          <el-form-item
            label="2021年录取分数"
            prop="score21"
            style="width: max-content"
          >
            <el-input v-model.trim="inputValue.score21" clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div>
        <h1>欢迎使用陌鼓志愿填报</h1>
        <el-table :data="result" height="250" border style="width: 100%">
          <el-table-column prop="type" label="科别"></el-table-column>
          <el-table-column prop="score" label="高考成绩"></el-table-column>
          <el-table-column prop="schoolName" label="学校名称"></el-table-column>
          <el-table-column prop="majorName" label="专业名称"></el-table-column>
          <el-table-column prop="batch" label="批次"></el-table-column>
          <el-table-column
            prop="score23"
            label="2023年录取分数"
          ></el-table-column>
          <el-table-column
            prop="score22"
            label="2022年录取分数"
          ></el-table-column>
          <el-table-column
            prop="score21"
            label="2021年录取分数"
          ></el-table-column>
          <el-table-column
            prop="probability"
            label="录取概率"
          ></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="text" @click="removeRow(scope.$index)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "CalculateContent",
  data() {
    return {
      line: {
        sci: 420,
        lib: 480,
      },
      inputValue: {
        type: "",
        score: 0,
        schoolName: "",
        majorName: "",
        batch: "",
        score23: 0,
        score22: 0,
        score21: 0,
        avg: 0,
        probability: "",
      },
      result: [],
      options_type: [
        {
          value: "理科",
          label: "理科",
        },
        {
          value: "文科",
          label: "文科",
        },
      ],
      options_batch: [
        { value: "本科一批", label: "本科一批" },
        { value: "本科二批", label: "本科二批" },
        { value: "专科一批", label: "专科一批" },
      ],
    };
  },
  methods: {
    submitForm() {
      if (this.inputValue.type === "理科") {
        let scores = [
          this.inputValue.score23,
          this.inputValue.score22,
          this.inputValue.score21,
        ];
        let validScores = scores.filter((score) => score > 0);
        if (this.inputValue.batch === "本科一批") {
          let adjustedScores = validScores.map((score) => {
            if (score > 0) {
              if (score === this.inputValue.score23) {
                return score - 397;
              } else if (score === this.inputValue.score22) {
                return score - 412;
              } else if (score === this.inputValue.score21) {
                return score - 412;
              }
            }
            return score;
          });
          let avg =
            adjustedScores.reduce((acc, cur) => acc + cur, 0) /
            adjustedScores.length;
          this.inputValue.avg = avg;
        } else if (this.inputValue.batch === "本科二批") {
          let adjustedScores = validScores.map((score) => {
            if (score > 0) {
              if (score === this.inputValue.score23) {
                return score - 340;
              } else if (score === this.inputValue.score22) {
                return score - 350;
              } else if (score === this.inputValue.score21) {
                return score - 345;
              }
            }
            return score;
          });
          let avg =
            adjustedScores.reduce((acc, cur) => acc + cur, 0) /
            adjustedScores.length;
          this.inputValue.avg = avg;
        } else if (this.inputValue.batch === "专科一批") {
          let adjustedScores = validScores.map((score) => {
            if (score > 0) {
              if (score === this.inputValue.score23) {
                return score - 150;
              } else if (score === this.inputValue.score22) {
                return score - 150;
              } else if (score === this.inputValue.score21) {
                return score - 150;
              }
            }
            return score;
          });
          let avg =
            adjustedScores.reduce((acc, cur) => acc + cur, 0) /
            adjustedScores.length;
          this.inputValue.avg = avg;
        }

        let diff = this.inputValue.score - this.line.sci - this.inputValue.avg;
        if (diff > -15 && diff < 15) {
          this.inputValue.probability = "中等";
        } else if (diff > 15) {
          this.inputValue.probability = "高";
        } else if (diff > -15 && diff < 0) {
          this.inputValue.probability = "低";
        } else if (diff < -15) {
          this.inputValue.probability = "极低";
        }
        const tempResult = Object.assign({}, this.inputValue);
        this.result.push(tempResult)
        for (const key in this.inputValue) {
          this.inputValue[key] = "";
        }
      } else if (this.inputValue.type === "文科") {
        let scores = [
          this.inputValue.score23,
          this.inputValue.score22,
          this.inputValue.score21,
        ];
        let validScores = scores.filter((score) => score > 0);
        if (this.inputValue.batch === "本科一批") {
          let adjustedScores = validScores.map((score) => {
            if (score > 0) {
              if (score === this.inputValue.score23) {
                return score - 488;
              } else if (score === this.inputValue.score22) {
                return score - 487;
              } else if (score === this.inputValue.score21) {
                return score - 505;
              }
            }
            return score;
          });
          let avg =
            adjustedScores.reduce((acc, cur) => acc + cur, 0) /
            adjustedScores.length;
          this.inputValue.avg = avg;
        } else if (this.inputValue.batch === "本科二批") {
          let adjustedScores = validScores.map((score) => {
            if (score > 0) {
              if (score === this.inputValue.score23) {
                return score - 421;
              } else if (score === this.inputValue.score22) {
                return score - 425;
              } else if (score === this.inputValue.score21) {
                return score - 430;
              }
            }
            return score;
          });
          let avg =
            adjustedScores.reduce((acc, cur) => acc + cur, 0) /
            adjustedScores.length;
          this.inputValue.avg = avg;
        } else if (this.inputValue.batch === "专科一批") {
          let adjustedScores = validScores.map((score) => {
            if (score > 0) {
              if (score === this.inputValue.score23) {
                return score - 150;
              } else if (score === this.inputValue.score22) {
                return score - 150;
              } else if (score === this.inputValue.score21) {
                return score - 150;
              }
            }
            return score;
          });
          let avg =
            adjustedScores.reduce((acc, cur) => acc + cur, 0) /
            adjustedScores.length;
          this.inputValue.avg = avg;
        }

        let diff = this.inputValue.score - this.line.sci - this.inputValue.avg;
        if (diff > -15 && diff < 15) {
          this.inputValue.probability = "中等";
        } else if (diff > 15) {
          this.inputValue.probability = "高";
        } else if (diff > -15 && diff < 0) {
          this.inputValue.probability = "低";
        } else if (diff < -15) {
          this.inputValue.probability = "极低";
        }
        const tempResult = Object.assign({}, this.inputValue);
        this.result.push(tempResult)
        for (const key in this.inputValue) {
          this.inputValue[key] = "";
        }
      }
    },
    resetForm() {
      for (const key in this.inputValue) {
        this.inputValue[key] = "";
      }
    },
    removeRow(index) {
      this.result.splice(index, 1);
    },
  },
};
</script>
