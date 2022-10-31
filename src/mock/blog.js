import Mock from 'mockjs'
Mock.mock("/api/blogtype", 'get', {
  code: 0,
  msg: "",
  "data|10-20": [
    {
      "id|+1": 1,
      name: "分类@id",
      "articleCount|0-300": 0,
      "order|+1": 1,
    },
  ],
})

Mock.mock("/api/blog", 'get', {
  code: 0,
  msg: "",
  data: {
    total: 786,
    rows: [
      {
        id: '@guid',
        title: "@ctitle(4-50)",
        description: "@cparagraph(2-10)",
        category: {
          'id|1-10': 0,
          name: "分类@id"
        },
        'scanNumber|2-3000': 10,
        'commentNumber|0-100': 30,
        'thumb|1': [
          Mock.Random.image("300x250", "#000", "#fff", "Random Image"),
          null,
        ],
        createDate: `@data('T')`
      }
    ]
  }
})