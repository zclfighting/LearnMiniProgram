// pages/song/song.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['http://p1.music.126.net/s8nIkAqjpo4cVkjk84CWSw==/109951164447391079.jpg',
      'http://p1.music.126.net/1dQtB09XYwCse4gEG8eFoQ==/109951164446259627.jpg',
      'http://p1.music.126.net/VyzQ2H2-ZI7fSYqdIVSOdw==/109951164446269724.jpg',
      'http://p1.music.126.net/zQlKIGN4JrcBGiwXNEPG5w==/109951164447766987.jpg',
      'http://p1.music.126.net/cscOysYAe-719xCVPh8eFQ==/109951164447809733.jpg'

    ],
    //定义歌单的数据
    music_list:[
      {
        img:"https://p2.music.126.net/yDFbKhM9wIO0GWEuOvxhVg==/109951164007799327.jpg",
        name:"大碗宽面",
        title:"吴亦凡-大碗宽面",
        id:"1359595520" 
      },
      {
        id: "1397105439" ,
        img: "/images/123.jpg",
        name: "雨幕",
        title: "黄恒威-雨幕"
      },
      {
        id: "1369798757" ,
        img: "/images/234.jpg",
        name: "怂鸡儿",
        title: "熊鹏-怂鸡儿"
      },
      {
        id: "1380075991" ,
        img: "https://p2.music.126.net/1VyUObcNZ1skcN5zavYqSg==/109951164238719593.jpg",
        name: "暗恋是一个人的事",
        title: "宿鱼阳-暗恋是一个人的事"
      },
      {
        id: "1396973729" ,
        img: "https://p2.music.126.net/1VyUObcNZ1skcN5zavYqSg==/109951164238719593.jpg",
        name: "大田後生仔",
        title: "丫蛋蛋-大田後生仔"
      }
      
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //当页面加载时option可以渠道
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
    console.log("分享");
  },
  //跳转页面
  gotoplay:function(event){
    var id=event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/play/play?mid='+id,
     
    });
  }
})