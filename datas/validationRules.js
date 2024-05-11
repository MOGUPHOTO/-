const commonMessages = {
  required: "该项为必填项",
  number: "请输入有效数字",
};

const chineseOnly = { pattern: /^[\u4e00-\u9fa5]+$/, message: "只能输入中文" };
const phoneNumber = { pattern: /^1[3-9]\d{9}$/, message: "手机号格式错误" };
const chineseCity = { ...chineseOnly, message: "城市只能输入中文" };
const chineseText = {
  pattern: /^[\u4e00-\u9fa5]{2,20}$/,
  message: "格式错误，只能输入中文，长度为2-20个字符",
};
const gradeRange = {
  pattern: /^(?:[1-9][0-9]?|1[0-4][0-9]|150)$/,
  message: "成绩只能在0-150之间",
};
const totalGradeRange = {
  pattern: /^(?:[1-9][0-9]?|1[0-4][0-9]|150|300)$/,
  message: "成绩只能在0-300之间",
};
const rankingRange = {
  pattern: /^[1-9]\d{0,5}$/,
  message: "排名只能在0-100万之间",
};

export const UserFormRules = {
  UserName: [{ required: true, message: commonMessages.required,tiggers:['blur' , 'change']}, chineseOnly  ],
  phone: [{ required: true, message: commonMessages.required }, phoneNumber],
  Userarea: [{ required: true, message: commonMessages.required }, chineseCity],
  desired_major: [
    { required: true, message: commonMessages.required },
    chineseText,
  ],
  desired_universities: [
    { required: true, message: commonMessages.required },
    chineseText,
  ],
  grade_ch: [
    { required: true, message: commonMessages.required },
    { type: "number", message: commonMessages.number },
    gradeRange,
  ],
  grade_ma: [
    { required: true, message: commonMessages.required },
    { type: "number", message: commonMessages.number },
    gradeRange,
  ],
  grade_en: [
    { required: true, message: commonMessages.required },
    { type: "number", message: commonMessages.number },
    gradeRange,
  ],
  grade_comp: [
    { required: true, message: commonMessages.required },
    { type: "number", message: commonMessages.number },
    totalGradeRange,
  ],
  grade_total: [
    { required: true, message: commonMessages.required },
    { type: "number", message: commonMessages.number },
    totalGradeRange,
  ],
  UserRanking: [
    { required: true, message: commonMessages.required },
    { type: "number", message: commonMessages.number },
    rankingRange,
  ],
};
