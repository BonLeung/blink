import HTTP from '../util/http.js'

class Classic extends HTTP {
  getLatest(sCallback) {
    this.request({
      url: '/classic/latest',
      success: function(res) {
        sCallback && sCallback(res)
      }
    })
  }
}

export default Classic