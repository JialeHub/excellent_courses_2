const routes = [
  /** **************************************** 首页home **************************************** **/
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      name: '精品课程',
      title: '精品课程',
      keepAlive: true
    }
  },
  /** **************************************** 评价evaluate **************************************** **/
  // 校外专家评价
  {
    path: '/outside',
    name: 'outside',
    component: () => import('@/views/evaluate/outside/index.vue'),
    meta: {
      name: '校外专家评价 | 精品课程',
      title: '校外专家评价 | 精品课程',
      keepAlive: true
    }
  },
  // 校内专家评价
  {
    path: '/school',
    name: 'school',
    component: () => import('@/views/evaluate/school/index.vue'),
    meta: {
      name: '校内专家评价 | 精品课程',
      title: '校内专家评价 | 精品课程',
      keepAlive: true
    }
  },
  // 教师评价
  {
    path: '/teacher',
    name: 'teacher',
    component: () => import('@/views/evaluate/teacher/index.vue'),
    meta: {
      name: '教师评价 | 精品课程',
      title: '教师评价 | 精品课程',
      keepAlive: true
    }
  },
  // 学生评价
  {
    path: '/student',
    name: 'student',
    component: () => import('@/views/evaluate/student/index.vue'),
    meta: {
      name: '学生评价 | 精品课程',
      title: '学生评价 | 精品课程',
      keepAlive: true
    }
  },
  // 学生评价详情
  {
    path: '/reply',
    name: 'reply',
    component: () => import('@/views/evaluate/student/reply.vue'),
    meta: {
      name: '学生评价详情 | 精品课程',
      title: '学生评价详情 | 精品课程',
      keepAlive: true
    }
  },
  /** **************************************** 考试平台exam **************************************** **/
  // 客观题
  {
    path: '/objective',
    name: 'objective',
    component: () => import('@/views/exam/objective/index.vue'),
    meta: {
      name: '客观题 | 精品课程',
      title: '客观题 | 精品课程',
      keepAlive: true
    }
  },
  // 主观题
  {
    path: '/subjective',
    name: 'subjective',
    component: () => import('@/views/exam/subjective/index.vue'),
    meta: {
      name: '主观题 | 精品课程',
      title: '主观题 | 精品课程',
      keepAlive: true
    }
  },
  // 模拟考试
  {
    path: '/practice',
    name: 'practice',
    component: () => import('@/views/exam/practice/index.vue'),
    meta: {
      name: '模拟考试 | 精品课程',
      title: '模拟考试 | 精品课程',
      keepAlive: true
    }
  },
  /** **************************************** 教学资源resource **************************************** **/
  // 教学课件
  {
    path: '/courseware',
    name: 'courseware',
    component: () => import('@/views/resource/courseware/index.vue'),
    meta: {
      name: '教学课件 | 精品课程',
      title: '教学课件 | 精品课程',
      keepAlive: true
    }
  },
  // 教学录像
  {
    path: '/video',
    name: 'video',
    component: () => import('@/views/resource/video/index.vue'),
    meta: {
      name: '教学录像 | 精品课程',
      title: '教学录像 | 精品课程',
      keepAlive: true
    }
  },
  // 教学大纲
  {
    path: '/outline',
    name: 'outline',
    component: () => import('@/views/resource/outline/index.vue'),
    meta: {
      name: '教学大纲 | 精品课程',
      title: '教学大纲 | 精品课程',
      keepAlive: true
    }
  },
  /** **************************************** 学习记录record **************************************** **/
  {
    path: '/record',
    name: 'record',
    component: () => import('@/views/record/index.vue'),
    meta: {
      name: '学习记录 | 精品课程',
      title: '学习记录 | 精品课程',
      keepAlive: true
    }
  },
  /** **************************************** 师生互动interaction **************************************** **/
  {
    path: '/interaction',
    name: 'interaction',
    component: () => import('@/views/interaction/index.vue'),
    meta: {
      name: '师生互动 | 精品课程',
      title: '师生互动 | 精品课程',
      keepAlive: true
    }
  },
  /** **************************************** 作业提交homework **************************************** **/
  {
    path: '/homework',
    name: 'homework',
    component: () => import('@/views/homework/index.vue'),
    meta: {
      name: '作业提交 | 精品课程',
      title: '作业提交 | 精品课程',
      keepAlive: true
    }
  },
  /** **************************************** 用户模块user **************************************** **/
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/user/login/index.vue'),
    meta: {
      name: '用户登录 | 精品课程',
      title: '用户登录 | 精品课程',
      keepAlive: false
    }
  },
  // 注册
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/user/register/index.vue'),
    meta: {
      name: '用户注册 | 精品课程',
      title: '用户注册 | 精品课程',
      keepAlive: false
    }
  },
  // 修改密码
  {
    path: '/password',
    name: 'password',
    component: () => import('@/views/user/password/index.vue'),
    meta: {
      name: '修改密码 | 精品课程',
      title: '修改密码 | 精品课程',
      keepAlive: false
    }
  },
  // 个人中心
  {
    path: '/personal',
    name: 'personal',
    component: () => import('@/views/user/personal/index.vue'),
    meta: {
      name: '个人中心 | 精品课程',
      title: '个人中心 | 精品课程',
      keepAlive: true
    }
  },
  /** **************************************** 处理页 **************************************** **/
  // 重定向首页
  {
    path: '/home',
    redirect: '/',
    meta: {
      name: '精品课程',
      title: '精品课程'
    }
  },
  // 错误页
  {
    path: '/404',
    name: 'Error404',
    component: () => import('@/views/error/404/index.vue'),
    meta: {
      name: '未找到页面 | 精品课程',
      title: '未找到页面 | 精品课程'
    }
  },
  // 重定向404
  {
    path: '*',
    redirect: '/404',
    meta: {
      name: '未找到页面 | 精品课程',
      title: '未找到页面 | 精品课程'
    }
  }
]

export default routes
