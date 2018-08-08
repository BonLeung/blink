// components/classic/movie/index.js
import classicBahavior from '../classic-bahavior.js'

Component({

  behaviors: [classicBahavior],

  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    pauseSrc: 'images/player@waitting.png',
    playSrc: 'images/player@playing.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
