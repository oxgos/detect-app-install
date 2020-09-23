## web page检测是否安装App

> 使用方法

```Javascript
<script src="../dist/detectAppInstall.min.js"></script>
/*
  * @params {Object} open Ios/Android: schema URL
  * PS: IOS用schema URL会默认弹出确认提示框，若想取消，IOS可尝试用Universal Link(但作者没测试)
  * @params {Number} checkTime 等待时间，若超过时间，自动打开downloadUrl, 默认2500ms
 */

detectAppInstall(params, checkTime)
  .then(() => {
    document.getElementById('content').innerHTML = '已安装'
  })
  .catch(() => {
    document.getElementById('content').innerHTML = '未安装'
    // window.location.href = downloadUrl
  })

```
> 打包方法
`npm run build`
****