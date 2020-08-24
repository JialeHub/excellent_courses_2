import { axiosG, axiosK, axiosD } from '../../index'

/** 作业提交 **/
const homeworkGet = '/info/homework' //  管理员获取某位学生的作业完成情况
const homeworkPost = '/submit/homework' //  学生提交作业


export const homeworkGetApi = data => axiosG(homeworkGet, data)
export const homeworkPostApi = data => axiosK(homeworkPost, data)




