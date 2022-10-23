import request from './request';

// 获取博客文章类型
export async function getBlogType() {
  return await request.get('/api/blogtype')
}