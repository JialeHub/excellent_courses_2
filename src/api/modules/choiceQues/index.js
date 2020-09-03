import {axiosG, axiosK, axiosD, axiosM} from '../../index'

/** 客观题模块 **/
const choiceGet = '/choice' //  获取客观题
const choicePost = '/choice' //  保存客观题
const choiceEdit = '/choice' //  修改客观题
const choiceDelete = '/choice' //  删除客观题
const sectionGet = '/choice/section' //  获取客观题章节
const choiceStuGet = '/choice/student' //  学生获取客观题列表
const choiceStuPost = '/choice/student' //  学生提交章节题目答案

export const choiceGetApi = data => axiosG(choiceGet, data)
export const sectionGetApi = data => axiosG(sectionGet, data)
export const choicePostApi = data => axiosK(choicePost, data)
export const choiceEditApi = data => axiosM(choiceEdit, data)
export const choiceDeleteApi = data => axiosD(choiceDelete, data)
export const choiceStuGetApi = data => axiosG(choiceStuGet, data)
export const choiceStuPostApi = data => axiosK(choiceStuPost, data)
