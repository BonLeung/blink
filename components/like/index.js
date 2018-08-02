// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Boolean
    },
    count: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeSrc: 'images/like.png',
    likeDisSrc: 'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(event) {
      console.log(event)
      let like = this.properties.like
      let count = this.properties.count

      count = like ? --count : ++count
      this.setData({
        like: !like,
        count: count
      })

      let behavior = this.properties.like ? 'like' : 'cancel'
      
    }
  }
})
