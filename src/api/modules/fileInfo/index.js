import { axiosG, axiosK, axiosD } from '../../index'

/** 资源模块 **/
const resourceGet = '/resource' //  分页搜索资源信息
const resourceDownload = '/resource/download/one' //  单资源下载
const resourceDownloads= '/resource/downloads' //  多资源下载
const resourcePost = '/resource' // 修改资源信息
const fileUpload = '/file/upload' // 文件上传-和修改资源文件信息共用
const resourceUpload= '/resource/upload' // 资源上传
const resourceDelete = '/resource' //  删除资源信息


export const resourceGetApi = data => axiosG(resourceGet, data)
export const resourceDownloadApi = data => axiosG(resourceDownload, data)
export const resourceDownloadsApi = data => axiosG(resourceDownloads, data)
export const resourcePostApi = data => axiosK(resourcePost, data)
export const fileUploadApi = data => axiosK(fileUpload, data)
export const resourceUploadApi = data => axiosK(resourceUpload, data)
export const resourceDeleteApi = data => axiosD(resourceDelete, data)
