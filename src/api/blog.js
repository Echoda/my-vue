import request from './request';

// 获取博客文章类型
export async function getBlogType() {
  return await request.get('/api/blogtype')
}

// 分页获取博客
export async function getBlog(pageNum = 1, limit = 10, categoryId = -1) {
  console.log(pageNum,limit,categoryId);
  return await request.get('/api/blog', {
    params: {
      pageNum,
      limit,
      categoryId
    }
  })
}