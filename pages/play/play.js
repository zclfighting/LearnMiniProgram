// pages/play/play.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    action:{
      "method":"play",
      },
      //歌曲id
    music_id: "",
    //控制播放状态
    state:"play",
    name:"",
    imgsrc:"",
    lyc_data:[],
    //歌词下标
    index:0,
    //控制当前歌词滚动，数值越大，网上位移越多
    top:0

  },
   click_play:function(){
      //当点击按钮时判断当前播放状态
      var st=this.data.state;
      if(st=="play"){
        this.setData({
          state:"pause",
          action: {
            "method": "pause"
          },
        })
      }else{
        this.setData({
          action: {
            "method": "play",
          },
          state:"play"
          })
      }
   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var mid=options.mid;
     this.setData({
       music_id:mid
     });
     //更换图片及其他信息
     var id=this.data.music_id;
     var that=this; 
     wx.request({
       url: 'https://music.163.com/api/song/detail/?id=1359595520&ids=['+id+']',
       success:function(res){
        //console.log("歌名："+res.data.songs[0].name);
        that.setData({
          name: res.data.songs[0].name,
          imgsrc: res.data.songs[0].album.picUrl
        })
       },
       
     })
     //获取歌词
     wx.request({
       url: 'http://music.163.com/api/song/lyric?os=pc&id=' + id + '&lv=-1&tv=-1'
,
       success:function(res){
           var songs_list=[];
           var lrc_str=res.data.lrc.lyric
           var lrc_list=lrc_str.split("\n");

           // /\[\d{2}:\d{2}.\d{2,3}]/
           for(var i=0;i<lrc_list.length;i++){
             var change = /\[\d{2}:\d{2}\.\d{2,3}\]/  ;
             var time_list=lrc_list[i].match(change);
             var txt_str= lrc_list[i].replace(change,"");
             if(txt_str!=""){
               var time_txt = time_list[0].slice(1, -1);
               var list_t=time_txt.split(":");
               var time=parseFloat(list_t[0])*60+parseFloat(list_t[1]);
               songs_list.push([time,txt_str])
               that.setData({
                 lrc_data:songs_list
               })
             }

           }
       },
     })
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

  },
  timechange:function(e){
   //console.log(e.detail.currentTime);
    var time_com = e.detail.currentTime  
    //用歌词时间进行遍历来与当前播放时间进行比对,来定位歌词
    var list=this.data.lrc_data;
    for(var i=0;i<list.length-1;i++){
      if (time_com > list[i][0] && time_com < list[i + 1][0]){
        this.setData({
          index:i
        })
      }

    }
    //借助下表的持续增大，来进行top值的 增长来实现歌词的自动滚动
    if(this.data.index>=8){
      this.setData({
        top:(this.data.index-8)*25
      })
    }
  },
})