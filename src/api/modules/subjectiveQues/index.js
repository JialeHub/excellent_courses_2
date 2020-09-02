import { axiosG, axiosK, axiosD, axiosM } from '../../index'

/** 主观题模块 **/
const quesGet = '/subject/sub' //  学生获取主观题
const quesPost = '/subject/sub' //  学生提交主观题答案

export const quesGetApi = data => axiosG(quesGet, data)
export const quesPostApi = data => axiosK(quesPost, data)

