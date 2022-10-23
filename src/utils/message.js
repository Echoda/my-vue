import style from './message.module.less'
import { getComponentRootDom } from './index'
import Icon from '@/components/Icon'
/**
 * @desc 展示message
 * @param {String} info // message消息体
 * @param {Number} duration // 展示时长
 * @param {String} type // 消息类型
 * @param {Element} container // 展示message的容器
 * @param {Function} callback // 回调
 * 
 */
export default function message(options = {}) {
  console.log(options);
  const type = options.type || 'info'
  const msg = options.msg
  const duration = options.duration || 2000
  const container = options.container || document.body

  const msgDiv = document.createElement('div')

  const iconDom = getComponentRootDom(Icon, { type: type })
  msgDiv.innerHTML = `<span> ${iconDom.outerHTML} ${msg} </span>`
  msgDiv.className = `${style.msg} ${style["msg-" + type]}`

  if (window.getComputedStyle(container).position === 'static') {
    container.style.position = 'relative'
  }

  container.appendChild(msgDiv);

  msgDiv.style.opacity = 0;
  msgDiv.style.transform = 'translate(-50%, -50%) translateY(10px)';
  msgDiv.style.transition = '0.3s';

  msgDiv.clientHeight; // 浏览器强制渲染

  msgDiv.style.opacity = 1;
  msgDiv.style.transform = 'translate(-50%, -50%) translateY(0px)';

  setTimeout(() => {
    msgDiv.style.opacity = 0;
    msgDiv.style.transform = 'translate(-50%, -50%) translateY(-10px)';
    // 监听transitionEnd时卸载dom
    msgDiv.addEventListener('transitionend', function () {
      msgDiv.remove()
      options.callback && options.callback()
    }, { once: true })
  }, duration);


}