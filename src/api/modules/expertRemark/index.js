import { axiosG, axiosK, axiosD } from '../../index'

/** 专家评论模块 **/
const expertRemarkGet = '/expertRemark' //  获取专家评论详情
const expertRemarkPost = '/expertRemark' //  保存专家评论信息
const expertRemarkDelete = '/expertRemark' //  删除专家评论信息


export const expertRemarkGetApi = data => axiosG(expertRemarkGet, data)
export const expertRemarkPostApi = data => axiosK(expertRemarkPost, data)
export const expertRemarkDeleteApi = data => axiosD(expertRemarkDelete, data)



