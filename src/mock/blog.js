import Mock from 'mockjs'
Mock.mock("/api/blogtype", 'get', {
  code: 1,
  msg: "出错了",
  data: [{
    id: 1,
    name: "分类1",
    articleCount: 10,
    order: 1
  }, {
    id: 2,
    name: "分类2",
    articleCount: 10,
    order: 2
  }, {
    id: 3,
    name: "分类3",
    articleCount: 10,
    order: 3
  }]
})