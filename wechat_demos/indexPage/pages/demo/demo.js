// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    product_list: [{ imageUrl: '../../images/image1.jpg', title:'史蒂芬--头号玩家'},
      { imageUrl: '../../images/image2.jpg', title: '序列之战' },
      { imageUrl: '../../images/image2.jpg', title: '序列之战' },
      { imageUrl: '../../images/image1.jpg', title: '史蒂芬--头号玩家' }],
    product_evaluation_list:[{
      imageUrl:'../../images/image3.jpg',
      avatar:'../../images/image5.jpg',
      title:'加菲猫--最受欢迎的动漫猫',
      content:'郑先生急于用钱，但是由于自身有不良征信记录，无法通过正规银行渠道贷款，于是找到从事小额借货的欧某提出借贷需求。'
    }, {
      imageUrl: '../../images/image4.jpg',
      avatar: '../../images/image5.jpg',
      title: '东京食尸鬼',
      content: '郑先生急于用钱，但是由于自身有不良征信记录，无法通过正规银行渠道贷款，于是找到从事小额借货的欧某提出借贷需求。'
      },{
        imageUrl: '../../images/image3.jpg',
        avatar: '../../images/image5.jpg',
        title: '加菲猫--最受欢迎的动漫猫',
        content: '郑先生急于用钱，但是由于自身有不良征信记录，无法通过正规银行渠道贷款，于是找到从事小额借货的欧某提出借贷需求。'
      }, {
        imageUrl: '../../images/image4.jpg',
        avatar: '../../images/image5.jpg',
        title: '东京食尸鬼',
        content: '郑先生急于用钱，但是由于自身有不良征信记录，无法通过正规银行渠道贷款，于是找到从事小额借货的欧某提出借贷需求。'
      }]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})