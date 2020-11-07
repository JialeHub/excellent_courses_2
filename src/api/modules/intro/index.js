import {axiosG} from '../../index'

/** 简介信息模块 **/
const introtGet = '/intro' //  根据代号获取简介信息
const teamGet = '/student/page'  // 分页查询教学团队
const detailGet = '/student/get'  // 获得教学团队详情

export const introtGetApi = data => axiosG(introtGet, data)
export const teamGetApi = data => axiosG(teamGet, data)
export const detailGetApi = data => axiosG(detailGet, data)


