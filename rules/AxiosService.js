// axiosService.js
import axios from 'axios';

const axiosService = axios.create({
  baseURL: '', // 设置API基础路径
  timeout: 10000, // 设置超时时间
});

export default axiosService;
