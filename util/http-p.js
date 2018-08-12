import config from '../config.js'

const tips = {
  1: '抱歉，出错了',
  1005: 'appkey无效，请前往ww.7yue.pro申请',
  3000: '期刊不存在'
}

class HTTP {

  request({ url, data = {}, method = 'GET' }) {
    return new Promise((resolve, reject) => {
      this._request(url, resolve, reject, data, method)
    })
  }

  _request(url, resolve, reject, data = {}, method = 'GET') {

    wx.request({
      url: config.baseUrl + url,
      method,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      data,
      success: res => {
        const code = res.statusCode + ''
        if (code.startsWith('2')) {
          resolve(res.data)
        } else {
          reject()
          const errorCode = res.data.error_code
          this._showError(errorCode)
        }
      },
      fail: err => {
        reject()
        wx.showToast({
          title: '错误',
          icon: 'none',
          duration: 2000
        })
      }
    })
  }

  _showError(errorCode) {
    if (!errorCode) {
      errorCode = 1
    }
    const tip = tips[errorCode] ? tips[errorCode] : tips[1]
    wx.showToast({
      title: tip,
      icon: 'none',
      duration: 2000
    })
  }
}

export default HTTP