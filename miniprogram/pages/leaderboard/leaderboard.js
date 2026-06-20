Page({
  data: {
    list: []
  },
  onLoad() {
    const app = getApp();
    wx.request({
      url: `${app.globalData.server}/leaderboard`,
      method: 'GET',
      data: {
        date: new Date().toISOString().slice(0,10),
        group: ''
      },
      success: (res) => {
        this.setData({ list: res.data });
      }
    });
  }
});
