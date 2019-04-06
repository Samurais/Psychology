const app = getApp();
/**
 * 计算顶部高度
 */
function getNavHeight(that) {
    var query = wx.createSelectorQuery();//单位px；
    query.select('#nav').boundingClientRect(function (rect) {
        that.setData({
            NavHeight: rect.height + app.globalData.CustomBar
        })
    }).exec();
}
Component({
    data: {
        StatusBar: app.globalData.StatusBar,
        CustomBar: app.globalData.CustomBar,
        TabCur: 0,
        scrollLeft: 0,
        news: {
            classNames: 'wux-animate--fadeInLeft',
            enter: true,
            exit: false,
            in: true,
        },
        special: {
            classNames: 'wux-animate--fadeInRight',
            enter: true,
            exit: false,
            in: false,
        },
        sp_list: [{
            title: "恋爱",
            color: 'red',
            id: '1',
            items: [{
                name: '暗恋',
                icon: '../images/1.png'
            }, {
                name: '早恋',
                icon: '../images/2.png'
            }, {
                name: '初恋',
                icon: '../images/3.png'
            }, {
                name: '失恋',
                icon: '../images/4.png'
            }, {
                name: '单恋',
                icon: '../images/1.png'
            }, {
                name: '异地恋',
                icon: '../images/2.png'
            }, {
                name: '谈恋爱',
                icon: '../images/3.png'
            }, {
                name: '恋爱恐慌',
                icon: '../images/4.png'
            }, ]
        }, {
            title: "婚姻",
            color: 'blue',
            id: '2',
            items: [{
                name: '离婚',
                icon: '../images/1.png'
            }, {
                name: '出轨',
                icon: '../images/2.png'
            }, {
                name: '结婚',
                icon: '../images/3.png'
            }, {
                name: '闪婚',
                icon: '../images/4.png'
            }, {
                name: '隐婚',
                icon: '../images/1.png'
            }, {
                name: '毕婚',
                icon: '../images/2.png'
            }, {
                name: '婚外恋',
                icon: '../images/3.png'
            }, {
                name: '异国婚姻',
                icon: '../images/4.png'
            }, ]
        }, {
            title: "婚姻",
            color: 'blue',
            id: '2',
            items: [{
                name: '离婚',
                icon: '../images/1.png'
            }, {
                name: '出轨',
                icon: '../images/2.png'
            }, {
                name: '结婚',
                icon: '../images/3.png'
            }, {
                name: '闪婚',
                icon: '../images/4.png'
            }, {
                name: '隐婚',
                icon: '../images/1.png'
            }, {
                name: '毕婚',
                icon: '../images/2.png'
            }, {
                name: '婚外恋',
                icon: '../images/3.png'
            }, {
                name: '异国婚姻',
                icon: '../images/4.png'
            }, ]
        }, {
            title: "婚姻",
            color: 'blue',
            id: '2',
            items: [{
                name: '离婚',
                icon: '../images/1.png'
            }, {
                name: '出轨',
                icon: '../images/2.png'
            }, {
                name: '结婚',
                icon: '../images/3.png'
            }, {
                name: '闪婚',
                icon: '../images/4.png'
            }, {
                name: '隐婚',
                icon: '../images/1.png'
            }, {
                name: '毕婚',
                icon: '../images/2.png'
            }, {
                name: '婚外恋',
                icon: '../images/3.png'
            }, {
                name: '异国婚姻',
                icon: '../images/4.png'
            }, ]
        }, {
            title: "婚姻",
            color: 'blue',
            id: '2',
            items: [{
                name: '离婚',
                icon: '../images/1.png'
            }, {
                name: '出轨',
                icon: '../images/2.png'
            }, {
                name: '结婚',
                icon: '../images/3.png'
            }, {
                name: '闪婚',
                icon: '../images/4.png'
            }, {
                name: '隐婚',
                icon: '../images/1.png'
            }, {
                name: '毕婚',
                icon: '../images/2.png'
            }, {
                name: '婚外恋',
                icon: '../images/3.png'
            }, {
                name: '异国婚姻',
                icon: '../images/4.png'
            }, ]
        }, ]
    },
    pageLifetimes: {
        show() {
            if (typeof this.getTabBar === 'function' &&
                this.getTabBar()) {
                this.getTabBar().setData({
                    selected: 2
                })
            }
        }
    },
    methods: {
        onLoad: function (options) {
            getNavHeight(this)
        },
        tabSelect(e) {
            var id = e.currentTarget.dataset.id,
                news = 'news.in',
                special = 'special.in',
                show = id == '0' ? true : false,
                noshow = id == '1' ? true : false
            this.setData({
                TabCur: id,
                scrollLeft: (e.currentTarget.dataset.id - 1) * 60,
                [news]: show,
                [special]: noshow
            })
        },
        toSpecial(e) {
            var title = e.currentTarget.dataset.title,
                id = e.currentTarget.dataset.id
            wx.navigateTo({
                url: "special?title=" + title + "&id=" + id,
            })
        },
    }

})