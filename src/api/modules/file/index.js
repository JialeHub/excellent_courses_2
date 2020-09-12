import {axiosF, axiosFs} from "../../index";

/**
 * @module 文件
 * */
export const uploadFileApi = data => axiosF('file/upload', data);
export const uploadFilePlusApi = data => axiosFs('file/upload', data);
export const uploadFileMaxPlusApi = (data, callback, source) => axiosFs('file/upload', data, callback, source);
export const uploadPicturePlusApi = data => axiosFs('file/upload', data);
