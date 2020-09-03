import { axiosG, axiosK, axiosD,axiosJ,axiosA } from '../../index'

/** 课程评价模块 **/
const evaluateListGet = '/evaluate' //  分页获取评价列表
const evaluatePost = '/evaluate' //  学生保存评价
const evaluateDelete = '/evaluate' //  管理员删除评论

const praiseByEvalGet = '/praiseByEval' //  分页获取某条评价的赞列表
const praiseByEvalPost = '/praiseByEval' //  学生点赞评价
const praiseByEvalDelete = '/praiseByEval' //  管理员删除点赞

const praiseByWBGet = '/praiseByWB' //  分页获取某条回复的赞列表
const praiseByWBPost = '/praiseByWB' //  学生点赞回复

const writeBackGet = '/writeBack' //  分页获取某条评价的回复列表
const writeBackPost = '/writeBack' //  学生回复评价
const writeBackDelete = '/writeBack' //  管理员删除回复


export const evaluateListGetApi = data => axiosG(evaluateListGet, data)
export const praiseByEvalGetApi = data => axiosG(praiseByEvalGet, data)
export const praiseByWBGetApi = data => axiosG(praiseByWBGet, data)
export const writeBackGetApi = data => axiosG(writeBackGet, data)
export const evaluatePostApi = data => axiosJ(evaluatePost, data)
export const praiseByEvalPostApi = data => axiosK(praiseByEvalPost, data)
export const praiseByWBPostApi = data => axiosK(praiseByWBPost, data)
export const writeBackPostApi = data => axiosK(writeBackPost, data)
export const evaluateDeleteApi = data => axiosD(evaluateDelete, data)
export const praiseByEvalDeleteApi = data => axiosD(praiseByEvalDelete, data)
export const writeBackDeleteApi = data => axiosD(writeBackDelete, data)



