import { axiosG, axiosK, axiosD, axiosM } from '../../index'

/** 主观题模块 **/
const quesGet = '/subject/sub' //  学生获取主观题
const sectionGet = '/subject/testing' //  学生获取主观题
const quesPost = '/subject/sub' //  学生提交主观题答案

export const quesGetApi = data => axiosG(quesGet, data)
export const OsectionGetApi = data => axiosG(sectionGet, data)
export const quesPostApi = data => axiosK(quesPost, data)

