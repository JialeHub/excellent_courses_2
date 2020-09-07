import Vue from "vue";
import {
  Message
} from 'element-ui';
export const errorMsg = msg => Message.error(msg);

/**
 * @param string
 * @param noAddBase
 * @return {String}
 * @description 添加URL地址+自动去除第一斜杠
 * */
export const addBaseURL = (string, noAddBase) => {
  if (string && string !== "") {
    if (string.charAt(0) !== "/" && string.charAt(0) !== "\\")
      string = "/" + string;
    if (string.charAt(string.length - 1) === "/")
      string = string.substr(0, string.length - 1);
    if (noAddBase === true) {
      return string;
    } else {
      return process.env.VUE_APP_BASE_API + string;
    }
  } else {
    return "";
  }
};



/**
 * @param value
 * @return {Boolean}
 * @description 判断是否为空
 * */
export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  )
}

/**
 * @param html
 * @return {String}
 * @description 过滤富文本HTML标签
 * */
export const getSimpleHtml = (html) => {
    html = html.replace('↵', '123')
    const re1 = new RegExp('<.+?>', 'g') // 匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
    const msg = html.replace(re1, '') // 执行替换成空字符
    return msg
}


/**
 * @param {String} msg
 * @param {String} time
 * @description 报错信息不重复
 */
let errorText = '';
let isForbid = false;
export const errorMessage = (msg, time = 3000) => {
  if (isForbid && msg === errorText) return;
  isForbid = true;
  errorMsg(msg);
  errorText = msg;
  setTimeout(() => {
    isForbid = false;
  }, time);
};



Vue.prototype.$addBaseURL = addBaseURL;
Vue.prototype.$isEmpty = isEmpty;
Vue.prototype.$getSimpleHtml = getSimpleHtml;
Vue.prototype.$errorMsg = errorMsg;
