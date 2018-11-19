// client/pages/plan/plan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    todoTaskList: [],
    startX: 0, //开始坐标
    startY: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    for (var i = 1; i < 6; i++) {
      this.data.todoTaskList.push({
        id: "ID" + i,
        level: "一级",
        content: i + "我的任务",
        isTouchMove: false //默认隐藏删除
      })
    }
    this.setData({
      todoTaskList: this.data.todoTaskList
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {},

})