import { axiosG, axiosK } from '../../index'

/** 测试题模块 **/
const testGet = '/testing/admin' //  管理员获取测试题
const testStuGet = '/testing/student' //  学生获取测试题
const testStuPost = '/testing/student' //  学生提交测试题答案


export const testGetApi = data => axiosG(testGet, data)
export const testStuGetApi = data => axiosG(testStuGet, data)
export const testStuPostApi = data => axiosK(testStuPost, data)
