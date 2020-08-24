import { axiosG, axiosK, axiosD } from '../../index'

/** 视频观看进度模块 **/
const fulfillGet = '/video/fulfill/admin' //  管理员获取学生已看列表
const historyGet = '/video/history/admin' //  管理员获取学生学习记录
const undoneGet = '/video/undone/admin' //  管理员获取学生未看列表
const historyStuGet = '/video/history' //  学生获取学习记录
const statusPost = '/video/end' //  记录视频观看状态
const historyStuDelete = '/video/history' //  学生删除学习viewing status记录


export const fulfillGetApi = data => axiosG(fulfillGet, data)
export const historyGetApi = data => axiosG(historyGet, data)
export const undoneGetApi = data => axiosG(undoneGet, data)
export const historyStuGetApi = data => axiosG(historyStuGet, data)
export const statusPostApi = data => axiosK(statusPost, data)
export const historyStuDeleteApi = data => axiosD(historyStuDelete, data)


