import loadingUrl from "@/assets/loading.svg";
import styles from './loading.module.less'

// 创建loading
function createLoading(el) {
  const img = document.createElement('img')
  img.dataset.role = 'loading'
  img.src = loadingUrl
  img.className = styles.loading
  el.appendChild(img)
}

// 获取当前存在的loading
function getLoading(el) {
  return el.querySelector('img[data-role=loading]')
}

// 导出自定义指令的配置对象，只在insert和update勾子运行的话可以写成function形式 
export default function loading(el, binding) {
  const curLoading = getLoading(el)

  if (binding.value) {
    // 当前没有loading才创建loading
    if(!curLoading) {
      createLoading(el)
    }
  } else {
    if(curLoading){
      curLoading.remove()
    }
  }
}