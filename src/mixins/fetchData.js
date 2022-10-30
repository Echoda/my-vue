// 异步获取远程数据
// 具体的组件中，需要提供一个远程获取数据的方法  fetchData
export default function fetchData(defaultDataVal = null) {
  return {
    data() {
      return {
        isLoading: true,
        data: defaultDataVal
      }
    },
    async created() {
      this.data = await this.fetchData()
      this.isLoading = false
    }
  }
} 