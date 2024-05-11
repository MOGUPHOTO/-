export const UserFormRules = {
  // 用户表单验证规则
  // 用户名验证
  UserName: [
    { required: true, message: "请输入姓名", trigger: "blur" },
    {
      pattern: /^[\u4e00-\u9fa5]+$/,
      message: "姓名只能是中文",
      trigger: "blur",
    },
  ],

  //   电话号码验证
  phone: [
    { required: true, message: "请输入手机号", trigger: "blur" },
    {
      pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
      message: "手机号格式错误",
      trigger: "blur",
    },
  ],

  //   城市验证
  Userarea_01: [
    { required: true, message: "请输入城市", trigger: "blur" },
    {
      pattern: /^[\u4e00-\u9fa5]+$/,
      message: "城市只能是中文",
      trigger: "blur",
    },
  ],

  Userarea_02: [
    { required: true, message: "请输入城市", trigger: "blur" },
    {
      pattern: /^[\u4e00-\u9fa5]+$/,
      message: "城市只能是中文",
      trigger: "blur",
    },
  ],

  Userarea_03: [
    { required: true, message: "请输入城市", trigger: "blur" },
    {
      pattern: /^[\u4e00-\u9fa5]+$/,
      message: "城市只能是中文",
      trigger: "blur",
    },
  ],

  //   专业验证
  desired_major_01: [
    { required: true, message: "请输入专业", trigger: "blur" },
    {
      pattern: /^[\u4e00-\u9fa5]{2,20}$/,
      message: "专业格式错误",
      trigger: "blur",
    },
  ],

  desired_major_02: [
    { required: true, message: "请输入专业", trigger: "blur" },
    {
      pattern: /^[\u4e00-\u9fa5]{2,20}$/,
      message: "专业格式错误",
      trigger: "blur",
    },
  ],
  desired_major_03: [
    { required: true, message: "请输入专业", trigger: "blur" },
    {
      pattern: /^[\u4e00-\u9fa5]{2,20}$/,
      message: "专业格式错误",
      trigger: "blur",
    },
  ],
  desired_universities_01: [
    { required: true, message: "请输入大学名称", trigger: "blur" },
    {
      pattern: /^[\u4e00-\u9fa5]{2,20}$/,
      message: "大学名称格式错误",
      trigger: "blur",
    },
  ],
  desired_universities_02: [
    { required: true, message: "请输入大学名称", trigger: "blur" },
    {
      pattern: /^[\u4e00-\u9fa5]{2,20}$/,
      message: "大学名称格式错误",
      trigger: "blur",
    },
  ],
  desired_universities_03: [
    { required: true, message: "请输入大学名称", trigger: "blur" },
    {
      pattern: /^[\u4e00-\u9fa5]{2,20}$/,
      message: "大学名称格式错误",
      trigger: "blur",
    },
  ],

  // 成绩验证
  grade_ch: [
    { required: true, message: "请输入数值", trigger: "blur" },
    { type: "number", message: "成绩只能为数字", trigger: "blur" },
    {
      pattern: /^[1-9][0-9]?$|^1[0-4][0-9]$|^150$/,
      message: "成绩只能在0-150之间",
      trigger: "blur",
    },
  ],

  grade_ma: [
    { required: true, message: "请输入数值", trigger: "blur" },
    { type: "number", message: "成绩只能为数字", trigger: "blur" },
    {
      pattern: /^[1-9][0-9]?$|^1[0-4][0-9]$|^150$/,
      message: "成绩只能在0-150之间",
      trigger: "blur",
    },
  ],
  //   外语成绩
  grade_en: [
    { required: true, message: "请输入数值", trigger: "blur" },
    { type: "number", message: "成绩只能为数字", trigger: "blur" },
    {
      pattern: /^[1-9][0-9]?$|^1[0-4][0-9]$|^150$/,
      message: "成绩只能在0-150之间",
      trigger: "blur",
    },
  ],

  grade_comp: [
    { required: true, message: "请输入数值", trigger: "blur" },
    { type: "number", message: "成绩只能为数字", trigger: "blur" },
    {
      pattern: /^[1-9][0-9]?$|^1[0-4][0-9]$|^300$/,
      message: "成绩只能在0-300之间",
      trigger: "blur",
    },
  ],

  grade_total: [
    { required: true, message: "请输入数值", trigger: "blur" },
    { type: "number", message: "成绩只能为数字", trigger: "blur" },
    {
      pattern: /^[1-9][0-9]?$|^1[0-4][0-9]$|^750$/,
      message: "成绩只能在0-750之间",
      trigger: "blur",
    },
  ],

  // 排名验证
  UserRanking: [
    { required: true, message: "请输入排名", trigger: "blur" },
    { type: "number", message: "排名只能为数字", trigger: "blur" },
    {
      pattern: /^[1-9]\d{0,5}$/,
      message: "排名只能在0-100万之间",
      trigger: "blur",
    },
  ],
};
