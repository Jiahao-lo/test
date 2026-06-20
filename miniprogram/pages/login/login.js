Page({
  data: {
    username: '',
    group: ''
  },
  onUsernameInput(e) {
    this.setData({ username: e.detail.value });
  },
  onGroupChange(e) {
    this.setData({ group: e.detail.value });
  },
  login() {
    const app = getApp();
    wx.request({
      url: `${app.globalData.server}/login`,
      method: 'POST',
      data: { username: this.data.username, group: this.data.group },
      success: (res) => {
        app.globalData.token = res.data.token;
        wx.navigateTo({ url: '/pages/upload/upload' });
      },
      fail: () => {
        wx.showToast({ title: 'Login failed', icon: 'none' });
      }
    });
  }
});
