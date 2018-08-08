import HTTP from '../util/http.js'

class ClassicModel extends HTTP {
  getLatest(sCallback) {
    let that = this
    this.request({
      url: '/classic/latest',
      success: function (res) {
        sCallback && sCallback(res)
        that._setLatestIndex(res.index)
      }
    })
  }

  getClassic(index, nextOrPrevious, sCallback) {
    let key = nextOrPrevious === 'next' ? this._getKey(index + 1) : this._getKey(index - 1)
    let classic = wx.getStorageSync(key)
    if (!classic) {
      this.request({
        url: `/classic/${index}/${nextOrPrevious}`,
        success: function (res) {
          wx.setStorageSync(key, res)
          sCallback && sCallback(res)
        }
      })
    } else {
      sCallback && sCallback(classic)
    }
  }

  isFirst(index) {
    return index === 1
  }

  isLatest(index) {
    let latestIndex = this._getLatestIndex()
    return index === latestIndex
  }

  _setLatestIndex(index) {
    wx.setStorageSync('latest', index)
  }

  _getLatestIndex() {
    let index= wx.getStorageSync('latest')
    return index
  }

  _getKey(index) {
    return `classic-${index}`
  }
}

export default ClassicModel