import config from '../config.js' 

const tips = {
  1: '抱歉，出错了',
  1005: 'appkey无效，请前往ww.7yue.pro申请',
  3000: '期刊不存在'
}

class HTTP {

  constructor() {
    this.baseUrl = config.baseUrl
  }

  request(params) {
    let url = this.baseUrl + params.url
    let method = params.method || 'GET'
    let data = params.data || {}
    
    wx.request({
      url: url,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      data: data,
      success: res => {
        let code = res.statusCode + ''
        if (code.startsWith('2')) {
          params.success(res.data)
        } else {
          let errorCode = res.data.error_code
          this._showError(errorCode)
        }
      },
      fail: err => {
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
    wx.showToast({
      title: tips[errorCode],
      icon: 'none',
      duration: 2000
    })
  }
}

export default HTTP