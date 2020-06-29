import { http } from '../../../utils/util'

// 是否正在请求中
let requesting = false
// 每页的数量
let pageSize = 15
// 当前页码
let page = 1

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 当前选中的类型
    typeChecked: 30,
    // 所有的类型list，使用 data 定义，比 xml 写死更方便扩展
    typeList: [
      { value: 30, label: '溯源活动' },
      { value: 20, label: '线下活动' },
    ],
    // 列表list数据
    traceabilityList: [
      {
        formId: 23452354,
        status: 1,
        approveStatus: 1,
        coverPicture: 'https://img.ixiaocong.com/image/activity/e0a90aa8910e4d39969a4132639d7d58.jpg',
      },
    ],
    // 是否有更多数据
    hasMore: true,
    // 判断是否为初始请求，防止第一次进入页面 list.length 为 0 而显示 no-data.png 的情况
    initPage: true,
    // 请求是否完成
    // 之所以定义两个，是因为使用 js 内存的变量判断逻辑更简单、快捷、且不涉及更新机制的问题。
    requestLoading: false,
  },
  // 切换类型选择
  changeType(e) {
    let type = e.currentTarget.dataset.type
    // 在激活菜单点击自身，不可以做重复处理
    if (this.data.typeChecked === type) {
      return
    }
    if (requesting) {
      wx.showToast({
        title: '请不要频繁点击哦',
        icon: 'none',
      })
      return
    }
    // 切换类型需要恢复变量的初始值
    page = 1
    this.setData({
      initPage: true,
      hasMore: true,
      traceabilityList: [],
      typeChecked: type,
    })
    this.findMsgList()
  },
  // 初始化查询
  findMsgList() {
    // 默认日期为1970年
    // 此行无用
    let lastCreated = +new Date()

    // 参数写在外层，而不写在http的那行代码中，利于扩展，且更清晰
    let params = {
      pageSize: pageSize,
      pageIndex: page,
      displayType: this.data.typeChecked,
      lastCreated,
    }
    // 设置请求状态 为请求中
    this.setData({
      requestLoading: true,
    })
    requesting = true

    // 开始请求
    http('/msc/msgs/list', params)
      .then(res => {
        if (res.success) {
          // 下拉刷新的时候需要重置数据，所以加此判断
          let oldList = this.data.initPage ? [] : this.data.traceabilityList

          // 防止后端返回 null
          let newList = res.data.records || []

          // 根据返回的长度判断是否还有下一页
          if (newList.length < pageSize) {
            this.setData({ hasMore: false })
          }
          // 将新数据添加进去
          for (let item of newList) {
            // 此处使用循环而不使用 concat 的原因是：有些新数据需要在此进行处理
            // 例如：日期的格式化、文字的拼接、字符串转array、数值计算 等等
            // methods
            oldList.push(item)
          }
          this.setData({
            traceabilityList: oldList,
          })
        }

        /* 无论成功、失败都需要进行的处理 begin */
        /* 可以抽离成方法，如果支持 finally 的写法，需要写在finally中，当前小程序基础包版本不支持此语法  */
        this.setData({
          requestLoading: false,
          initPage: false,
        })
        requesting = false
        wx.stopPullDownRefresh()
        /* 无论成功、失败都需要进行的处理 end */
      })
      .catch(err => {
        console.log(err)

        /* 无论成功、失败都需要进行的处理 begin */
        /* 可以抽离成方法，如果支持 finally 的写法，需要写在finally中，当前小程序基础包版本不支持此语法  */
        this.setData({
          requestLoading: false,
          initPage: false,
        })
        requesting = false
        wx.stopPullDownRefresh()
        /* 无论成功、失败都需要进行的处理 end */
      })
  },
  /**
   * 转溯源详情
   * @param e
   */
  goTraceabilityDetail(e) {
    let traceability = e.currentTarget.dataset.item
    let formId = traceability.formId
    wx.navigateTo({
      url: `/my/traceability/detail/index?formId=${formId}`,
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    this.loadMore()
  },
  /*
   * 加载更多
   */
  loadMore() {
    // 首选判断请求中，在判断是否有下一页，去除无用请求
    if (requesting || !this.data.hasMore) {
      return
    }
    page++
    this.findMsgList()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // js Page外层定义的变量需要复原。
    // 原因： 页面顶层定义的变量会在js加在的时候就渲染上，跳入其他页面在回来的时候，变量会发生保存的情况。
    requesting = false
    page = 1
    // 重新进入了页面，所以需要重新设置 initPage 状态
    this.setData({ initPage: true })
    this.findMsgList()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    // 此处其实会发生一个小bug，在上次请求1进行中的时候，触发下拉刷新请求2，页面如果2比1快会渲染1的数据。
    page = 1
    this.setData({ initPage: true })
    this.findMsgList()
  },
})
