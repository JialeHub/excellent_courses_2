import {axiosG, axiosK, axiosD, axiosM} from '../../index'

/** 网站图片模块 **/
const imagesListGet = '/images' //  获取图片列表
const imagesGet = '/images/board' //  获取某板块图片
const imagesPost = '/images' //  保存图片
const imagesEdit = '/images' //  修改图片
const imagesDelete = '/images' //  删除图片


export const imagesListGetApi = data => axiosG(imagesListGet, data)
export const imagesGetApi = data => axiosG(imagesGet, data)
export const imagesPostApi = data => axiosK(imagesPost, data)
export const imagesEditApi = data => axiosM(imagesEdit, data)
export const imagesDeleteApi = data => axiosD(imagesDelete, data)





