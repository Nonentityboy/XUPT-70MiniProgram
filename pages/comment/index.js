//Page Object
Page({
    data: {
        lists: [],
        base: "http://m2t9650514.qicp.vip"
    },
    //options(Object)
    onLoad: function(options) {
        console.log(options);

        this.getInfo(options.id, options.type);
    },
    getInfo(id, type) {
        const baseUrl = "http://m2t9650514.qicp.vip";
        wx.request({
            url: baseUrl + `/wxReq/comment/${id}/${type}?pageNum=1&pageSize=10`,
            header: { 'content-type': 'application/json' },
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (result) => {
                let res = result.data.data.rows;
                this.setData({
                    lists: res,
                    // imgUrl: baseUrl + res[i++].avatar
                })


            },
        });
    }
});