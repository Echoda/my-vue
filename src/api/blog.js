import request from './request';

// 获取博客文章类型
export async function getBlogType() {
  return await request.get('/api/blogtype')
}

// 分页获取博客
export async function getBlog() {
  return await request.get('/api/blog')
}