import { axiosG, axiosK, axiosD, axiosM, axiosJ,axiosA } from '../../index'

/** 发布作业模块 **/
const homeworkListGet = '/info/homeworkByStudent' //  学生/管理员分页获取作业列表
const homeworkPost = '/homework' //  管理员发布作业
const homeworkEdit = '/homework' //  管理员修改作业
const homeworkDelete = '/homework' //  管理员删除作业


export const homeworkListGetApi = data => axiosG(homeworkListGet, data)
export const homeworkEditApi = data => axiosM(homeworkEdit, data)
export const homeworkDeleteApi = data => axiosD(homeworkDelete, data)


