// client/pages/plan/plan_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectItems: [],
    isAssign: false,
    position: "static",
    textareaShow: true,
    levelIndex: 0,
    levelArray: ['1级别', '2级别', '3级别'],
    timeIndex: 0,
    timeArray: ['小时', '天', '周'],
<<<<<<< HEAD
    hanlderText:"选择经办人",
    hanlderUid:"",
    level:1,
=======
    taskInfo: {}
>>>>>>> a4ff400549292f48d8f07de436e1d1d5dd3f72e7
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.selectable = this.selectComponent("#selectable");
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
  onShareAppMessage: function() {

  },
  selectHandler: function(e) {
    var selectItems = [];
    selectItems.push({
      handerUid: "U0001",
      handerName: "我自己"
    })
    console.log('选择经办人', e.detail.value)
    for (var i = 0; i < 10; i++) {
      selectItems.push({
        handerUid: "U00" + (i + 2),
        handerName: "王丽丽" + (i + 2)
      })
    }
    this.setData({
      selectItems: selectItems,
    })
    this.selectable.showSelect(e);
  },
  levelChange: function(e) {
    console.log('picker发送选择改变，携带值为', e)
    this.setData({
      levelIndex: e.detail.value,
      level: e.detail.value
    })
  },
  timeChange: function(e) {
    console.log('picker time 发送选择改变，携带值为', e.detail.value)
    this.setData({
      timeIndex: e.detail.value
    })
  },
  savTaskSubmit: function(e) {
    var taskInfo = e.detail.value;
    console.log('创建任务信息', taskInfo)
  },
  closeSelect: function(e) {
    console.log("关闭", e);
    this.setData({
      position: "static",
      textareaShow: true,
    })
  },
<<<<<<< HEAD
  confirmSelect: function (e) {
=======
  selected: function(e) {
>>>>>>> a4ff400549292f48d8f07de436e1d1d5dd3f72e7
    var selectedItems = this.selectable.data.selectedItems;
    var selectedItem = selectedItems[0];
    console.log('选择经办人信息', selectedItem)
    this.setData({
      hanlderText: selectedItem.handerName,
      hanlderUid: selectedItem.handerUid
    })
  },
  inputText: function(e) {
    var text = this.selectable.data.inputText;
    console.log("查询文字：", text);
    //TODO
  },
})