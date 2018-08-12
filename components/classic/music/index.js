// components/classic/music/index.js
import classicBehavior from '../classic-bahavior.js'

const BAM = wx.getBackgroundAudioManager()

Component({

  behaviors: [classicBehavior],

  /**
   * 组件的属性列表
   */
  properties: {
    src: String,
    title: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false,
    playSrc: 'images/player@play.png',
    pauseSrc: 'images/player@pause.png'
  },

  attached() {
    this._recoverStatus()
    this._monitorSwitch()
  },  

  detached() {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay(event) {
      if (!this.data.playing) {
        this.setData({
          playing: true
        })
        BAM.src = this.properties.src
        BAM.title = this.properties.title
      } else {
        this.setData({
          playing: false
        })
        BAM.pause()
      }
    },

    _recoverStatus() {
      if (BAM.paused) {
        this.setData({
          playing: false
        })
        return
      }
      if (BAM.src === this.properties.src) {
        this.setData({
          playing: true
        })
      }
    },

    _monitorSwitch() {
      BAM.onPause(() => {
        this._recoverStatus()
      })
      BAM.onPlay(() => {
        this._recoverStatus()
      })
      BAM.onStop(() => {
        this._recoverStatus()
      })
      BAM.onEnded(() => {
        this._recoverStatus()
      })
    }
  }
})
