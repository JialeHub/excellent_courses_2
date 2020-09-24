import { axiosG, axiosK, axiosD } from '../../index'

/** 作业提交 **/
const homeworkPost = '/submit/homework' //  学生提交作业
const homeworkGet = '/info/homeworkByStudent' //  学生获取作业完成情况列表 9.17




export const homeworkGetApi = data => axiosG(homeworkGet, data)
export const homeworkPostApi = data => axiosK(homeworkPost, data)




