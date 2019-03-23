export default {
    menuDate:[
        {
            name:'首页',
            path:'/admin',
            id:'0'
        },
        {
            name:'设置',
            path:'/admin/setting',
            id:'1'
        },
        {
            name:'用户管理',
            path:'/admin/uesr',
            id:'2',
            children:[
                {
                    name:'用户添加',
                    path:'/admin/add',
                    id:'20'
                },
                {
                    name:'管理员管理',
                    path:'/admin/root',
                    id:'21'
                }
            ]
        },
        {
            name:'图表展示',
            path:'/admin/echart',
            id:'3',
            children:[
                {
                    name:'饼状图',
                    path:'/admin/echart/bin',
                    id:'30',
                    children:[
                        {
                            name:'饼图1',
                            path:'/admin/echart/bin/1',
                            id:'300'
                        },
                        {
                            name:'饼图2',
                            path:'/admin/echart/bin/2',
                            id:'301'
                        }
                    ]
                },
                {
                    name:'折线图',
                    path:'/admin/echart/line',
                    id:'31',
                    children:[
                        {
                            name:'折线图1',
                            path:'/admin/echart/line/1',
                            id:'310'
                        },
                        {
                            name:'折线图2',
                            path:'/admin/echart/line/2',
                            id:'311'
                        }
                    ]
                }
            ]
        }
    ]
}