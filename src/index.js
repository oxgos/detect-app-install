export default function detectApp(openUrl, downloadUrl, checkTime=2500) {
  return new Promise((resolve, reject) => {
    const browser = BrowserInfo()
    document.addEventListener('visibilitychange', function() {
      console.log(isPageHidden())
      if (isPageHidden()) {
        resolve()
        clearTimeout(timer)
      }
    }, false)
    timer = setTimeout(function() {
      window.location.href = downloadUrl
      reject()
    }, checkTime)
  
    if (browser.isAndroid) {
      const iframe = document.createElement('iframe')
      iframe.src = openUrl
      iframe.style.display = 'none'
      document.body.appendChild(iframe)
      setTimeout(function() {
        document.body.removeChild(iframe)
      }, 2000)
    } else if (browser.isIos) {
      window.location.href = openUrl
    }
  })
}

function BrowserInfo() {
  const u = navigator.userAgent
  return {
    isIos: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    isAndroid: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
  }
}
function isPageHidden() {
  const hiddens = {
    hidden: 1,
    webkitHidden: 1,
    mozHidden: 1,
    msHidden: 1
  }
  for (let key in hiddens) {
    if (typeof document[key] !== undefined) {
      return document[key]
    }
  }
  return false
}