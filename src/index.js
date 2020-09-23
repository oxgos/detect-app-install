export default function detectApp({ ios, android }, checkTime = 3000) {
  return new Promise((resolve, reject) => {
    const browser = BrowserInfo()
    const start = +new Date()
    let timer
    if (browser.isIos) {
      timer = window.setInterval(function() {
        let end = +new Date()
        if (end - start > checkTime) {
          clearInterval(timer)
          if (isPageHidden()) {
            resolve()
          } else {
            reject()
          }
        }
      }, 100)
      window.location.href = ios.url
    } else if (browser.isAndroid) {
      const iframe = document.createElement('iframe')
      iframe.src = android.url
      iframe.style.display = 'none'

      let count = 0
      timer = window.setInterval(function() {
        count++
        if (count >= 100) {
          let end = +new Date()
          if (end - start > checkTime || isPageHidden()) {
            resolve()
          } else {
            reject()
          }
        }
      }, 20)

      document.body.appendChild(iframe)
      setTimeout(function() {
        document.body.removeChild(iframe)
      }, 2000)
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