// components/classic/music/index.js
import classicBehavior from '../classic-bahavior.js'

const BAM = wx.getBackgroundAudioManager()

Component({

  behaviors: [classicBehavior],

  /**
   * 组件的属性列表
   */
  properties: {
    src: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false,
    playSrc: 'images/player@play.png',
    pauseSrc: 'images/player@pause.png'
  },

  detached() {
    BAM.pause()
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
      } else {
        this.setData({
          playing: false
        })
        BAM.pause()
      }
    }
  }
})
