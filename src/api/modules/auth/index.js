import {axiosG, axiosK, axiosM,axiosA,axiosJ,axiosF} from '../../index'

/** 用户模块 **/
const stuListGet = '/student' //  分页搜索学生列表
const adminLogin = '/auth/login' //  管理员登录
const stuLogin = '/auth/login/student' //  学生登录
const passwordEdit = '/auth/reset' //  修改密码
const stuAdd = '/student' //  修改密码
const stuChange = '/student' //  启用/禁用学生
const stuInfoEdit = '/student/info' // 修改学生信息


export const stuListGetApi = data => axiosG(stuListGet, data)
export const adminLoginApi = data => axiosK(adminLogin, data)
export const stuLoginApi = data => axiosJ(stuLogin, data)
export const passwordEditApi = data => axiosK(passwordEdit, data)
export const stuAddApi = data => axiosK(stuAdd, data)
export const stuChangeApi = data => axiosM(stuChange, data)
export const stuInfoEditApi = data => axiosM(stuInfoEdit, data)

