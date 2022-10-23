import axios from 'axios'
import message from '@/utils/message'

const ins = axios.create() // 创建一个axios实例
ins.interceptors.response.use(function(res){
  if(res.data.code === 0){
    return res.data.data
  }else{
    message({
      msg: res.data.msg,
      type: 'error',
      duration: 1000
    })
    return null
  }
})

export default ins