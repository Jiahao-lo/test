Page({
  data: {
    daily: ''
  },
  onDailyInput(e) {
    this.setData({ daily: e.detail.value });
  },
  submit() {
    const app = getApp();
    wx.request({
      url: `${app.globalData.server}/submitYield`,
      method: 'POST',
      data: {
        token: app.globalData.token,
        date: new Date().toISOString().slice(0,10),
        daily: Number(this.data.daily)
      },
      success: () => {
        wx.navigateTo({ url: '/pages/leaderboard/leaderboard' });
      },
      fail: () => {
        wx.showToast({ title: 'Submit failed', icon: 'none' });
      }
    });
  }
});
